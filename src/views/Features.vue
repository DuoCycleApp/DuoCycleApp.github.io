<template>
  <div class="features">
    <div class="small-nav">
      <router-link to="/features">Your iPhone as Second Screen</router-link>
      <router-link to="/features/data">Maximum Data at a Glance</router-link>
      <router-link to="/features/analysis">Analyze and Share</router-link>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "features"
};
</script>

<style>
.small-nav {
  display: flex;
  padding: 30px;
  padding-top: 0px;
  justify-content: center;
  flex-wrap: wrap;
}

.small-nav a {
  color: black;
  font-size: 16px;
  margin: 0 1em;
  text-decoration: none;
}

.small-nav a.router-link-exact-active {
  color: red;
}
</style>
