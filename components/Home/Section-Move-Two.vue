<template>
  <section class="section">
    <div class="container">
      <div
        class="section__main"
        id="section__main-moving-square-two"
        :style="{backgroundPosition: bacgroundMoveStatic}"
      >
        <div
          class="section__moving-square-large"
          id="section__moving-square-large-two"
          :style="{left: moveValue+'%', backgroundPosition: moveBacgroundValue+'%'}"
        ></div>
        <div
          class="section__moving-square-small"
          id="section__moving-square-small-two"
          :style="{top: moveValue+'%', backgroundPosition: + 0+'%' + moveBacgroundValue+'%'}"
        ></div>
        <div class="section__left">
          <div class="section__content">
            <h1>
              Can you
              <strong>imagine</strong> the world
              <strong>without boundaries</strong>
            </h1>
            <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right</p>
            <div class="section__action-link">
              <nuxt-link to="/">
                Action link
                <img
                  class="section__action-link-arrow"
                  src="/images/icons/active-link-arrow-left.svg"
                  alt
                />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="section__right">
          <div class="section__content">
            <h1>
              <strong>Belong</strong> fully without boundaries
            </h1>
            <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right</p>
            <div class="section__action-link">
              <nuxt-link to="/">
                Action link
                <img
                  class="section__action-link-arrow"
                  src="/images/icons/active-link-arrow-left.svg"
                  alt
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      moveValue: 0,
      moveBacgroundValue: 0,
      windowSize: 0,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.onResize);
      this.windowSize = window.innerWidth;
    }
  },
  mounted() {
    let $this = this;
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(min-width: 992px) and (min-height: 500px)": function () {
        $this.gsapOnScrollLarge();
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 350px) and (max-width: 991px) and (min-height: 500px)": function () {
        $this.gsapOnScrollSmall();
      },
    });
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
    gsapOnScrollLarge() {
      let $this = this;
      gsap.to("#section__moving-square-large-two", {
        scrollTrigger: {
          trigger: "#section__main-moving-square-two",
          start: "top top",
          end: "+=1000",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: (self) => (
            ($this.moveValue = parseFloat(self.progress.toFixed(3)) * 50),
            ($this.moveBacgroundValue = $this.moveValue * 2)
          ),
        },
        duration: 3,
      });
    },
    gsapOnScrollSmall() {
      let $this = this;
      gsap.to("#section__moving-square-small-two", {
        scrollTrigger: {
          trigger: "#section__main-moving-square-two",
          start: "top top",
          end: "+=600",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: (self) => (
            ($this.moveValue = parseFloat(self.progress.toFixed(3)) * 50),
            ($this.moveBacgroundValue = $this.moveValue * 2)
          ),
        },
        duration: 3,
      });
    },
  },
  computed: {
    bacgroundMoveStatic() {
      if (this.windowSize < 992) {
        return "0%" + this.moveBacgroundValue + "%";
      } else {
        return this.moveBacgroundValue + "%";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  &__main {
    position: relative;
    z-index: 1;
    display: flex;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1600,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    background-size: auto 100vh;
    background-repeat: no-repeat;
    background-position: 0%;
    min-height: 600px;
    height: 100vh;

    @include breakpoint-down(large) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    }

    @include breakpoint-down(medium) {
      flex-direction: column;
      background-position: 0% 0%;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    }

    @include breakpoint-down(small) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_700,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    }

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    }

    @include breakpoint-down(xxsmall) {
      min-height: auto;
      height: auto;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598057554/pwb-website-2020/section-move-static-2");
    }
  }

  &__moving-square-large {
    position: absolute;
    z-index: 2;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1600,e_sharpen:100/v1598057332/pwb-website-2020/section-move-2");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0%;
    min-height: 600px;
    top: 0;
    left: 0%;
    height: 100vh;
    width: 50%;

    @include breakpoint-down(large) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1598057332/pwb-website-2020/section-move-2");
    }

    @include breakpoint-down(medium) {
      display: none;
      background-image: none;
    }

    @include breakpoint-height-down(small) {
      display: none;
      background-image: none;
    }
  }

  &__moving-square-small {
    @include breakpoint-up(large) {
      display: none;
      background-image: none;
    }

    @include breakpoint-down(medium) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1598057332/pwb-website-2020/section-move-2");
    }

    @include breakpoint-down(small) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_700,e_sharpen:100/v1598057332/pwb-website-2020/section-move-2");
    }

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598057332/pwb-website-2020/section-move-2");
    }

    @include breakpoint-down(xxsmall) {
      display: none;
      background-image: none;
    }

    @include breakpoint-height-down(small) {
      display: none;
      background-image: none;
    }

    position: absolute;
    z-index: 2;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: auto 100vh;
    background-position: 0% 0%;
    min-height: auto;
    top: 0%;
    left: 0;
    width: 100%;
    height: 50vh;
  }

  &__left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @include breakpoint-down(medium) {
      height: auto;
    }
  }

  &__right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @include breakpoint-down(medium) {
      height: auto;
    }
  }

  &__content {
    width: 45%;
    color: $purple-darker-color;

    h1 {
      line-height: 1.07;
      letter-spacing: -1px;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.56;
      letter-spacing: normal;
      margin-top: 3.125rem;
    }

    @include breakpoint-down(medium) {
      width: 80%;
    }

    @include breakpoint-down(small) {
      h1 {
        font-size: 2.25rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.56;
        letter-spacing: normal;
        margin-top: 3.125rem;
      }
    }
  }

  &__action-link {
    margin-top: 1.875rem;
    a {
      display: block;
      font-size: 1.125rem;
      line-height: 1.56;
      letter-spacing: normal;
      color: $purple-darker-color;
      transition: all 0.5s;
      @include breakpoint-down(small) {
        font-size: 1rem;
      }

      &:hover {
        color: $red-color;
        transition: all 0.5s;
      }
    }

    &-arrow {
      margin-left: 0.3125rem;
    }
  }
}
</style>