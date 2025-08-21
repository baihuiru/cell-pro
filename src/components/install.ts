import type { App } from 'vue'
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'
import StyleProvider from './StyleProvider.vue'
import { Button, ConfigProvider } from 'ant-design-vue'

export default {
    install(app: App) {
        // 注册自定义组件
        app.component('ShareButton', ShareButton)
        app.component('HelpLink', HelpLink)
        app.component('StyleProvider', StyleProvider)
        
        // 注册 Ant Design Vue 组件
        app.component('Button', Button)
        app.component('ConfigProvider', ConfigProvider)
    }
}

export { ShareButton, HelpLink, StyleProvider, Button, ConfigProvider }
