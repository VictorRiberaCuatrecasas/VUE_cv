<template>
  <footer>
    <div>
      <a target="_blank" href="https://github.com/VictorRiberaCuatrecasas">
        <img src="../assets/github.png" alt="github" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/victor-r-c/">
        <img src="../assets/linkedin.png" alt="linkedin" />
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
 footer div {
    display: flex;
    justify-content: center;
  }
footer div a img {
  max-height: 25px;
  max-width: 25px;
  margin: 16px 2em 10px;
}
footer div a img:hover {
  padding-bottom: 0px;
}
.footer3 {
  background-color: #00003b;
  color: white;
}
.footer2 {
  background-color: #031d22;
  color: white;
}
.footer1 {
  background-color: #210002;
  color: white;
}
.footerBottom {
  text-align: center;
  padding: 16px 0 16px 0;
  margin: 0;
}
.footerNav {
  margin: 0px 2.5% 032px;
  text-decoration: none;
  color: white !important;
}
.footerNav:hover {
  font-weight: bold;
}
</style>
