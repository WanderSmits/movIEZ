<template>
  <nav>
    <input name="nav-toggle" id="nav-toggle" type="checkbox" />
    <div class="nav-logo">
      <router-link :to="{ name: 'Home' }">Mov<strong>IEZ</strong> </router-link>
    </div>
    <ul class="nav-links" :style="collapsed ? collapseMenu : uncollapseMenu">
      <li @click="onClick">
        <router-link :to="{ name: 'Home' }"><h4>Home</h4></router-link>
      </li>
      <li @click="onClick">
        <router-link :to="{ name: 'Categories' }"
          ><h4>Categories</h4></router-link
        >
      </li>
      <li @click="onClick">
        <router-link :to="{ name: 'Random' }"><h4>Random</h4></router-link>
      </li>
    </ul>
    <label for="nav-toggle" @click="onClick" class="nav-menu">
      <!-- Making the collapsed menu three lines underneath each other -->
      <div class="nav-line"></div>
      <div class="nav-line"></div>
      <div class="nav-line"></div>
    </label>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      collapsed: false,
      collapseMenu: {
        top: "100%",
      },
      uncollapseMenu: {
        bottom: "0%",
      },
    };
  },

  methods: {
    onClick() {
      this.collapsed = !this.collapsed;
    },
  },
});
</script>

<style scoped>
nav {
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 6vh;
  z-index: 10;
}

nav .nav-logo {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #fff;
}

ul {
  text-decoration: none;
}

nav .nav-links {
  float: right;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* All links */
nav a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 1em;
  font-size: 2vh;
  font-weight: bold;
}

nav strong {
  /* Right hand side of the logo */
  color: rgb(231, 22, 22);
}

nav a.router-link-exact-active h4 {
  color: rgb(231, 22, 22);
}

nav .nav-links li {
  list-style: none;
  text-decoration: none;
}

#nav-toggle {
  position: absolute;
  /* dont show toggle */
  top: -100px;
}
nav .nav-menu {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  /* set nav-menu vertically in middle of nav */
  transform: translateY(-50%);
}
/*  the menu */
nav .nav-menu .nav-line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  nav .nav-links {
    position: fixed;
    /* set links the full width and height of screen */
    left: 0;
    right: 0;
    top: 0;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  nav .nav-menu {
    display: block;
  }
}
</style>
