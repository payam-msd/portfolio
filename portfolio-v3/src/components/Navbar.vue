<template>
  <header>
    <a class="McButton" data="hamburger-menu" @click="isEnabled = !isEnabled">
      <svg
        class="ham hamRotate ham4"
        viewBox="0 0 100 100"
        width="70"
        onclick="this.classList.toggle('active')"
      >
        <path
          class="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        ></path>
        <path class="line middle" d="m 70,50 h -40"></path>
        <path
          class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        ></path>
      </svg>
    </a>

    <div class="navigation__background">&nbsp;</div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/work">Work</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">resume</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data: {
    isEnabled: false
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/scss/main.scss";
</style>
