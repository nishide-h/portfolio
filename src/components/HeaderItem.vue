<template>
  <header>
    <div class='link'>
      <router-link to='/'>Home</router-link>
      <router-link to='/profile'>Profile</router-link>
      <router-link to='/skills'>Skills</router-link>
      <router-link to='/developed'>Develped</router-link>
      <div class='clear'></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderItem',
  data () {
    return {
    }
  }
}
</script>
