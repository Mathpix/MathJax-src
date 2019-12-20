"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration_js_1 = require("../Configuration.js");
var SymbolMap_js_1 = require("../SymbolMap.js");
var HtmlMethods_js_1 = require("./HtmlMethods.js");
new SymbolMap_js_1.CommandMap('html_macros', {
    href: 'Href',
    'class': 'Class',
    style: 'Style',
    cssId: 'Id'
}, HtmlMethods_js_1.default);
exports.HtmlConfiguration = Configuration_js_1.Configuration.create('html', { handler: { macro: ['html_macros'] } });
//# sourceMappingURL=HtmlConfiguration.js.map