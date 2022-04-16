
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

__etcpack__scope_args__=window.__etcpack__getBundle('40');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('41');
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
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view>h2{\n\ntext-align: center;\n\nbackground-position: center center;\n\nmargin: 10px 0;\n\nbackground-size: auto 100%;\n\nline-height: 70px;\n\nbackground-repeat: no-repeat;\n\nfont-size: 14px;\n\ncolor: white;\n\nmargin-top: 20px;\n\n}\n\n .view>h2.library{\n\nbackground-image: url('./image/title-bg-2.png');\n\n}\n\n .view>h2.plug{\n\nbackground-image: url('./image/title-bg-1.png');\n\n}\n\n .view .library-list{\n\ntext-align: center;\n\n}\n\n .view .library-list>a{\n\npadding: 20px 0;\n\npadding-left: 100px;\n\ndisplay: inline-block;\n\nbackground-size: 100px auto;\n\nbackground-position: left center;\n\nbackground-repeat: no-repeat;\n\nmin-height: 100px;\n\ntext-align: left;\n\nwidth: 400px;\n\nborder-width: 5px 0px;\n\nborder-style: solid;\n\nmargin: 10px;\n\n}\n\n .view .library-list>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view .library-list>a>h4{\n\ncolor: black;\n\nfont-size: 15px;\n\nline-height: 2em;\n\n}\n\n .view .library-list>a>p{\n\ncolor: gray;\n\nfont-size: 12px;\n\nline-height: 1.6em;\n\ntext-indent: 2em;\n\npadding-right: 10px;\n\n}\n\n .view .library-list>a.image2d{\n\nbackground-image: url('./image/image2d.png');\n\nborder-color: rgb(232, 164, 6);\n\n}\n\n .view .plug-list{\n\ntext-align: center;\n\n}\n\n .view .plug-list>a{\n\ndisplay: inline-block;\n\nwidth: 300px;\n\npadding-top: 150px;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\nmargin: 10px;\n\nline-height: 2em;\n\nfont-size: 12px;\n\ncursor: pointer;\n\ncolor: rgb(0, 0, 0);\n\nborder-width: 5px 0px;\n\nborder-style: solid;\n\n}\n\n .view .plug-list>a.editor{\n\nbackground-image: url('./image/editor.jpg');\n\nborder-color: rgb(13, 181, 52);\n\n}\n\n .view .plug-list>a.excel{\n\nbackground-image: url('./image/excel.jpg');\n\nborder-color: rgb(23, 187, 228);\n\n}\n\n .view .plug-list>a:hover{\n\ntext-decoration: underline;\n\nfont-weight: 800;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/basic/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2 class=\"library\">开源库</h2>\n    <div class=\"library-list\">\n        <a class=\"image2d\" target=\"_blank\" href=\"https://hai2007.gitee.io/image2d/\">\n            <h4>image2D</h4>\n            <p>\n                基于canvas、svg开发的绘图库，内含绘图需要的常用算法、工具等，在保证灵活性的前提下，可以快速绘制可交互图表等。\n            </p>\n        </a>\n    </div>\n    <h2 class=\"plug\">一些插件</h2>\n    <div class=\"plug-list\">\n        <a class=\"editor\" target=\"_blank\" href=\"https://hai2007.gitee.io/open-web-editor/test/index.html\">\n            Open Web Editor\n        </a>\n        <a class=\"excel\" target=\"_blank\" href=\"https://hai2007.gitee.io/open-web-excel/test/index.html\">\n            Open Web Excel\n        </a>\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
