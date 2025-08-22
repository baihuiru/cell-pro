/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */

import { defineAsyncComponent, defineCustomElement } from 'vue';
const CellButton = defineAsyncComponent(() => import('../components/cell.vue'));

const defineElement = (tagName: string): void => {
    customElements.define(
        tagName,
        defineCustomElement(CellButton, {
            shadowRoot: false,
            styles: [],
        }),
    );
};

interface Options {
    tagName?: string;
}

interface CellProType {
    tagName: string;
    hasInit: boolean;
    init: (options: Options) => void;
}

class CellPro implements CellProType {
    tagName: string;
    hasInit: boolean;

    constructor() {
        this.tagName = 'cell-button';
        this.hasInit = false;
    }

    init(_options?: Options): void {
        if (!window || !window.customElements) {
            console.error('is not supported in this environment');
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

const cellPro = new CellPro();


// 如果DOM已经加载完成，直接执行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    cellPro.init();
} else {
    // 否则等待DOM加载完成
    document.addEventListener('DOMContentLoaded', () => cellPro.init());
}

export default cellPro;
