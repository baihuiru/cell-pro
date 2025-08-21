// Vue组件导入
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'
import StyleProvider from './StyleProvider.vue'

// Ant Design Vue 组件导入
import { Button, ConfigProvider } from 'ant-design-vue'

// 导入自定义样式文件，确保样式被打包
import './styles/antd-styles.css'

// Ant Design Vue 4.x 使用 CSS-in-JS，不需要导入 CSS 文件
// 样式会通过 JavaScript 动态生成

// Web Components导入
import { registerWebComponents } from './web-components'

// Vue插件导入
import install from './install'

// Vue组件导出
export { default as ShareButton } from './ShareButton.vue'
export { default as HelpLink } from './HelpLink.vue'
export { default as StyleProvider } from './StyleProvider.vue'

// Ant Design Vue 组件导出
export { Button, ConfigProvider }

// Web Components导出
export { registerWebComponents } from './web-components'

// Vue插件导出
export { default as install } from './install'

// 类型导出
export type { ShareButtonElement, HelpLinkElement } from './web-components'

// 默认导出（支持 app.use() 和 import 两种方式）
export default {
    ShareButton,
    HelpLink,
    StyleProvider,
    Button,
    ConfigProvider,
    registerWebComponents,
    install
}
