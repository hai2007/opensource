
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
    __etcpack__scope_bundle__.default= "\n .view{\n\ntext-align: center;\n\nmin-width: 980px;\n\n}\n\n .view>h2{\n\nline-height: 2em;\n\nborder-bottom: 1px solid rgb(0, 0, 0);\n\nwidth: 500px;\n\nmargin: auto;\n\npadding-top: 20px;\n\n}\n\n .view>.item{\n\npadding: 20px;\n\nposition: relative;\n\nwidth: 380px;\n\ndisplay: inline-block;\n\nmargin: 10px;\n\ntext-align: left;\n\n}\n\n .view>.item>span{\n\nposition: absolute;\n\nright: -12px;\n\ntop: 50px;\n\nwidth: 70px;\n\nfont-size: 12px;\n\ntext-align: center;\n\ncolor: rgb(0, 0, 0);\n\npadding: 5px 0;\n\nbackground-color: rgb(255, 255, 255);\n\n}\n\n .view>.item>fieldset{\n\nfont-size: 12px;\n\ncolor: black;\n\npadding: 10px;\n\n}\n\n .view>.item>fieldset>div{\n\nline-height: 2em;\n\n}\n\n .view>.item>fieldset>div>a{\n\ndisplay: block;\n\ncolor: black;\n\n}\n\n .view>.item>fieldset>div>a::before{\n\ncontent: \"*  \";\n\ncolor: #000000;\n\n}\n\n .view>.item>fieldset>div>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view>.item>fieldset>div>a>i{\n\nfont-style: normal;\n\noutline: 1px solid gray;\n\npadding: 0 5px;\n\nmargin: 0 5px;\n\n}\n\n .view>.item>fieldset>legend{\n\npadding: 7px;\n\nborder-radius: 5px;\n\ntext-indent: 0;\n\ncolor: white;\n\n}\n\n .view>.item>fieldset.quick-read{\n\nborder-color: rgb(244, 168, 3);\n\n}\n\n .view>.item>fieldset.quick-read>legend{\n\nbackground-color: rgb(246, 6, 34);\n\n}\n\n .view>.item>fieldset.chart{\n\nborder-color: rgb(10, 171, 134);\n\n}\n\n .view>.item>fieldset.chart>legend{\n\nbackground-color: rgb(13, 92, 195);\n\n}\n\n .view>.item>fieldset.basic{\n\nborder-color: rgb(8, 205, 64);\n\n}\n\n .view>.item>fieldset.basic>legend{\n\nbackground-color: rgb(237, 229, 3);\n\n}\n\n .view>.item>fieldset.plug{\n\nborder-color: rgb(41, 211, 234);\n\n}\n\n .view>.item>fieldset.plug>legend{\n\nbackground-color: rgb(239, 19, 107);\n\n}\n\n .view>.item>fieldset.tool{\n\nborder-color: rgb(203, 241, 32);\n\n}\n\n .view>.item>fieldset.tool>legend{\n\nbackground-color: rgb(189, 152, 5);\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/page/guide/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view\">\r\n    <h2>\r\n        常用链接访问\r\n    </h2>\r\n    <div class=\"item\">\r\n        <span>文档&笔记</span>\r\n        <fieldset class=\"quick-read\">\r\n            <legend>\r\n                《快速查询》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://hai2007.github.io/programming-api/\" target=\"_blank\">\r\n                    一些接口API快速查询\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/Front-End-Learning-Manual/\" target=\"_blank\">\r\n                    学习的经验笔记\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"item\">\r\n        <span>个人开源</span>\r\n        <fieldset class=\"chart\">\r\n            <legend>\r\n                《可视化相关》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://hai2007.gitee.io/image2d/\" target=\"_blank\">\r\n                    <i>image2D.js</i>\r\n                    基于Canvas、SVG开发的2d绘图库\r\n                </a>\r\n                <a href=\"https://hai2007.gitee.io/image3d/\" target=\"_blank\">\r\n                    <i>\r\n                        image3D.js\r\n                    </i>\r\n                    基于WebGl开发的3d绘图库\r\n                </a>\r\n                <a href=\"https://hai2007.gitee.io/clunch/#/api\" target=\"_blank\">\r\n                    <i>Clunch.js</i>\r\n                    可视化2d图形框架\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"item\">\r\n        <span>开源项目</span>\r\n        <fieldset class=\"chart\">\r\n            <legend>\r\n                《可视化相关》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://echarts.apache.org/zh/option.html\" target=\"_blank\">\r\n                    <i>Echarts.js</i>\r\n                    基于JavaScript的可视化图表库\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"item\">\r\n        <span>个人开源</span>\r\n        <fieldset class=\"basic\">\r\n            <legend>\r\n                《基础依赖》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://hai2007.github.io/tool.js/#/api\" target=\"_blank\">\r\n                    <i>tool.js</i>\r\n                    基础的方法\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/algorithm.js/#/api\" target=\"_blank\">\r\n                    <i>algorithm.js</i>\r\n                    常用算法合集\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/node.js/#/api\" target=\"_blank\">\r\n                    <i>node.js</i>\r\n                    nodejs基础方法\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/browser.js/#/api\" target=\"_blank\">\r\n                    <i>browser.js</i>\r\n                    浏览器常用方法\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"item\">\r\n        <span>个人开源</span>\r\n        <fieldset class=\"plug\">\r\n            <legend>\r\n                《小插件》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://hai2007.github.io/colors-picker/\" target=\"_blank\">\r\n                    <i>colors-picker</i>\r\n                    H5版本的颜色选择器\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"item\">\r\n        <span>个人开源</span>\r\n        <fieldset class=\"tool\">\r\n            <legend>\r\n                《实用工具》\r\n            </legend>\r\n            <div>\r\n                <a href=\"https://hai2007.github.io/draft/\" target=\"_blank\">\r\n                    <i>draft</i>\r\n                    一个方便打草稿的工具\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/Regexper-Visualization/\" target=\"_blank\">\r\n                    <i>Regexper-Visualization</i>\r\n                    正则表达式可视化\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/format-json/\" target=\"_blank\">\r\n                    <i>format-json</i>\r\n                    格式化json字符串的在线工具\r\n                </a>\r\n                <a href=\"https://hai2007.github.io/image-editor/\" target=\"_blank\">\r\n                    <i>image-editor</i>\r\n                    图片编辑工具\r\n                </a>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
