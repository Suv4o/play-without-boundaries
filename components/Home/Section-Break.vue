<template>
  <section class="section">
    <div class="container">
      <div class="section__main" id="section-break">
        <h6 class="section__main-title" id="section-break-title">Tagline</h6>
        <p class="section__main-text" id="section-break-text">Duis aute irure dolor in reprehenderit</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.gsapOnLoad();
  },
  methods: {
    gsapOnLoad() {
      gsap.from("#section-break-title, #section-break-text", {
        scrollTrigger: {
          trigger: "#section-break",
          start: "top center",
          // markers: true,
        },
        duration: 3,
        opacity: 0,
        y: 120,
        ease: "back",
        stagger: 0.5,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: $sand-color;
  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20rem;

    &-title {
      font-size: 1rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: 0.1px;
      text-align: center;
      color: $purple-darker-color;
    }
    &-text {
      font-size: 2.5rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      max-width: 33.75rem;
      padding: 0 0.625rem;
      line-height: 1.2;
      letter-spacing: -0.5px;
      text-align: center;
      color: $purple-darker-color;
    }
  }
}
</style>