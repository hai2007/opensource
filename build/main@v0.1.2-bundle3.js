
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

__etcpack__scope_args__=window.__etcpack__getBundle('38');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('39');
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
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view{\n\nwidth: 980px;\n\nmargin: auto;\n\n}\n\n .view>h2{\n\npadding-top: 179px;\n\nbackground-image: url('./image/banner.jpg');\n\nbackground-repeat: no-repeat;\n\nbackground-color: #8ab891;\n\nline-height: 50px;\n\nposition: relative;\n\npadding-left: 150px;\n\nfont-family: cursive;\n\n}\n\n .view>h2>span{\n\nposition: absolute;\n\nwidth: 100px;\n\nheight: 100px;\n\nbackground-image: url(./logo.png);\n\nbackground-color: #ffffff;\n\nbottom: 23px;\n\nleft: 25px;\n\noutline: 1px solid #8ab891;\n\n}\n\n .view>h2>input{\n\nheight: 30px;\n\nborder: none;\n\noutline: none;\n\npadding: 0 10px;\n\npadding-right: 35px;\n\nbackground-image: url(./image/search.svg);\n\nbackground-position: center right;\n\nbackground-repeat: no-repeat;\n\nborder-radius: 3px;\n\nbackground-color: #f3f0f0;\n\nfloat: right;\n\nmargin: 10px;\n\n}\n\n .view>div.content{\n\nborder: 2px solid #8ab891;\n\nborder-top: none;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/home/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n\n    <h2>\n        <span></span>\n        一起来写代码吧~\n        <input class=\"search\" placeholder=\"输入内容后回车查询\" type=\"text\" ui-on:keydown=\"doSearch\">\n    </h2>\n\n    <div class=\"content\">\n\n        <span style=\"font-family:serif;display:block;text-align:center;padding:50px;font-size: 20px;color:red;\">\n            温馨提示：本页面设计开发中~\n\n            <!-- 在本页介绍image2d等开源项目、技术栈等 -->\n\n        </span>\n\n    </div>\n\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
