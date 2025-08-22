/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */

import { defineCustomElement } from 'vue';

// 按需导入组件
import CellButton from '../components/cell.vue';
import ManualLink from '../components/manual-link.vue';
import CopyButton from '../components/copy-button.vue';

// 组件映射
const componentMap = {
    'cell-button': CellButton,
    'manual-link': ManualLink,
    'copy-button': CopyButton,
};

const defineElement = (tagName: string, component: any): void => {
    if (window.customElements.get(tagName)) {
        return;
    }
    
    customElements.define(
        tagName,
        defineCustomElement(component, {
            shadowRoot: false,
            styles: [],
        }),
    );
};

interface Options {
    components?: string[];
}

interface CellProType {
    components: string[];
    hasInit: boolean;
    init: (options?: Options) => void;
    registerComponent: (tagName: string) => void;
    isComponentRegistered: (tagName: string) => boolean;
}

class CellPro implements CellProType {
    components: string[];
    hasInit: boolean;
    registeredComponents: Set<string>;

    constructor() {
        this.components = ['cell-button', 'manual-link', 'copy-button'];
        this.hasInit = false;
        this.registeredComponents = new Set();
    }

    init(options?: Options): void {
        if (!window || !window.customElements) {
            console.error('CellPro is not supported in this environment');
            return;
        }

        // 确定要初始化的组件
        const componentsToInit = options?.components || this.components;
        
        // 只注册未注册的组件
        componentsToInit.forEach(tagName => {
            if (this.registeredComponents.has(tagName)) {
                return; // 跳过已注册的组件
            }
            
            const component = componentMap[tagName as keyof typeof componentMap];
            if (component) {
                defineElement(tagName, component);
                this.registeredComponents.add(tagName);
                console.log(`CellPro: Registered component ${tagName}`);
            } else {
                console.warn(`CellPro: Unknown component ${tagName}`);
            }
        });
        
        this.hasInit = true;
    }

    // 按需注册单个组件
    registerComponent(tagName: string): void {
        if (!window || !window.customElements) {
            console.error('CellPro is not supported in this environment');
            return;
        }

        if (this.registeredComponents.has(tagName)) {
            return; // 已注册
        }

        const component = componentMap[tagName as keyof typeof componentMap];
        if (component) {
            defineElement(tagName, component);
            this.registeredComponents.add(tagName);
            console.log(`CellPro: Registered component ${tagName}`);
        } else {
            console.warn(`CellPro: Unknown component ${tagName}`);
        }
    }

    // 检查组件是否已注册
    isComponentRegistered(tagName: string): boolean {
        return this.registeredComponents.has(tagName);
    }
}

const cellPro = new CellPro();

// 如果DOM已经加载完成，直接执行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    cellPro.init();
} else {
    // 否则等待DOM加载完成
    document.addEventListener('DOMContentLoaded', () => cellPro.init());
}

// 导出组件和实例
export default cellPro;
export { CellButton, ManualLink, CopyButton };
export { cellPro };
