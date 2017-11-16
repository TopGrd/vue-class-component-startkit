<template>
  <div class="hello">
    <h1>{{ myName }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from '../decorator'

@Component
export default class HelloWorld extends Vue {
  msg = 'Hello,'

  mounted() {
    setTimeout(() => {
      this.sayHello()
    }, 3000)
  }

  sayHello() {
    this.msg += ' 3 seconds left'
  }

  get myName() {
    return `${this.msg} TopGrd`
  }

  @Watch('msg')
  sayWatch(value) {
    alert(`i am a watcher, new value is ${value}`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
