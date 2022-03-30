
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

__etcpack__scope_args__=window.__etcpack__getBundle('28');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('29');
var template =__etcpack__scope_args__.default;

var pages = {
  "home": function home() {
    return window.__etcpack__getLazyBundle('./build/main@v0.1.0-bundle2.js','30');
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
  }

  _createClass(_class2, [{
    key: "$setup",
    value: function $setup() {
      return {
        currentPage: ref(null)
      };
    }
  }, {
    key: "$mounted",
    value: function $mounted() {
      var _this = this;

      // 地址栏信息
      var urlObj = urlFormat(globalThis.location.href); // 获取当前页面

      var page = pages[urlObj.router[1]]; // 或者页面不存在

      if (!isFunction(page)) {
        // 如果地址错误，跳转到首页
        page = pages['home'];
      } // 打开页面


      page().then(function (data) {
        _this.currentPage = data["default"];
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
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= ""
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/main/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['29']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div ui-lazy='currentPage'></div>"
  
    return __etcpack__scope_bundle__;
}
