<template>
  <section class="section">
    <div class="container">
      <div class="the-play"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-play {
  height: 756px;
  margin-top: -7.375rem;
  background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1600,e_sharpen:100/v1598778939/pwb-website-2020/ThePlaysHeader");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  @include breakpoint-down(large) {
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1598778939/pwb-website-2020/ThePlaysHeader");
  }

  @include breakpoint-down(medium) {
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1598778939/pwb-website-2020/ThePlaysHeader");
    background-attachment: scroll;
  }

  @include breakpoint-down(small) {
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_700,e_sharpen:100/v1598778939/pwb-website-2020/ThePlaysHeader");
  }

  @include breakpoint-down(xsmall) {
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598778939/pwb-website-2020/ThePlaysHeader");
  }
}
</style>
