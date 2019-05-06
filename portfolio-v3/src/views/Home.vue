<template>
  <div>
    <!-- MAIN SECTION -->
    <main id="home">
      <!-- MAIN BACKGROUND -->
      <div class="background">
        <img
          class="background__svg"
          src="../../public/img/undraw_profile_6l1l.svg"
          alt="Freelance-profile"
        >

        <!-- TEXT BOX MAIN -->
        <div class="textBox">
          <h1 class="textBox__name">
            PAYAM
            <span class="textBox__family-sub">MAGHSODI</span>
          </h1>
          <div class="textBox__bg-mainText">
            <p class="textBox__mainText">Front-end Developer Designer</p>
          </div>
        </div>
      </div>

      <!-- 6 MIDDLE ICONS -->
      <div class="icon">
        <div class="icon__item">
          <i class="lni-instagram-original">
            <a
              type="button"
              href="https://www.instagram.com/accounts/login/?next=%2Fpayam_dev%2F&source=follow"
              class="icon__link"
            >follow</a>
          </i>
        </div>
        <div class="icon__item">
          <i class="lni-twitter">
            <a type="button" href="https://twitter.com/payamsd32" class="icon__link">follow</a>
          </i>
        </div>
        <div class="icon__item">
          <i class="lni-dribbble">
            <a type="button" href="https://dribbble.com/payamsd32" class="icon__link">follow</a>
          </i>
        </div>
        <div class="icon__item">
          <i class="lni-linkedin">
            <a type="button" href="https://www.linkedin.com/in/payamdev/" class="icon__link">follow</a>
          </i>
        </div>
        <div class="icon__item">
          <i class="lni-github">
            <a type="button" href="https://github.com/payam-msd" class="icon__link">follow</a>
          </i>
        </div>
        <div class="icon__item">
          <i class="lni-telegram">
            <a type="button" href="https://www.telegram.me/payam_dev" class="icon__link">follow</a>
          </i>
        </div>
      </div>

      <!-- 2 DOWNSIDE BUTTONS -->
      <div class="button">
        <div class="button__item-1">
          <a class="button__link" href="./contact.html">hire me</a>
        </div>
        <div class="button__item-2">
          <a class="button__link" href="./work.html">explore more</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "@/styles/scss/main.scss";
</style>
