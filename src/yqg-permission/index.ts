/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
import { defineAsyncComponent, defineCustomElement } from 'vue';
const YqgPermissionApply = defineAsyncComponent(() => import('../components/yqg-permission.vue'));

const defineElement = (tagName: string): void => {
    customElements.define(
        tagName,
        defineCustomElement(YqgPermissionApply, {
            shadowRoot: false,
            styles: [],
        }),
    );
};

interface Options {
    tagName?: string;
}

interface YqgPermissionType {
    tagName: string;
    hasInit: boolean;
    init: (options: Options) => void;
}

class YqgPermission implements YqgPermissionType {
    tagName: string;
    hasInit: boolean;

    constructor() {
        this.tagName = 'share-button';
        this.hasInit = false;
    }

    init(_options?: Options): void {
        if (!window || !window.customElements) {
            console.error('yqg-permission is not supported in this environment');
            return;
        }
        if (this.hasInit) {
            return;
        }

        this.hasInit = true;

        if (window.customElements.get(this.tagName)) {
            return;
        }


        defineElement(this.tagName);
    };
}

const yqgPermission = new YqgPermission();


// 如果DOM已经加载完成，直接执行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    yqgPermission.init();
} else {
    // 否则等待DOM加载完成
    document.addEventListener('DOMContentLoaded', () => yqgPermission.init());
}

export default yqgPermission;
