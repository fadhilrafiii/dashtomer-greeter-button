import { createApp } from 'vue'
import ButtonGreeter from './ButtonGreeter.vue'

window.Greeter = {
  init(selector, props) {
    const app = createApp(ButtonGreeter, props)
    app.mount(selector)
  },
}
