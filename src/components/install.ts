import type { App } from 'vue'
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'
import StyleProvider from './StyleProvider.vue'

export default {
    install(app: App) {
        app.component('ShareButton', ShareButton)
        app.component('HelpLink', HelpLink)
        app.component('StyleProvider', StyleProvider)
    }
}

export { ShareButton, HelpLink, StyleProvider }
