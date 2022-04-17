import { Component, ref } from 'nefbl'
import { isFunction } from "@hai2007/tool/type"

import urlFormat from '../../tool/urlFormat'

import style from './index.scss'
import template from './index.html'

let pages = {
    "home": () => import('./home/index'),
    "basic": () => import('./basic/index'),
    "problem": () => import('./problem/index'),
    "example": () => import('./example/index')
}

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    currentPage: any
    pageName: string

    $setup() {
        return {
            currentPage: ref(null),
            pageName: ref("")
        }
    }

    $mounted() {

        // 地址栏信息
        let urlObj = urlFormat(globalThis.location.href)

        // 获取当前页面
        this.pageName = urlObj.router[1]

        // 或者页面不存在
        if (!isFunction(pages[this.pageName])) {

            // 如果地址错误，跳转到首页
            this.pageName = 'home'
        }

        // 打开页面
        pages[this.pageName]().then(data => {
            this.currentPage = data.default
        })

    }

    goto(event) {
        this.pageName = event.target.getAttribute('tag')
        pages[this.pageName]().then(data => {
            this.currentPage = data.default
            window.location.href = "#/main/" + this.pageName
        })
    }

}
