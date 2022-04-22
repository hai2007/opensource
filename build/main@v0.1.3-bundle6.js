
/*************************** [bundle] ****************************/
// Original file:./src/page/main/example/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('43');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('44');
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
// Original file:./src/page/main/example/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\ntext-align: center;\n\npadding: 10px 0;\n\n}\n\n .view>h2{\n\npadding: 10px;\n\nborder-bottom: 1px solid #607d8b;\n\nwidth: 400px;\n\nmargin: auto;\n\nmargin-bottom: 20px;\n\nfont-size: 20px;\n\n}\n\n .view>div{\n\nmargin-bottom: 20px;\n\n}\n\n .view>div>a{\n\ndisplay: inline-block;\n\nbackground-color: #d0d8dd;\n\nmargin: 10px;\n\nvertical-align: top;\n\ncursor: pointer;\n\ncolor: rgb(80, 78, 78);\n\n}\n\n .view>div>a:hover>span{\n\ntext-decoration: underline;\n\n}\n\n .view>div>a:hover{\n\noutline: 3px solid #d0d8dd;\n\n}\n\n .view>div>a>h4{\n\npadding: 10px 0;\n\n}\n\n .view>div>a>i{\n\ndisplay: block;\n\nmargin: auto;\n\nbackground-position: center center;\n\nbackground-repeat: no-repeat;\n\n}\n\n .view>div>a>span{\n\ndisplay: block;\n\nfont-size: 12px;\n\npadding: 20px 5px;\n\n}\n\n .view>div.tool>a{\n\nwidth: 140px;\n\nborder-width: 5px 0;\n\nborder-style: solid;\n\n}\n\n .view>div.tool>a.audio{\n\nborder-color: #4caf50;\n\n}\n\n .view>div.tool>a.audio>i{\n\nbackground-color: #ffffff;\n\nbackground-image: url('./image/audio.png');\n\n}\n\n .view>div.tool>a.regexp{\n\nborder-color: #009688;\n\n}\n\n .view>div.tool>a.regexp>i{\n\nbackground-color: #009688;\n\nbackground-image: url('./image/regexp.png');\n\n}\n\n .view>div.tool>a>i{\n\nheight: 70px;\n\nwidth: 70px;\n\nborder-radius: 50%;\n\nbackground-size: 70% auto;\n\n}\n\n .view>div.demo>a{\n\nwidth: 260px;\n\nborder-width: 0 5px;\n\nborder-style: solid;\n\n}\n\n .view>div.demo>a.robot-3d{\n\nborder-color: black;\n\n}\n\n .view>div.demo>a.robot-3d>i{\n\nbackground-color: #171616;\n\nbackground-image: url('./image/robot-3d.png');\n\n}\n\n .view>div.demo>a>i{\n\nheight: 120px;\n\nwidth: 200px;\n\nbackground-size: 100% auto;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/example/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n\n    <h2>\n        在线工具\n    </h2>\n    <div class=\"tool\">\n        <a class=\"audio\" target=\"_blank\" href=\"https://hai2007.github.io/audio-editor/\">\n            <h4>音频编辑器</h4>\n            <i></i>\n            <span>\n                一些常用的小工具集\n            </span>\n        </a>\n        <a class=\"regexp\" target=\"_blank\" href=\"https://hai2007.github.io/Regexper-Visualization/?express=\\w{1%2C5}[a-e0-8]|4(534)5(35{3}|d)d(%3F%3D123)\\1&isString=no\">\n            <h4>正则表达式</h4>\n            <i></i>\n            <span>\n                正则表达式可视化\n            </span>\n        </a>\n    </div>\n\n    <h2>\n        演示用例\n    </h2>\n    <div class=\"demo\">\n        <a class=\"robot-3d\" target=\"_blank\" href=\"https://clunch-contrib.github.io/robot-3d/\">\n            <h4>机器人模型</h4>\n            <i></i>\n            <span>\n                简单的3D机器人模型渲染演示\n            </span>\n        </a>\n    </div>\n\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
