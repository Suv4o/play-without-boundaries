<template>
  <div class="header">
    <div class="container">
      <div class="header__background-img">
        <h1 class="header__motto-text" id="header__motto-text-home">
          We are human,
          <strong>we are one</strong>
        </h1>
        <button
          aria-label="Scroll to the next section"
          @click="scrollToTheNextSection"
          class="header__arrow-down"
          id="header__arrow-down-home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52.78"
            height="52.78"
            viewBox="0 0 52.78 52.78"
          >
            <path
              id="Icon_ionic-ios-arrow-dropdown-circle"
              data-name="Icon ionic-ios-arrow-dropdown-circle"
              d="M3.375,29.765a26.39,26.39,0,1,0,26.39-26.39A26.386,26.386,0,0,0,3.375,29.765Zm36.679-5.506a2.458,2.458,0,0,1,3.464,0,2.419,2.419,0,0,1,.71,1.725,2.461,2.461,0,0,1-.723,1.738L31.541,39.648a2.446,2.446,0,0,1-3.375-.076l-12.142-12.1A2.449,2.449,0,0,1,19.488,24L29.778,34.4Z"
              transform="translate(-3.375 -3.375)"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    gsap.registerPlugin(ScrollToPlugin);
    this.gsapOnLoad();
  },
  methods: {
    gsapOnLoad() {
      let $this = this;
      gsap.from("#header__motto-text-home", {
        delay: 1.5,
        duration: 2.5,
        opacity: 0,
        y: 30,
        ease: "back",
      });

      gsap.to("#header__arrow-down-home", {
        delay: 2.2,
        duration: 1,
        opacity: 1,
        ease: "back",
      });
    },
    scrollToTheNextSection() {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#first-section",
        ease: "power4",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__background-img {
    position: relative;
    min-height: 600px;
    height: 88vh;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1600,e_sharpen:100/v1597565929/pwb-website-2020/header-main-image");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    @include breakpoint-down(large) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1597565929/pwb-website-2020/header-main-image");
    }

    @include breakpoint-down(medium) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1597565929/pwb-website-2020/header-main-image");
      background-attachment: scroll;
    }

    @include breakpoint-down(small) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_700,e_sharpen:100/v1597565929/pwb-website-2020/header-main-image");
    }

    @include breakpoint-down(xsmall) {
      min-height: 500px;
      height: 77vh;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1597565929/pwb-website-2020/header-main-image");
    }
  }
  &__motto-text {
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: 14%;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    transform: translate(-50%, -50%);
    font-size: 3.5rem;
    font-weight: normal;
    line-height: 1.07;
    letter-spacing: -1px;
    text-align: center;
    color: $light-pink-background-color;

    @include breakpoint-down(xlarge) {
      font-size: 2.6875rem;
    }

    @include breakpoint-down(medium) {
      font-size: 3.5rem;
    }

    @include breakpoint-down(small) {
      font-size: 2.25rem;
    }
  }

  &__arrow-down {
    position: absolute;
    display: block;
    left: 50%;
    bottom: 0;
    opacity: 0;
    background-color: $transparent-color;
    border: 0;
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    &:hover {
      margin-bottom: 0.1875rem;
      transition: all 0.3s ease-in-out;
      path {
        fill: $pink-badge-color;
        transition: all 0.3s ease-in-out;
      }
    }

    &:focus {
      path {
        fill: $pink-badge-color;
        transition: all 0.3s ease-in-out;
      }
    }
    @include breakpoint-down(small) {
      svg {
        width: 3.125rem;
        height: 3.125rem;
      }
    }
  }
}
</style>
