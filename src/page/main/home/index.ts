import { Component } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {

    doSearch(event) {

        // 如果是回车就带着数据跳转到查询界面
        if (event.keyCode == 13) {
            let aDom = document.createElement('a')
            aDom.setAttribute('href', "https://hai2007.gitee.io/sweethome/#/search?wd=" + encodeURIComponent(event.target.value))
            aDom.setAttribute('target', '_blank')
            aDom.click()
        }
    }

}
