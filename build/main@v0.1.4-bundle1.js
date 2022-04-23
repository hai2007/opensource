
/*************************** [bundle] ****************************/
// Original file:./src/page/main/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['22']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;
var ref=__etcpack__scope_args__.ref;

__etcpack__scope_args__=window.__etcpack__getBundle('6');
var isFunction=__etcpack__scope_args__.isFunction;

__etcpack__scope_args__=window.__etcpack__getBundle('19');
var urlFormat =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('30');
var template =__etcpack__scope_args__.default;

var pages = {
  "home": function home() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.4-bundle3.js','31');
  },
  "basic": function basic() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.4-bundle4.js','32');
  },
  "problem": function problem() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.4-bundle5.js','33');
  },
  "example": function example() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.4-bundle6.js','34');
  }
};

var _class = (_dec = Component({
  selector: "app-root",
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);

    _defineProperty(this, "currentPage", void 0);

    _defineProperty(this, "pageName", void 0);
  }

  _createClass(_class2, [{
    key: "$setup",
    value: function $setup() {
      return {
        currentPage: ref(null),
        pageName: ref("")
      };
    }
  }, {
    key: "$mounted",
    value: function $mounted() {
      var _this = this;

      // 地址栏信息
      var urlObj = urlFormat(globalThis.location.href); // 获取当前页面

      this.pageName = urlObj.router[1]; // 或者页面不存在

      if (!isFunction(pages[this.pageName])) {
        // 如果地址错误，跳转到首页
        this.pageName = 'home';
      } // 打开页面


      pages[this.pageName]().then(function (data) {
        _this.currentPage = data["default"];
      });
    }
  }, {
    key: "goto",
    value: function goto(event) {
      var _this2 = this;

      this.pageName = event.target.getAttribute('tag');
      pages[this.pageName]().then(function (data) {
        _this2.currentPage = data["default"];
        window.location.href = "#/main/" + _this2.pageName;
      });
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n header{\n\ntext-align: center;\n\nuser-select: none;\n\nmin-width: 980px;\n\n}\n\n header h2{\n\nline-height: 2em;\n\nfont-family: cursive;\n\nfont-size: 40px;\n\n}\n\n header h2>a{\n\nfloat: right;\n\nfont-size: 12px;\n\nbackground: #b47266;\n\nline-height: 1em;\n\npadding: 10px;\n\ncolor: white;\n\n}\n\n header h2>a:hover{\n\ntext-decoration: underline;\n\n}\n\n header ul{\n\nbackground-color: #000000;\n\npadding: 10px;\n\n}\n\n header ul li{\n\ndisplay: inline-block;\n\npadding: 5px 10px;\n\nfont-weight: 200;\n\nfont-size: 14px;\n\ncolor: gray;\n\ncursor: pointer;\n\nmargin: 0 10px;\n\n}\n\n header ul li[active='true']{\n\nbackground-color: #adb7be;\n\ncolor: black;\n\n}\n\n header ul li[active='false']:hover{\n\noutline: 1px dashed white;\n\ncolor: white;\n\n}\n\n div{\n\nmargin: 20px 0;\n\nmin-width: 980px;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<header>\n    <h2>\n        Open Source\n        <a href=\"#/guide\" target=\"_blank\">\n            常用链接访问\n        </a>\n    </h2>\n    <ul>\n        <li ui-bind:active=\"pageName=='home'\" ui-on:click=\"goto\" tag=\"home\">\n            首页\n        </li>\n        <li ui-bind:active=\"pageName=='basic'\" ui-on:click=\"goto\" tag=\"basic\">\n            基础建设\n        </li>\n        <li ui-bind:active=\"pageName=='problem'\" ui-on:click=\"goto\" tag=\"problem\">\n            待解决&经验\n        </li>\n        <li ui-bind:active=\"pageName=='example'\" ui-on:click=\"goto\" tag=\"example\">\n            工具&用例\n        </li>\n    </ul>\n</header>\n<div ui-lazy='currentPage'></div>\n"
  
    return __etcpack__scope_bundle__;
}
