<template>
  <transition appear>
    <div id="profile">
      <h1>Profile</h1>
      <table>
        <tr>
          <th colspan="2">
            <img :src="gravatarUrl">
          </th>
        </tr>
        <tr>
          <th>Full Name</th>
          <td>{{ fullname }}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{{ from }}</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>{{ email }}</td>
        </tr>
        <tr>
          <th>Website</th>
          <td>{{ site }}</td>
        </tr>
      </table>
    </div>
  </transition>
</template>

<script>
import gravatar from '../../node_modules/gravatar'
export default {
  name: 'Profile',
  title: 'Profile',
  data () {
    return {
      gravatarUrl: gravatar.url('nishide.h@gmail.com'),
      fullname: 'Nishide Hirokazu',
      from: 'Kyoto',
      email: 'nishide.h@gmail.com',
      site: 'http://nishide-h.hatenablog.com/'
    }
  }
}
</script>

<style>
table {
  text-align: center;
  margin: 0px auto;
}
th {
  text-align: center;
}
td {
  text-align: left;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
</style>
