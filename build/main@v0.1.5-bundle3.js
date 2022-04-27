
/*************************** [bundle] ****************************/
// Original file:./src/page/main/home/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('37');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('38');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "doSearch",
    value: function doSearch(event) {
      // 如果是回车就带着数据跳转到查询界面
      if (event.keyCode == 13) {
        var aDom = document.createElement('a');
        aDom.setAttribute('href', "https://hai2007.gitee.io/sweethome/#/search?wd=" + encodeURIComponent(event.target.value));
        aDom.setAttribute('target', '_blank');
        aDom.click();
      }
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/home/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\nwidth: 980px;\n\nmargin: auto;\n\n}\n\n .view>h2{\n\npadding-top: 179px;\n\nbackground-image: url('./image/banner.jpg');\n\nbackground-repeat: no-repeat;\n\nbackground-color: #8ab891;\n\nline-height: 50px;\n\nposition: relative;\n\npadding-left: 150px;\n\nfont-family: cursive;\n\n}\n\n .view>h2>a{\n\nposition: absolute;\n\nwidth: 100px;\n\nheight: 100px;\n\nbackground-size: 100% auto;\n\nbackground-image: url('./image/hai2007.jpg');\n\nbackground-color: #ffffff;\n\nbottom: 23px;\n\nleft: 25px;\n\noutline: 1px solid #8ab891;\n\n}\n\n .view>h2>input{\n\nheight: 30px;\n\nborder: none;\n\noutline: none;\n\npadding: 0 10px;\n\npadding-right: 35px;\n\nbackground-image: url(./image/search.svg);\n\nbackground-position: center right;\n\nbackground-repeat: no-repeat;\n\nborder-radius: 3px;\n\nbackground-color: #f3f0f0;\n\nfloat: right;\n\nmargin: 10px;\n\n}\n\n .view>div.containter{\n\nbackground-color: #dceffe;\n\nmin-height: calc(100vh - 490px);\n\n}\n\n .view>div.containter>div.focus{\n\npadding: 20px 0;\n\ntext-align: center;\n\n}\n\n .view>div.containter>div.focus>div{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n .view>div.containter>div.focus>div.title{\n\nwidth: 1em;\n\nbox-sizing: content-box;\n\nbackground-color: rgb(238 133 135);\n\npadding: 10px;\n\ncolor: white;\n\nmargin-top: 30px;\n\n}\n\n .view>div.containter>div.focus>div.list{\n\nwidth: 700px;\n\ntext-align: left;\n\nbackground-color: #ffffff;\n\npadding: 10px 10px 30px 10px;\n\n}\n\n .view>div.containter>div.focus>div.list>span{\n\nfloat: right;\n\ncolor: rgb(0, 0, 0);\n\noutline: 1px solid rgb(235 196 165);\n\nfont-size: 12px;\n\npadding-left: 5px;\n\n}\n\n .view>div.containter>div.focus>div.list>span>i{\n\nfont-style: normal;\n\n}\n\n .view>div.containter>div.focus>div.list>span>i>a{\n\npadding: 5px;\n\ndisplay: inline-block;\n\nbackground-color: #ebc4a5;\n\nmargin: 5px;\n\ncolor: white;\n\n}\n\n .view>div.containter>div.focus>div.list>span>i>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>div.containter>div.focus>div.list>h4{\n\nmargin: 10px;\n\nmargin-top: 30px;\n\n}\n\n .view>div.containter>div.focus>div.list>a{\n\ntext-align: center;\n\nfont-size: 12px;\n\ndisplay: inline-block;\n\nwidth: 80px;\n\npadding-top: 50px;\n\nmargin: 20px 0;\n\nline-height: 30px;\n\nheight: 0;\n\nvertical-align: top;\n\nwhite-space: nowrap;\n\ncolor: black;\n\nbackground-size: 50px auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\n}\n\n .view>div.containter>div.focus>div.list>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>div.containter>div.focus>div.list>a.clunch{\n\nbackground-image: url('./image/clunch.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.nefbl{\n\nbackground-image: url('./image/nefbl.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.etcpack{\n\nbackground-image: url('./image/etcpack.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.image2d{\n\nbackground-image: url('./image/image2d.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.image3d{\n\nbackground-image: url('./image/image3d.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.clunch{\n\nbackground-image: url('./image/clunch.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.notepad{\n\nbackground-image: url('./image/notepad.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.model-editor{\n\nbackground-image: url('./image/model-editor.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.big-screen-dataview{\n\nbackground-image: url('./image/big-screen-dataview.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.open-code-editor{\n\nbackground-image: url('./image/open-code-editor.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.type-practice{\n\nbackground-image: url('./image/type-practice.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.xhtml-engine{\n\nbackground-image: url('./image/xhtml-engine.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.react-lazily-component{\n\nbackground-image: url('./image/react-lazily-component.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.vue-input-check{\n\nbackground-image: url('./image/vue-input-check.png');\n\n}\n\n .view>div.containter>div.focus>div.list>a.rxlang{\n\nbackground-image: url('./image/rxlang.png');\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/home/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n\n    <h2>\n        <a target=\"_blank\" href=\"https://hai2007.gitee.io/sweethome/\"></a>\n        一起来写代码吧~\n        <input class=\"search\" placeholder=\"输入内容后回车查询\" type=\"text\" ui-on:keydown=\"doSearch\">\n    </h2>\n\n    <div class=\"containter\">\n\n        <div class=\"focus\">\n            <div class=\"title\">\n                我们专注于\n            </div>\n            <div class=\"list\">\n                <span>\n                    更多内容：\n                    <i>\n                        <a href=\"https://github.com/hai2007\" target=\"_blank\">Github</a>\n                        <a href=\"https://gitee.com/hai2007\" target=\"_blank\">Gitee</a>\n                    </i>\n                </span>\n                <h4>\n                    组织\n                </h4>\n                <a class=\"clunch\" href=\"https://github.com/clunch-contrib\" target=\"_blank\">可视化</a>\n                <a class=\"nefbl\" href=\"https://github.com/nefbl\" target=\"_blank\">前端框架</a>\n                <a class=\"etcpack\" href=\"https://github.com/etcpack\" target=\"_blank\">打包工具</a>\n                <h4>\n                    项目\n                </h4>\n                <a class=\"image3d\" href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">3D绘图</a>\n                <a class=\"notepad\" href=\"https://github.com/hai2007/Notepad\" target=\"_blank\">备忘录</a>\n                <a class=\"clunch\" href=\"https://hai2007.gitee.io/clunch/\" target=\"_blank\">2D框架</a>\n                <a class=\"react-lazily-component\" href=\"https://www.npmjs.com/package/react-lazily-component\"\n                    target=\"_blank\">React懒加载</a>\n                <a class=\"image2d\" href=\"https://hai2007.gitee.io/image2d/\" target=\"_blank\">2D绘图</a>\n                <a class=\"model-editor\" href=\"https://hai2007.github.io/model-editor/\" target=\"_blank\">3D模型</a>\n                <a class=\"big-screen-dataview\" href=\"https://hai2007.github.io/big-screen-dataview/\"\n                    target=\"_blank\">大屏</a>\n                <a class=\"vue-input-check\" href=\"https://www.npmjs.com/package/vue-input-check\"\n                    target=\"_blank\">Vue表单校验</a>\n                <a class=\"type-practice\" href=\"https://hai2007.github.io/type-practice/\" target=\"_blank\">打字练习</a>\n                <a class=\"xhtml-engine\" href=\"https://hai2007.github.io/xhtml-engine/#/api\" target=\"_blank\">XHTML解析</a>\n                <a class=\"open-code-editor\" href=\"https://github.com/hai2007/Open-Code-Editor\" target=\"_blank\">编辑器</a>\n                <a class=\"rxlang\" href=\"https://github.com/hai2007/RxLang\" target=\"_blank\">编程语言</a>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
