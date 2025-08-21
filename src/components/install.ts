import type { App } from 'vue'
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'

export default {
    install(app: App) {
        app.component('ShareButton', ShareButton)
        app.component('HelpLink', HelpLink)
    }
}

export { ShareButton, HelpLink }
