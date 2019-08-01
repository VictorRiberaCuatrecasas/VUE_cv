<template>
  <container>
    <header class="header1">
      <p class="hTitle">I'm Victor</p>
      <p class="hSubtitle1">
        a web
        <strong style="font-style: italic">pro</strong>grammer
      </p>
    </header>
  </container>
</template>

<script>
export default {};
</script>

<style>
.header1 {
  background-image: url("../assets/orange.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hTitle {
  padding-top: 20vh;
  color: white;
  font-size: 10vh;
  font-family: "Satisfy", cursive;
  text-align: center;
  margin-bottom: 0 !important;
}
.hSubtitle1 {
  color: white;
  font-size: 3vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
</style>
