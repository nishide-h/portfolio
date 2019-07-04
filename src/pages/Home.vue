<template>
  <transition appear>
    <div id="hello">
      <h1>{{ msg }}</h1>
      <h2>This portfolio is built with Vue.js + Webpack + HTML5 + CSS3.</h2>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Home',
  title: ' ',
  data () {
    return {
      msg: 'Welcome to nishide-h Portfolio Site.'
    }
  }
}
</script>
