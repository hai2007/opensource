
/*************************** [bundle] ****************************/
// Original file:./src/page/main/basic/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('39');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('40');
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
// Original file:./src/page/main/basic/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view>h2{\n\ntext-align: center;\n\nbackground-position: center center;\n\nmargin: 10px 0;\n\nbackground-size: auto 100%;\n\nline-height: 70px;\n\nbackground-repeat: no-repeat;\n\nfont-size: 14px;\n\ncolor: white;\n\nmargin-top: 20px;\n\n}\n\n .view>h2.library{\n\nbackground-image: url('./image/title-bg-2.png');\n\n}\n\n .view>h2.plug{\n\nbackground-image: url('./image/title-bg-1.png');\n\n}\n\n .view .library-list{\n\ntext-align: center;\n\n}\n\n .view .library-list>a{\n\npadding: 20px 0;\n\npadding-left: 100px;\n\ndisplay: inline-block;\n\nbackground-size: 100px auto;\n\nbackground-position: left center;\n\nbackground-repeat: no-repeat;\n\nmin-height: 100px;\n\ntext-align: left;\n\nwidth: 350px;\n\nborder-width: 5px 0px;\n\nborder-style: solid;\n\nmargin: 20px;\n\nvertical-align: top;\n\n}\n\n .view .library-list>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view .library-list>a>h4{\n\ncolor: black;\n\nfont-size: 15px;\n\nline-height: 2em;\n\n}\n\n .view .library-list>a>p{\n\ncolor: gray;\n\nfont-size: 12px;\n\nline-height: 1.6em;\n\ntext-indent: 2em;\n\npadding-right: 10px;\n\n}\n\n .view .library-list>a.algorithm{\n\nbackground-image: url('./image/algorithm.png');\n\nborder-color: rgb(232, 164, 6);\n\n}\n\n .view .library-list>a.tool{\n\nbackground-image: url('./image/tool.png');\n\nborder-color: rgb(46, 189, 6);\n\n}\n\n .view .library-list>a.nodejs{\n\nbackground-image: url('./image/nodejs.png');\n\nborder-color: rgb(3, 196, 230);\n\n}\n\n .view .library-list>a.painter{\n\nbackground-image: url('./image/painter.png');\n\nborder-color: rgb(210, 9, 126);\n\n}\n\n .view .plug-list{\n\ntext-align: center;\n\n}\n\n .view .plug-list>a{\n\ndisplay: inline-block;\n\nwidth: 300px;\n\npadding-top: 150px;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\nmargin: 10px;\n\nline-height: 2em;\n\nfont-size: 12px;\n\ncursor: pointer;\n\ncolor: rgb(0, 0, 0);\n\nborder-width: 5px 0px;\n\nborder-style: solid;\n\n}\n\n .view .plug-list>a.editor{\n\nbackground-image: url('./image/editor.jpg');\n\nborder-color: rgb(13, 181, 52);\n\n}\n\n .view .plug-list>a.excel{\n\nbackground-image: url('./image/excel.jpg');\n\nborder-color: rgb(23, 187, 228);\n\n}\n\n .view .plug-list>a:hover{\n\ntext-decoration: underline;\n\nfont-weight: 800;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/basic/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2 class=\"library\">基础库</h2>\n    <div class=\"library-list\">\n        <a class=\"algorithm\" target=\"_blank\" href=\"https://hai2007.github.io/algorithm.js/#/api\">\n            <h4>algorithm.js</h4>\n            <p>\n                前端常用的算法实现合集，包括xhtml字符串解析、表达式解析、树图计算等。\n            </p>\n        </a>\n        <a class=\"tool\" target=\"_blank\" href=\"https://hai2007.github.io/tool.js/#/api\">\n            <h4>tool.js</h4>\n            <p>\n                前端常用的工具类方法汇总，包括类型判断、变换矩阵、Hermite插值、金额大写等。\n            </p>\n        </a>\n        <a class=\"painter\" target=\"_blank\" href=\"https://hai2007.github.io/cross-end-canvas/\">\n            <h4>cross-end-canvas</h4>\n            <p>\n                提供跨端的canvas画笔，保持一致的绘图方法和效果，包括普通的web端、uniapp框架、微信小程序等小程序等。\n            </p>\n        </a>\n        <a class=\"nodejs\" target=\"_blank\" href=\"https://hai2007.github.io/node.js/#/api\">\n            <h4>node.js</h4>\n            <p>\n                node.js常用的基础方法汇总，包括文件和路径操作、Http和WS服务器等。\n            </p>\n        </a>\n    </div>\n    <h2 class=\"plug\">一些插件</h2>\n    <div class=\"plug-list\">\n        <a class=\"editor\" target=\"_blank\" href=\"https://hai2007.gitee.io/open-web-editor/test/index.html\">\n            Open Web Editor\n        </a>\n        <a class=\"excel\" target=\"_blank\" href=\"https://hai2007.gitee.io/open-web-excel/test/index.html\">\n            Open Web Excel\n        </a>\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
