<template>
  <footer>
    <div>
      <a target="_blank" href="https://github.com/VictorRiberaCuatrecasas">
        <img src="../assets/github.png" alt />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/victor-r-c/">
        <img src="../assets/linkedin.png" alt />
      </a>
    </div>
    <div>
      <router-link class="footerNav" to="/">About</router-link>
      <router-link class="footerNav" to="/Work">Work</router-link>
      <router-link class="footerNav" to="/Contact">Contact</router-link>
    </div>
    <hr />
    <p class="footerBottom">
      &copy; {{ new Date().getFullYear() }} |
      <strong>Victor Ribera</strong>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>
