<template>
  <div>
    <div>
      <header class="header2">
        <p class="hTitle">Work</p>
      </header>
      <v-img class="mirrorIMGg" src="../assets/green2b.png"></v-img>
      <div class="projectsText">
        <img class="pencil" src="../assets/pencil.svg" />
        <h1>Lately I've been up to..</h1>
        <p>Here's a selection of some recent work. I've been dedicating most of my time on trying things and learning new languages.</p>
      </div>

      <div class="projects morange">
        <img class="projectIMG" src="../assets/tgifproject.png" />
      </div>

      <div class="projects mblue">
        <img class="projectIMG" src="../assets/tindogproject.png" />
      </div>
      <div class="projects mpink">
        <img class="projectIMG" src="../assets/simonproject.png" />
      </div>
      <div class="projects mblack">
        <img class="projectIMG" src="../assets/mgproject.png" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore suscipit amet atque porro beatae reprehenderit explicabo voluptatibus iste consectetur optio nulla facere aut ab ullam veniam, repudiandae inventore dolorum. Repellat consectetur animi nihil quis aliquid blanditiis eum, numquam vero quasi soluta enim dolores facere error voluptas vitae deleniti in delectus iste praesentium perspiciatis dolorum quod obcaecati? Temporibus hic doloribus sequi eius quas libero quisquam, in id itaque, qui laudantium quasi ut reprehenderit molestiae perspiciatis distinctio mollitia, aperiam eligendi? Dicta ad aperiam tenetur, quasi quas quo eveniet dolorum debitis iusto, facere reprehenderit explicabo perferendis. Quia excepturi fuga est qui debitis? Dolores laborum voluptatum amet quisquam, quis nam necessitatibus rerum optio nemo eum, natus ratione itaque dignissimos delectus voluptates obcaecati quos sit recusandae maxime quidem veritatis mollitia culpa! Eum ipsa deleniti dignissimos illum illo nemo, voluptatem libero? Doloribus inventore illum quam voluptatum voluptas maiores, impedit, perferendis atque repellendus deserunt, eveniet dolor labore. Repudiandae cum, sunt tempora quis libero molestiae consequatur error neque, ex excepturi odio! Eligendi inventore soluta a at vero. Voluptate accusamus, nulla optio aperiam officiis natus alias, deserunt officia, cumque ad ducimus nam debitis cum reprehenderit atque quidem provident. Unde enim veritatis ut amet, possimus provident aspernatur cupiditate. Nesciunt, saepe?</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.projects {
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  justify-content: center;
}
.projectsText {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.projectsText h1 {
  max-width: 30%;
  text-align: center;
  padding: 1.5em 0 1em 0;
}
.projectsText p {
  max-width: 30%;
  text-align: center;
  padding-bottom: 3em;
}

.projectIMG {
  max-width: 50%;
}
.pencil {
  width: 30%;
  max-width: 250px;
  padding-top: 20%;
}
.morange {
  background-color: #f76160;
}
.mblue {
  background-color: #31355b;
}
.mpink {
  background-color: #f8c687;
}
.mblack {
  background-color: #21364b;
}
.header2 {
  background-image: url("../assets/green2.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -15vh;
}

@media (max-width: 600px) {
  .projectIMG {
    max-width: 90%;
    height: 250px;
  }
  .projectsText h1 {
    max-width: 90%;

    font-size: 1.5em;
  }
  .projectsText p {
    max-width: 80%;
  }
}
</style>
