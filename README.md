# vue-class-component startkit

> vue class component

```js
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'src/decorator'

// @Component({})
@Component
export default class HelloWorld extends Vue {
  // data
  msg = 'Hello,'

  // lifecycle hooks
  mounted() {
    setTimeout(() => {
      this.sayHello()
    }, 3000)
  }

  // methods
  sayHello() {
    this.msg += ' 3 seconds left'
  }

  // computed
  get myName() {
    return `${this.msg} TopGrd`
  }

  // watch
  @Watch('msg')
  sayWatch(value) {
    alert(`i am a watcher, new value is ${value}`)
  }
}
```

use vue-class-component
