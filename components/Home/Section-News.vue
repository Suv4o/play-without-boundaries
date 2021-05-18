<template>
  <section class="section">
    <div class="container">
      <div class="section__main" id="section__main-news">
        <div
          class="section__main-news1"
          @mouseover="gsapAnimateMouseOverMiddleImg"
          @mouseleave="gsapAnimateMouseLeaveMiddleImg"
        >
          <div class="section__main-news1-container">
            <div class="h3">News</div>
            <h1>How we can stay connected and social distancing in the</h1>
            <p>
              Separated they live in Bookmarks right at the coast of the famous
              Semantics, large language ocean Separated they live in Bookmarks
              right
            </p>
            <div class="section__main-news1-action-link">
              <nuxt-link to="/">
                Action link
                <svg
                  class="section__action-link-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.591"
                  height="9.061"
                  viewBox="0 0 5.591 9.061"
                >
                  <path
                    id="Line"
                    d="M8,0,4,4,0,0"
                    transform="translate(0.53 8.53) rotate(-90)"
                    fill="none"
                    stroke="#ed2a58"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="section__main-news2">
          <div
            class="section__main-news1--bg-img"
            id="section__main-news1--bg-img-news"
          ></div>
          <div class="section__main-news2-container">
            <div class="h3">News</div>
            <h1>How we can stay connected and social distancing in the</h1>
            <p>
              Separated they live in Bookmarks right at the coast of the famous
              Semantics, large language ocean Separated they live in Bookmarks
              right
            </p>
            <div class="section__main-news2-action-link">
              <nuxt-link to="/">
                Action link
                <svg
                  class="section__action-link-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.591"
                  height="9.061"
                  viewBox="0 0 5.591 9.061"
                >
                  <path
                    id="Line"
                    d="M8,0,4,4,0,0"
                    transform="translate(0.53 8.53) rotate(-90)"
                    fill="none"
                    stroke="#ed2a58"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="section__main-news3"
          id="section__main-news3-news"
          @mouseover="gsapAnimateMouseOverLastImg"
          @mouseleave="gsapAnimateMouseLeaveLastImg"
        >
          <div class="section__main-news3-container">
            <h1
              class="section__main-news3--hidden-medium-down"
              id="title-h1-news"
            >
              Love and Connection
            </h1>
            <h1 class="section__main-news3--hidden-medium-up">
              Love and Connection
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    gsapAnimateMouseOverMiddleImg() {
      let $this = this;
      gsap.to("#section__main-news1--bg-img-news", {
        duration: 1.5,
        width: 100 + "%",
        ease: "power4",
      });
    },
    gsapAnimateMouseLeaveMiddleImg() {
      let $this = this;
      gsap.to("#section__main-news1--bg-img-news", {
        duration: 1.5,
        width: 0 + "%",
        ease: "power4",
      });
    },
    gsapAnimateMouseOverLastImg() {
      let $this = this;
      gsap.to("#section__main-news3-news", {
        duration: 1.5,
        backgroundPosition: "70% center",
        ease: "power4",
      });

      gsap.to("#title-h1-news", {
        duration: 1.5,
        opacity: 1,
        ease: "power4",
      });
    },
    gsapAnimateMouseLeaveLastImg() {
      let $this = this;
      gsap.to("#section__main-news3-news", {
        duration: 1.5,
        backgroundPosition: "20% center",
        ease: "power4",
      });
      gsap.to("#title-h1-news", {
        duration: 1.5,
        opacity: 0,
        ease: "power4",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: $sand-color;
  height: 51.9375rem;
  @include breakpoint-down(medium) {
    height: auto;
  }
  &__main {
    display: flex;
    @include breakpoint-down(medium) {
      flex-direction: column;
    }
    &-news1 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598157339/pwb-website-2020/news-jar-1");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 31.5%;
      height: 51.9375rem;

      @include breakpoint-down(medium) {
        width: auto;
        height: 31.25rem;
      }

      @include breakpoint-down(xxsmall) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_350,e_sharpen:100/v1598157339/pwb-website-2020/news-jar-1");
      }

      &--bg-img {
        position: absolute;
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598157339/pwb-website-2020/news-balloons-1");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 0%;
        @include breakpoint-down(medium) {
          display: none;
          background-image: none;
        }
      }

      &-container {
        width: 80%;
      }

      .h3 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 0.86;
        letter-spacing: 0.18px;
        color: $white-color;

        @include breakpoint-down(small) {
          font-size: 1.5rem;
        }

        @include breakpoint-down(xxsmall) {
          font-size: 1.25rem;
        }
      }

      h1 {
        margin-top: 1.875rem;
        font-weight: bold;
        line-height: 1.07;
        letter-spacing: -1px;
        color: $white-color;

        @include breakpoint-down(small) {
          font-size: 2rem;
        }

        @include breakpoint-down(xxsmall) {
          font-size: 1.5rem;
        }
      }
      p {
        margin-top: 1.875rem;
        font-size: 1.125rem;
        line-height: 1.56;
        letter-spacing: normal;
        color: $white-color;

        @include breakpoint-down(small) {
          font-size: 1rem;
        }
        @include breakpoint-down(xxsmall) {
          font-size: 0.875rem;
        }
      }

      &-action-link {
        margin-top: 1.875rem;
        a {
          display: block;
          font-size: 1.125rem;
          line-height: 1.56;
          letter-spacing: normal;
          color: $white-color;
          transition: all 0.5s ease-in-out;

          @include breakpoint-down(small) {
            font-size: 1rem;
          }

          @include breakpoint-down(xxsmall) {
            font-size: 0.875rem;
          }

          &:hover {
            color: $red-color;
            transition: all 0.5s ease-in-out;
          }
        }

        &-arrow {
          margin-left: 0.3125rem;
        }
      }
    }
    &-news2 {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 33.5%;
      height: 51.9375rem;

      @include breakpoint-down(medium) {
        width: auto;
        height: 31.25rem;
      }

      &-container {
        width: 80%;
      }

      .h3 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 0.86;
        letter-spacing: 0.18px;
        color: $purple-darker-color;

        @include breakpoint-down(small) {
          font-size: 1.5rem;
        }

        @include breakpoint-down(xxsmall) {
          font-size: 1.25rem;
        }
      }

      h1 {
        margin-top: 1.875rem;
        font-weight: bold;
        line-height: 1.07;
        letter-spacing: -1px;
        color: $purple-darker-color;

        @include breakpoint-down(small) {
          font-size: 2rem;
        }

        @include breakpoint-down(xxsmall) {
          font-size: 1.5rem;
        }
      }
      p {
        margin-top: 1.875rem;
        font-size: 1.125rem;
        line-height: 1.56;
        letter-spacing: normal;
        color: $purple-darker-color;

        @include breakpoint-down(small) {
          font-size: 1rem;
        }
        @include breakpoint-down(xxsmall) {
          font-size: 0.875rem;
        }
      }

      &-action-link {
        margin-top: 1.875rem;
        a {
          display: block;
          font-size: 1.125rem;
          line-height: 1.56;
          letter-spacing: normal;
          color: $purple-darker-color;
          transition: all 0.5s ease-in-out;

          @include breakpoint-down(small) {
            font-size: 1rem;
          }

          @include breakpoint-down(xxsmall) {
            font-size: 0.875rem;
          }

          &:hover {
            color: $red-color;
            transition: all 0.5s ease-in-out;
          }
        }

        &-arrow {
          margin-left: 0.3125rem;
        }
      }
    }
    &-news3 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598157341/pwb-website-2020/news-hands-1");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 20% center;
      flex: 1;
      height: 51.9375rem;

      @include breakpoint-down(medium) {
        width: auto;
        height: 31.25rem;
        flex: none;
      }

      @include breakpoint-down(xxsmall) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_350,e_sharpen:100/v1598157341/pwb-website-2020/news-hands-1");
      }

      &-container {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        @include breakpoint-down(medium) {
          width: 50%;
        }
      }
      h1 {
        margin-top: 1.875rem;
        font-weight: bold;
        line-height: 1.07;
        letter-spacing: -1px;
        color: $white-color;
        max-width: 80%;
        opacity: 0;

        @include breakpoint-down(medium) {
          opacity: 1;
        }

        @include breakpoint-down(small) {
          font-size: 2rem;
        }

        @include breakpoint-down(xxsmall) {
          font-size: 1.5rem;
        }
      }
      &--hidden-medium-down {
        @include breakpoint-down(medium) {
          display: none;
        }
      }

      &--hidden-medium-up {
        @include breakpoint-up(large) {
          display: none;
        }
      }
    }
  }
}
</style>