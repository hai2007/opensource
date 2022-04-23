
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
    __etcpack__scope_bundle__.default= "\n .view{\n\ntext-align: center;\n\nmin-width: 980px;\n\n}\n\n .view>h2{\n\nline-height: 2em;\n\nborder-bottom: 1px solid rgb(0, 0, 0);\n\nwidth: 500px;\n\nmargin: auto;\n\npadding-top: 20px;\n\n}\n\n .view>.item{\n\npadding: 20px;\n\nposition: relative;\n\nwidth: 380px;\n\ndisplay: inline-block;\n\nmargin: 10px;\n\ntext-align: left;\n\n}\n\n .view>.item>span{\n\nposition: absolute;\n\nright: -12px;\n\ntop: 50px;\n\nwidth: 70px;\n\nfont-size: 12px;\n\ntext-align: center;\n\ncolor: rgb(0, 0, 0);\n\npadding: 5px 0;\n\nbackground-color: rgb(255, 255, 255);\n\n}\n\n .view>.item>fieldset{\n\nfont-size: 12px;\n\ncolor: black;\n\npadding: 10px;\n\n}\n\n .view>.item>fieldset>div{\n\nline-height: 2em;\n\n}\n\n .view>.item>fieldset>div>a{\n\ndisplay: block;\n\ncolor: black;\n\n}\n\n .view>.item>fieldset>div>a::before{\n\ncontent: \"*  \";\n\ncolor: #000000;\n\n}\n\n .view>.item>fieldset>div>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>.item>fieldset>div>a>i{\n\nfont-style: normal;\n\noutline: 1px solid gray;\n\npadding: 0 5px;\n\nmargin: 0 5px;\n\n}\n\n .view>.item>fieldset>legend{\n\npadding: 7px;\n\nborder-radius: 5px;\n\ntext-indent: 0;\n\ncolor: white;\n\n}\n\n .view>.item>fieldset.quick-read{\n\nborder-color: rgb(244, 168, 3);\n\n}\n\n .view>.item>fieldset.quick-read>legend{\n\nbackground-color: rgb(246, 6, 34);\n\n}\n\n .view>.item>fieldset.chart{\n\nborder-color: rgb(10, 171, 134);\n\n}\n\n .view>.item>fieldset.chart>legend{\n\nbackground-color: rgb(13, 92, 195);\n\n}\n\n .view>.item>fieldset.basic{\n\nborder-color: rgb(8, 205, 64);\n\n}\n\n .view>.item>fieldset.basic>legend{\n\nbackground-color: rgb(237, 229, 3);\n\n}\n\n .view>.item>fieldset.plug{\n\nborder-color: rgb(41, 211, 234);\n\n}\n\n .view>.item>fieldset.plug>legend{\n\nbackground-color: rgb(239, 19, 107);\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/guide/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\n    <h2>\n        常用链接访问\n    </h2>\n    <div class=\"item\">\n        <span>文档&笔记</span>\n        <fieldset class=\"quick-read\">\n            <legend>\n                《快速查询》\n            </legend>\n            <div>\n                <a href=\"https://hai2007.github.io/programming-api/\" target=\"_blank\">\n                    一些接口API快速查询\n                </a>\n                <a href=\"https://hai2007.github.io/Front-End-Learning-Manual/\" target=\"_blank\">\n                    学习的经验笔记\n                </a>\n            </div>\n        </fieldset>\n    </div>\n    <div class=\"item\">\n        <span>个人开源</span>\n        <fieldset class=\"chart\">\n            <legend>\n                《可视化相关》\n            </legend>\n            <div>\n                <a href=\"https://hai2007.gitee.io/image2d/\" target=\"_blank\">\n                    <i>image2D.js</i>\n                    基于Canvas、SVG开发的2d绘图库\n                </a>\n                <a href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">\n                    <i>\n                        image3D.js\n                    </i>\n                    基于WebGl开发的3d绘图库\n                </a>\n                <a href=\"https://hai2007.gitee.io/clunch/#/api\" target=\"_blank\">\n                    <i>Clunch.js</i>\n                    可视化2d图形框架\n                </a>\n            </div>\n        </fieldset>\n    </div>\n    <div class=\"item\">\n        <span>开源项目</span>\n        <fieldset class=\"chart\">\n            <legend>\n                《可视化相关》\n            </legend>\n            <div>\n                <a href=\"https://echarts.apache.org/zh/option.html\" target=\"_blank\">\n                    <i>Echarts.js</i>\n                    基于JavaScript的可视化图表库\n                </a>\n            </div>\n        </fieldset>\n    </div>\n    <div class=\"item\">\n        <span>个人开源</span>\n        <fieldset class=\"basic\">\n            <legend>\n                《基础依赖》\n            </legend>\n            <div>\n                <a href=\"https://hai2007.github.io/tool.js/#/api\" target=\"_blank\">\n                    <i>tool.js</i>\n                    基础的方法\n                </a>\n                <a href=\"https://hai2007.github.io/algorithm.js/#/api\" target=\"_blank\">\n                    <i>algorithm.js</i>\n                    常用算法合集\n                </a>\n                <a href=\"https://hai2007.github.io/node.js/#/api\" target=\"_blank\">\n                    <i>node.js</i>\n                    nodejs基础方法\n                </a>\n                <a href=\"https://hai2007.github.io/browser.js/#/api\" target=\"_blank\">\n                    <i>browser.js</i>\n                    浏览器常用方法\n                </a>\n            </div>\n        </fieldset>\n    </div>\n    <div class=\"item\">\n        <span>个人开源</span>\n        <fieldset class=\"plug\">\n            <legend>\n                《小插件》\n            </legend>\n            <div>\n                <a href=\"https://hai2007.github.io/colors-picker/\" target=\"_blank\">\n                    <i>colors-picker</i>\n                    H5版本的颜色选择器\n                </a>\n            </div>\n        </fieldset>\n    </div>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
