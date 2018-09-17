/*************************************************************
 *
 *  Copyright (c) 2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview  Implements the TeX InputJax object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {AbstractInputJax} from '../core/InputJax.js';
import {defaultOptions, userOptions, separateOptions, OptionList} from '../util/Options.js';
import {MathItem} from '../core/MathItem.js';
import {MmlNode} from '../core/MmlTree/MmlNode.js';

import {FindTeX} from './tex/FindTeX.js';

import FilterUtil from './tex/FilterUtil.js';
import NodeUtil from './tex/NodeUtil.js';
import TexParser from './tex/TexParser.js';
import TexError from './tex/TexError.js';
import ParseOptions from './tex/ParseOptions.js';
import {TagsFactory} from './tex/Tags.js';
import {Configuration, ConfigurationHandler} from './tex/Configuration.js';
import {SubHandlers} from './tex/MapHandler.js';
// Import base as it is the default package loaded.
import './tex/base/BaseConfiguration.js';


/*****************************************************************/
/*
 *  Implements the TeX class (extends AbstractInputJax)
 */

/**
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export class TeX<N, T, D> extends AbstractInputJax<N, T, D> {

  /**
   * Name of input jax.
   * @type {string}
   */
  public static NAME: string = 'TeX';

  /**
   * Default options for the jax.
   * @type {OptionList}
   */
  public static OPTIONS: OptionList = {
    ...AbstractInputJax.OPTIONS,
    FindTeX: null,
    packages: ['base'],
    // Digit pattern to match numbers.
    digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
    // Maximum size of TeX string to process.
    maxBuffer: 5 * 1024
  };

  /**
   * The FindTeX instance used for locating TeX in strings
   */
  protected findTeX: FindTeX<N, T, D>;

  private configuration: Configuration;
  private parseOptions: ParseOptions;
  private latex: string;
  private mathNode: MmlNode;

  /**
   * Initialises the configurations.
   * @param {string[]} packages Names of packages.
   * @return {Configuration} The configuration object.
   */
  private static configure(packages: string[]): Configuration {
    let configuration = Configuration.empty();
    // Combine package configurations
    for (let key of packages) {
      let conf = ConfigurationHandler.get(key);
      if (conf) {
        configuration.append(conf);
      }
    }
    configuration.append(Configuration.extension());
    return configuration;
  }



  /**
   * Initialises the parse options.
   * @param {Configuration} configuration A configuration.
   * @return {ParseOptions} The initialised parse options.
   */
  private static options(configuration: Configuration): ParseOptions {
    let options = new ParseOptions();
    options.handlers = new SubHandlers(configuration);
    options.itemFactory.configuration = options;
    // Add node factory methods from packages.
    options.nodeFactory.configuration = options;
    options.nodeFactory.setCreators(configuration.nodes);
    // Add stackitems from packages.
    options.itemFactory.addStackItems(configuration.items);
    // Set default options for parser from packages and for tags.
    defaultOptions(options.options, TeX.OPTIONS, TagsFactory.OPTIONS, configuration.options);
    return options;
  };


  /**
   * Initialises the Tags factory. Add tagging structures from packages and set
   * tagging to given default.
   * @param {ParseOptions} options The parse options.
   * @param {Configuration} configuration The configuration.
   */
  private static tags(options: ParseOptions, configuration: Configuration) {
    TagsFactory.addTags(configuration.tags);
    TagsFactory.setDefault(options.options.tags);
    options.tags = TagsFactory.getDefault();
    options.tags.configuration = options;
  }

  /**
   * @override
   */
  constructor(options: OptionList = {}) {
    let packages = options['packages'] || TeX.OPTIONS['packages'];
    let configuration = TeX.configure(packages);
    let parseOptions = TeX.options(configuration);
    defaultOptions(parseOptions.options, {'packages': packages});
    let [tex, find, rest] = separateOptions(options, FindTeX.OPTIONS, parseOptions.options);
    super(tex);
    userOptions(parseOptions.options, options);
    TeX.tags(parseOptions, configuration);
    this.parseOptions = parseOptions;
    this.configuration = configuration;
    for (let pre of configuration.preprocessors) {
      typeof pre === 'function' ? this.preFilters.add(pre) :
        this.preFilters.add(pre[0], pre[1]);
    }
    for (let post of configuration.postprocessors) {
      typeof post === 'function' ? this.postFilters.add(post) :
        this.postFilters.add(post[0], post[1]);
    }
    this.postFilters.add(FilterUtil.cleanSubSup, -4);
    this.postFilters.add(FilterUtil.cleanStretchy, -3);
    this.postFilters.add(FilterUtil.cleanAttributes, -2);
    this.postFilters.add(FilterUtil.combineRelations, -1);
    this.findTeX = this.parseOptions.options['FindTeX'] || new FindTeX(find);
  }


  /**
   * @override
   */
  public compile(math: MathItem<N, T, D>): MmlNode {
    this.parseOptions.clear();
    let node: MmlNode;
    let parser: TexParser;
    let display = math.display;
    this.latex = math.math;
    this.executeFilters(this.preFilters, math, this.parseOptions);
    try {
      parser = new TexParser(this.latex,
                             {display: display, isInner: false},
                             this.parseOptions);
      node = parser.mml();
    } catch (err) {
      if (!(err instanceof TexError)) {
        throw err;
      }
      this.parseOptions.error = true;
      node = this.formatError(err);
    }
    this.mathNode = this.parseOptions.nodeFactory.create('node', 'math', [node]);
    this.parseOptions.root = this.mathNode;
    if (display) {
      NodeUtil.setAttribute(this.mathNode, 'display', 'block');
    }
    this.executeFilters(this.postFilters, math, this.parseOptions);
    if (this.parseOptions.error) {
      this.parseOptions.root.setInheritedAttributes({}, display, 0, false);
    }
    this.mathNode = this.parseOptions.root;
    return this.mathNode;
  };


  /**
   * @override
   */
  public findMath(strings: string[]) {
    return this.findTeX.findMath(strings);
  }


  /**
   * Wraps an error into a node for output.
   * @param {TeXError} err The TexError.
   * @return {Node} The merror node.
   */
  private formatError(err: TexError): MmlNode {
    let message = err.message.replace(/\n.*/, '');
    return this.parseOptions.nodeFactory.create('error', message);
  };

}
