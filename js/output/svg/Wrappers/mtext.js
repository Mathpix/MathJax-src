"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper_js_1 = require("../Wrapper.js");
var mtext_js_1 = require("../../common/Wrappers/mtext.js");
var mtext_js_2 = require("../../../core/MmlTree/MmlNodes/mtext.js");
var SVGmtext = (function (_super) {
    __extends(SVGmtext, _super);
    function SVGmtext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGmtext.kind = mtext_js_2.MmlMtext.prototype.kind;
    return SVGmtext;
}(mtext_js_1.CommonMtextMixin(Wrapper_js_1.SVGWrapper)));
exports.SVGmtext = SVGmtext;
//# sourceMappingURL=mtext.js.map