<template>
  <div class="support">
    <div>
      <img src="../assets/support.png" alt="A rider in need of help" />
    </div>
    <div class="support-desc">
      <h1>Support</h1>
      <p>
        Whenever you encounter problems, unexpected crashes or have ideas
        or feature requests, feel free to send me an eMail with all
        necessary details (problem-description, screenshots, steps to
        reproduce, etc.) to:
      </p>

      <p>
        <a href="mailto:DuoCycleApp@gmail.com">DuoCycleApp@gmail.com</a>
      </p>

      <p>And I will try to respond as fast as I can! 😉</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "support"
};
</script>

<style scoped>
.support {
  text-align: left;
  display: flex;
  justify-content: space-evenly;
}

.support-desc {
  width: 60vw;
}

h1 {
  margin-top: 0;
}

p {
  font-family: "Helvetica Neue";
}

a {
  color: red;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: 40vh;
}
</style>