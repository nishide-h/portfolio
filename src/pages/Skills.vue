<template>
  <transition appear>
    <div id="skills">
      <h2>My Skills</h2>
      <div class="container">
        <div class="items-box">
          <h3>Language</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/Ruby.png" />
            </div>
            <div class="title">Ruby</div>
          </div>
        </div>
        <div class="items-box">
          <h3>Front End</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/AdobeAIR.jpeg" />
            </div>
            <div class="title">Flex/AIR</div>
          </div>
        </div>
        <div class="items-box">
          <h3>Server Side</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/rails-logo.svg" />
            </div>
            <div class="title">Ruby on Rails</div>
          </div>
        </div>
        <div class="items-box">
          <h3>DataBase</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/Oracle.png" />
            </div>
            <div class="title">Oracle</div>
          </div>
        </div>
        <div class="items-box">
          <h3>OS</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/macOS.jpg" />
            </div>
            <div class="title">MacOS X</div>
          </div>
        </div>
        <div class="items-box">
          <h3>Tools</h3>
          <div class="item">
            <div class="icon">
              <img class="img" src="../../static/GitHub-Mark.png" />
            </div>
            <div class="title">GitHub</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
module.exports = {
  data: function () {
    return {
      items: [
        { icon: '../../static/rails-logo.svg', title: 'Ruby on Rails', experience: '1月' }
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
