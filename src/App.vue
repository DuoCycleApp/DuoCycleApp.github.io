<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Oswald:300,500&display=swap"
      rel="stylesheet"
    />
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/features">Features</router-link>
      <router-link to="/privacy">Privacy</router-link>
      <router-link to="/support">Support</router-link>
      <router-link to="/download">Download</router-link>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
    <footer>
      <p>© 2019 Patryk Pekala. All Rights Reserved.</p>

      <p>Apple, the Apple logo and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc.</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "HelveticaNeue-CondensedBold", "Oswald";
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  display: flex;
  padding: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#nav a {
  color: black;
  text-decoration: none;
}

#nav a.router-link-active {
  color: red;
}

.textlink {
  color: red;
  text-decoration: none;
}

h1 {
  margin-top: 0;
}

.description {
  margin: 1em 5em;
}

.copy {
  font-family: "Helvetica Neue", "Arial";
}

#appstore {
  height: 10vh;
}

footer {
  margin-top: 5em;
  font-family: "Helvetica Neue", "Arial";
  font-weight: 300;
  color: #9b9b9b;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media (max-width: 550px) {
  #app {
    font-size: 20px;
  }

  .description {
    margin: 1em;
  }

  footer {
    margin-top: 2em;
    font-size: 12px;
  }
}
</style>
