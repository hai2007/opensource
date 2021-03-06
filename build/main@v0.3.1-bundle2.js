
/*************************** [bundle] ****************************/
// Original file:./src/page/guide/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['23']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('35');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('36');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/guide/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\npadding: 20px;\n\npadding-bottom: 20px;\n\nwidth: 1000px;\n\nmargin: auto;\n\n}\n\n .view>header{\n\nline-height: 50px;\n\ntext-align: center;\n\nmargin-bottom: 40px;\n\nbackground-color: #f2f0ef;\n\nfont-size: 22px;\n\nfont-family: cursive;\n\noutline: 1px dashed black;\n\n}\n\n .view>header>a{\n\nfloat: right;\n\nfont-size: 12px;\n\nbackground-color: black;\n\ncolor: white;\n\nline-height: 1em;\n\npadding: 5px;\n\ncursor: pointer;\n\n}\n\n .view>header>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>h2{\n\nborder-left: 2px solid rgb(38, 212, 11);\n\npadding-left: 5px;\n\nfont-size: 15px;\n\nfont-weight: 200;\n\n}\n\n .view>div{\n\nmargin-bottom: 40px;\n\n}\n\n .view>div>a{\n\nposition: relative;\n\nbackground-position: 10px center;\n\nbackground-size: 50px auto;\n\nbackground-repeat: no-repeat;\n\npadding-left: 70px;\n\nmin-height: 70px;\n\ndisplay: inline-block;\n\nwidth: 300px;\n\noutline: 1px solid rgb(245, 244, 244);\n\nmargin-top: 10px;\n\nmargin-right: 10px;\n\ncursor: pointer;\n\ncolor: black;\n\n}\n\n .view>div>a:hover{\n\noutline: 1px solid rgb(199, 196, 196);\n\n}\n\n .view>div>a:hover>p{\n\ntext-decoration: underline;\n\n}\n\n .view>div>a>h4{\n\nline-height: 40px;\n\nfont-size: 14px;\n\n}\n\n .view>div>a>p{\n\nfont-size: 12px;\n\n}\n\n .view>div>a>h4, .view>div>a p{\n\npointer-events: none;\n\n}\n\n .view>div>a.learning-manual{\n\nbackground-image: url('./image/learning-manual.png');\n\n}\n\n .view>div>a.format-json{\n\nbackground-image: url('./image/format-json.png');\n\n}\n\n .view>div>a.clunch{\n\nbackground-image: url('./image/clunch.png');\n\n}\n\n .view>div>a.image2d{\n\nbackground-image: url('./image/image2d.png');\n\n}\n\n .view>div>a.image3d{\n\nbackground-image: url('./image/image3d.png');\n\n}\n\n .view>div>a.tool-js{\n\nbackground-image: url('./image/tool.png');\n\n}\n\n .view>div>a.algorithm-js{\n\nbackground-image: url('./image/algorithm.png');\n\n}\n\n .view>div>a.node-js{\n\nbackground-image: url('./image/nodejs.png');\n\n}\n\n .view>div>a.browser-js{\n\nbackground-image: url('./image/browser.png');\n\n}\n\n .view>div>a.colors-picker{\n\nbackground-image: url('./image/colors-picker.png');\n\n}\n\n .view>div>a.image-editor{\n\nbackground-image: url('./image/picture.jpeg');\n\n}\n\n .view>div>a.Regexper-Visualization{\n\nbackground-image: url('./image/Regexper-Visualization.png');\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/guide/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\r\n    <header>\r\n        ????????????\r\n        <a href=\"#/home\" target=\"_blank\">??????</a>\r\n    </header>\r\n    <h2>\r\n        ??????\r\n    </h2>\r\n    <div>\r\n        <a class=\"learning-manual\" target=\"_blank\" href=\"https://hai2007.github.io/Front-End-Learning-Manual/\">\r\n            <h4>\r\n                ??????????????????\r\n            </h4>\r\n            <p>\r\n                ?????????????????????????????????????????????????????????\r\n            </p>\r\n        </a>\r\n    </div>\r\n    <h2>\r\n        ??????\r\n    </h2>\r\n    <div>\r\n        <a class=\"tool-js\" target=\"_blank\" href=\"https://hai2007.github.io/tool.js/#/api\">\r\n            <h4>\r\n                @hai2007/tool\r\n            </h4>\r\n            <p>\r\n                ???????????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"node-js\" target=\"_blank\" href=\"https://hai2007.github.io/node.js/#/api\">\r\n            <h4>\r\n                @hai2007/nodejs\r\n            </h4>\r\n            <p>\r\n                NodeJS?????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"algorithm-js\" target=\"_blank\" href=\"https://hai2007.github.io/algorithm.js/#/api\">\r\n            <h4>\r\n                @hai2007/algorithm\r\n            </h4>\r\n            <p>\r\n                ?????????????????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"browser-js\" target=\"_blank\" href=\"https://hai2007.github.io/browser.js/#/api\">\r\n            <h4>\r\n                @hai2007/browser\r\n            </h4>\r\n            <p>\r\n                ??????????????????????????????\r\n            </p>\r\n        </a>\r\n    </div>\r\n    <h2>\r\n        ??????\r\n    </h2>\r\n    <div>\r\n        <a class=\"image2d\" target=\"_blank\" href=\"https://hai2007.github.io/image2D/\">\r\n            <h4>\r\n                image2D.js ????????????\r\n            </h4>\r\n            <p>\r\n                ????????????????????????canvas???svg???\r\n            </p>\r\n        </a>\r\n        <a class=\"clunch\" target=\"_blank\" href=\"https://hai2007.github.io/clunch/#/api\">\r\n            <h4>\r\n                clunch.js ????????????\r\n            </h4>\r\n            <p>\r\n                ???????????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"image3d\" target=\"_blank\" href=\"https://hai2007.github.io/image3D/\">\r\n            <h4>\r\n                image3D.js ????????????\r\n            </h4>\r\n            <p>\r\n                ????????????????????????webgl???\r\n            </p>\r\n        </a>\r\n    </div>\r\n    <h2>\r\n        ??????\r\n    </h2>\r\n    <div>\r\n        <a class=\"colors-picker\" target=\"_blank\" href=\"https://hai2007.github.io/colors-picker/\">\r\n            <h4>\r\n                ????????????\r\n            </h4>\r\n            <p>\r\n                ??????H5????????????????????????\r\n            </p>\r\n        </a>\r\n    </div>\r\n    <h2>\r\n        ??????\r\n    </h2>\r\n    <div>\r\n        <a class=\"format-json\" target=\"_blank\" href=\"https://hai2007.github.io/format-json/\">\r\n            <h4>\r\n                JSON ?????????\r\n            </h4>\r\n            <p>\r\n                ?????????json????????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"Regexper-Visualization\" target=\"_blank\" href=\"https://hai2007.github.io/Regexper-Visualization/\">\r\n            <h4>\r\n                ????????????????????????\r\n            </h4>\r\n            <p>\r\n                ????????????????????????????????????????????????\r\n            </p>\r\n        </a>\r\n        <a class=\"image-editor\" target=\"_blank\" href=\"https://hai2007.github.io/image-editor/\">\r\n            <h4>\r\n                ???????????????\r\n            </h4>\r\n            <p>\r\n                ?????????????????????????????????????????????\r\n            </p>\r\n        </a>\r\n    </div>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
