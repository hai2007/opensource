
/*************************** [bundle] ****************************/
// Original file:./src/page/main/problem/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('41');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('42');
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
// Original file:./src/page/main/problem/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\ntext-align: center;\n\n}\n\n .view>a{\n\ndisplay: inline-block;\n\nwidth: 380px;\n\ntext-align: left;\n\nfont-size: 12px;\n\nmargin: 10px;\n\nposition: relative;\n\n}\n\n .view>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>a>span{\n\nposition: absolute;\n\nright: -20px;\n\nbottom: 0;\n\ntransform: rotate(-45deg);\n\nwidth: 70px;\n\nfont-size: 12px;\n\ntext-align: center;\n\ncolor: white;\n\npadding: 5px 0;\n\ntransform-origin: center center;\n\n}\n\n .view>a>span.experience{\n\nbackground-color: #03a9f4;\n\n}\n\n .view>a fieldset{\n\ncolor: black;\n\npadding: 10px;\n\ntext-indent: 2em;\n\nline-height: 1.6em;\n\n}\n\n .view>a legend{\n\npadding: 7px;\n\nborder-radius: 5px;\n\ntext-indent: 0;\n\n}\n\n .view>a.Analyze-The-String fieldset{\n\nborder-color: rgb(183, 222, 8);\n\n}\n\n .view>a.Analyze-The-String legend{\n\nbackground-color: rgb(224, 104, 6);\n\ncolor: white;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/problem/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\r\n\r\n    <a class=\"Analyze-The-String\" href=\"https://hai2007.github.io/Front-End-Laboratory/#/Analyze-The-String\"\r\n        target=\"_blank\">\r\n        <span class=\"experience\">??????</span>\r\n        <fieldset>\r\n            <legend>\r\n                ??????????????????????????????????????????\r\n            </legend>\r\n            <div>\r\n                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\r\n            </div>\r\n            <div>\r\n                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????HTML?????????????????????????????????????????????\r\n            </div>\r\n        </fieldset>\r\n    </a>\r\n\r\n</div>\r\n"
  
    return __etcpack__scope_bundle__;
}
