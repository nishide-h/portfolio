<template>
  <transition appear>
    <div id="skills">
      <h2>My Skills</h2>
      <div class="container">
        <div class="items-box">
          <h3>Language</h3>
          <div v-for="item in languageItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="items-box">
          <h3>Front End</h3>
          <div v-for="item in frontendItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="items-box">
          <h3>Server Side</h3>
          <div v-for="item in backendItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="items-box">
          <h3>DataBase</h3>
          <div v-for="item in databaseItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="items-box">
          <h3>OS</h3>
          <div v-for="item in osItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="items-box">
          <h3>Tools</h3>
          <div v-for="item in toolItems" :key="item.id">
            <div class="item">
              <div class="icon">
                <img class="img" :src="item.icon" />
              </div>
              <div class="title">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: function () {
    return {
      languageItems: [
        { id: 0, icon: '../../static/Ruby.png', title: 'Ruby', experience: '3年' }
      ],
      frontendItems: [
        { id: 0, icon: '../../static/AdobeAIR.jpeg', title: 'Flex/AIR', experience: '7年' }
      ],
      backendItems: [
        { id: 0, icon: '../../static/rails-logo.svg', title: 'Ruby on Rails', experience: '1月' }
      ],
      databaseItems: [
        { icon: '../../static/Oracle.png', title: 'Oracle11g', experience: '3年' },
        { icon: '../../static/Oracle.png', title: 'Oracle12c', experience: '1年' }
      ],
      osItems: [
        { icon: '../../static/macOS.jpg', title: 'MacOS X', experience: '3年' }
      ],
      toolItems: [
        { icon: '../../static/GitHub-Mark.png', title: 'GitHub', experience: '4年' }
      ]
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
}
.items-box {
  box-shadow: 2px 2px;
  border: solid 1px #000;
  border-radius: 5px;
  margin: 5px;
  padding: 4px;
}
.img {
  width: 100px;
  height: auto;
}
</style>
