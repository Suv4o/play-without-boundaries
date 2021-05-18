<template>
  <div class="section">
    <div class="container">
      <div class="section__main" id="section__main-latest-news">
        <div class="section__main-first"></div>
        <div class="section__main-second">
          <div
            class="section__main-second-scroll-large"
            id="section__main-second-scroll-latest-news"
            :style="{ top: percentageValue + '%' }"
          ></div>
          <div
            class="section__main-second-scroll-small"
            id="section__main-second-scroll-latest-news"
            :style="{ left: percentageValue + '%' }"
          ></div>
          <div class="section__main-second-container">
            <transition
              v-on:enter="gsapTransitionEnter"
              v-on:leave="gsapTransitionLeave"
            >
              <div v-show="!switchNews" id="firstNews-latest-news">
                <h3>Lastest</h3>
                <h1>The Hearing Device is on the go</h1>
                <p>
                  Separated they live in Bookmarks right at the coast of the
                  famous Semantics, large language ocean Separated they live in
                  Bookmarks right
                </p>
                <div class="section__action-link">
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
                        stroke="#f990a9"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </transition>
            <transition
              v-on:enter="gsapTransitionEnter"
              v-on:leave="gsapTransitionLeave"
            >
              <div v-show="switchNews" id="secondNews-latest-news">
                <h3>Lastest</h3>
                <h1>Lorem ipsum dolor sit amet consec</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
                  corrupti itaque. Esse placeat culpa nisi quidem? Repudiandae
                  iure conseq
                </p>
                <div class="section__action-link">
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
                        stroke="#f990a9"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentageValue: 100,
      switchNews: false
    };
  },
  mounted() {
    let $this = this;

    ScrollTrigger.matchMedia({
      "(min-width: 992px) and (min-height: 500px)": function() {
        $this.gsapOnScrollLarge();
      }
    });
    ScrollTrigger.matchMedia({
      "(min-width: 350px) and (max-width: 991px) and (min-height: 500px)": function() {
        $this.gsapOnScrollSmall();
      }
    });
  },
  methods: {
    gsapOnScrollLarge() {
      let $this = this;
      gsap.to("#section__main-latest-news", {
        scrollTrigger: {
          trigger: "#section__main-latest-news",
          start: "bottom bottom",
          end: "+=1000",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: function(self) {
            $this.percentageValue =
              100 - parseFloat(self.progress.toFixed(3)) * 100;
            if ($this.percentageValue <= 50) {
              $this.switchNews = true;
            } else {
              $this.switchNews = false;
            }
          }
        },
        duration: 3
      });
    },
    gsapOnScrollSmall() {
      let $this = this;
      gsap.to("#section__main-latest-news", {
        scrollTrigger: {
          trigger: "#section__main-latest-news",
          start: "top top",
          end: "+=1000",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: function(self) {
            $this.percentageValue =
              100 - parseFloat(self.progress.toFixed(3)) * 100;
            if ($this.percentageValue <= 50) {
              $this.switchNews = true;
            } else {
              $this.switchNews = false;
            }
          }
        },
        duration: 3
      });
    },
    gsapTransitionEnter() {
      let $this = this;
      if (!gsap.isTweening("#firstNews-latest-news")) {
        gsap.from("#firstNews-latest-news", {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: "back"
        });
      }
    },
    gsapTransitionLeave() {
      let $this = this;
      if (!gsap.isTweening("#secondNews-latest-news")) {
        gsap.from("#secondNews-latest-news", {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: "back"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background-color: $sand-color;
  &__main {
    display: flex;
    @include breakpoint-down(medium) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 600px;
      height: 100vh;
    }
    &-first {
      width: 65%;
      height: 42.8125rem;
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1598090445/pwb-website-2020/faces-1");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right center;

      @include breakpoint-down(xlarge) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1598090445/pwb-website-2020/faces-1");
      }

      @include breakpoint-down(large) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_700,e_sharpen:100/v1598090445/pwb-website-2020/faces-1");
      }

      @include breakpoint-down(medium) {
        background-position: left center;
        width: 100%;
        height: 50%;
      }

      @include breakpoint-down(xsmall) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598090445/pwb-website-2020/faces-1");
      }

      @include breakpoint-down(xxsmall) {
        background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_350,e_sharpen:100/v1598090445/pwb-website-2020/faces-1");
      }
    }
    &-second {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: $purple-color;
      padding-left: 3.75rem;
      padding-right: 2.5rem;
      height: 42.8125rem;
      width: 35%;
      transition: width 0.5s ease-in-out;

      @include breakpoint-down(large) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
      }

      @include breakpoint-down(medium) {
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
        height: 50%;
      }

      @include breakpoint-up(large) {
        &:hover {
          width: 135%;
          transition: width 0.5s ease-in-out;
          .section__action-link {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
        }
      }

      &-scroll-large {
        @include breakpoint-down(medium) {
          display: none;
        }
        background-color: $red-color;
        position: absolute;
        z-index: -1;
        top: 100%;
        left: 0;
        bottom: 0;
        right: 0;
      }

      &-scroll-small {
        @include breakpoint-up(large) {
          display: none;
        }
        background-color: $red-color;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 100%;
        bottom: 0;
        right: 0;
      }

      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      h3 {
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

        @include breakpoint-height-down(small) {
          font-size: 1.5rem;
        }
      }

      h1 {
        margin-top: 1.875rem;
        max-width: 30.25rem;
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

        @include breakpoint-height-down(small) {
          font-size: 2rem;
        }
      }
      p {
        margin-top: 1.875rem;
        max-width: 27.8125rem;
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

        @include breakpoint-height-down(small) {
          font-size: 1rem;
        }
      }
    }
  }
  &__action-link {
    margin-top: 1.875rem;
    opacity: 0;
    @include breakpoint-down(medium) {
      opacity: 1;
    }
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
        color: $pink-badge-color;
        transition: all 0.5s ease-in-out;
      }
    }

    &-arrow {
      margin-left: 0.3125rem;
    }
  }
}
</style>
