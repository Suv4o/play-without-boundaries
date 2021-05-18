<template>
  <footer class="footer" id="footer-main">
    <div class="footer__cover" id="footer__cover"></div>
    <div class="container">
      <div class="footer__main">
        <h1 class="footer__title">Duis aute irure dolor in reprehenderit</h1>
        <button
          @click="$refs.modalWindow.openModal()"
          class="footer__button"
          id="lets-button"
          :disabled="!isLetsButtonOpen"
          :class="[!isLetsButtonOpen ? 'footer__button--close' : 'footer__button--open']"
        >
          <p id="lets-text">let's</p>
          <div id="lets-logo">
            <svg
              id="Group_115"
              data-name="Group 115"
              xmlns="http://www.w3.org/2000/svg"
              width="168.567"
              height="167.78"
              viewBox="0 0 168.567 167.78"
            >
              <path
                class="lets-logo-path"
                id="Path_22"
                data-name="Path 22"
                d="M129.55,0a51.223,51.223,0,0,0-51.2,51.245V66.234a90.5,90.5,0,0,0,43.683,13.5,90.541,90.541,0,0,0,57.479-17.1A51.245,51.245,0,0,0,129.55,0Zm-.225,71.343a13.256,13.256,0,1,1,13.256-13.256A13.256,13.256,0,0,1,129.325,71.343Z"
                transform="translate(-78.35)"
                fill="#ed2a58"
              />
              <path
                class="lets-logo-path"
                id="Path_23"
                data-name="Path 23"
                d="M119.648,57a146.287,146.287,0,0,1-19.377,64.389H81.051a2.7,2.7,0,0,1-2.7-2.7V37.1a90.653,90.653,0,0,1,41.3,19.9Z"
                transform="translate(-78.35 46.396)"
                fill="#ed2a58"
              />
              <path
                class="lets-logo-path"
                id="Path_24"
                data-name="Path 24"
                d="M153.763,29.09h-.2a147.862,147.862,0,0,1-41.68,33.556,91.215,91.215,0,0,1,4.771,68.755h37.179a51.155,51.155,0,0,0,0-102.311Z"
                transform="translate(-36.419 36.379)"
                fill="#ed2a58"
              />
              <path
                class="lets-logo-path"
                id="Path_25"
                data-name="Path 25"
                d="M135.006,98.686H91.66A146.152,146.152,0,0,0,121.21,55.25,90.449,90.449,0,0,1,135.006,98.686Z"
                transform="translate(-61.706 69.093)"
                fill="#ed2a58"
              />
            </svg>
          </div>
        </button>
      </div>
      <div class="footer__links">
        <nuxt-link class="footer__link" to="/">Experiences</nuxt-link>
        <nuxt-link class="footer__link" to="/">ThePlays</nuxt-link>
        <nuxt-link class="footer__link" to="/">Play your Part</nuxt-link>
        <nuxt-link class="footer__link" to="/">Story</nuxt-link>
        <nuxt-link class="footer__link" to="/">Latest</nuxt-link>
      </div>
      <div class="footer__socials">
        <div class="footer__social">
          <div class="footer__social-name">Instagram</div>
          <div class="footer__social-icon">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.518"
                height="31.511"
                viewBox="0 0 31.518 31.511"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                  transform="translate(0.005 -2.238)"
                  fill="#33286f"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__social">
          <div class="footer__social-name">Facebook</div>
          <div class="footer__social-icon">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.759"
                height="29.759"
                viewBox="0 0 29.759 29.759"
              >
                <path
                  id="Icon_awesome-facebook-square"
                  data-name="Icon awesome-facebook-square"
                  d="M26.57,2.25H3.188A3.188,3.188,0,0,0,0,5.438V28.82a3.188,3.188,0,0,0,3.188,3.188h9.117V21.891H8.121V17.129h4.185V13.5c0-4.128,2.458-6.409,6.222-6.409a25.352,25.352,0,0,1,3.688.322v4.052H20.138a2.381,2.381,0,0,0-2.685,2.573v3.092h4.569l-.731,4.762H17.453V32.009H26.57a3.188,3.188,0,0,0,3.188-3.188V5.438A3.188,3.188,0,0,0,26.57,2.25Z"
                  transform="translate(0 -2.25)"
                  fill="#33286f"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__social">
          <div class="footer__social-name">LinkedIn</div>
          <div class="footer__social-icon">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32.7"
                height="32.699"
                viewBox="0 0 32.7 32.699"
              >
                <path
                  id="Icon_awesome-linkedin-in"
                  data-name="Icon awesome-linkedin-in"
                  d="M7.319,32.7H.54V10.868H7.319ZM3.926,7.89A3.945,3.945,0,1,1,7.852,3.927,3.959,3.959,0,0,1,3.926,7.89ZM32.692,32.7H25.928V22.072c0-2.533-.051-5.781-3.525-5.781-3.525,0-4.065,2.752-4.065,5.6V32.7H11.566V10.868h6.5v2.978h.095a7.123,7.123,0,0,1,6.414-3.525c6.861,0,8.122,4.518,8.122,10.387V32.7Z"
                  transform="translate(0 -0.001)"
                  fill="#33286f"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <LetsModal ref="modalWindow" :isOpen="isLetsButtonOpen" />
  </footer>
</template>

<script>
import LetsModal from "@/components/UI/Lets-modal.vue";
export default {
  data() {
    return {
      isLetsButtonOpen: false,
    };
  },
  components: {
    LetsModal,
  },
  mounted() {
    let $this = this;
    ScrollTrigger.clearMatchMedia("(min-width: 992px)");
    ScrollTrigger.clearMatchMedia("(max-width: 991px)");

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        $this.gsapOnLoadLarge();
      },
    });
    ScrollTrigger.matchMedia({
      "(max-width: 991px)": function () {
        $this.gsapOnLoadSmall();
      },
    });
  },
  destroyed() {
    ScrollTrigger.clearMatchMedia("(min-width: 992px)");
    ScrollTrigger.clearMatchMedia("(max-width: 991px)");
  },
  methods: {
    gsapOnLoadLarge() {
      let $this = this;
      gsap.set("#lets-button", { clearProps: "all" });
      gsap.set("#lets-text", { clearProps: "all" });
      gsap.set(".lets-logo-path", { clearProps: "fill" });
      gsap.set("#footer__cover", { clearProps: "all" });

      gsap.from("#lets-button", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "90% bottom",
          toggleActions: "restart pause pause reverse",
          onEnter: () => ($this.isLetsButtonOpen = true),
          onLeaveBack: function () {
            $this.isLetsButtonOpen = false;
          },
          // markers: true,
        },
        duration: 0.8,
        opacity: 1,
        scale: 3.6,
        padding: "0px 0px",
        width: "9.375rem",
        height: "auto",
        y: -100,
        backgroundColor: "#faf4f2",
        cursor: "auto",
        zIndex: 3,
        ease: "power4",
      });
      gsap.from("#lets-text", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "90% bottom",
          toggleActions: "restart pause pause reverse",
        },
        duration: 0.8,
        color: "#33286f",
        ease: "power4",
      });
      gsap.from(".lets-logo-path", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "90% bottom",
          toggleActions: "restart pause pause reverse",
        },
        duration: 0.8,
        fill: "#ed2a58",
        ease: "power4",
      });
      gsap.from("#footer__cover", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "90% bottom",
          toggleActions: "restart pause pause reverse",
          //   markers: true,
        },
        duration: 0.8,
        visibility: "visible",
        backgroundColor: "#faf4f2",
        opacity: 1,
        ease: "power4",
      });
    },
    gsapOnLoadSmall() {
      let $this = this;
      gsap.set("#lets-button", { clearProps: "all" });
      gsap.set("#lets-text", { clearProps: "all" });
      gsap.set(".lets-logo-path", { clearProps: "fill" });
      gsap.set("#footer__cover", { clearProps: "all" });

      gsap.from("#lets-button", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "30% 60%",
          toggleActions: "restart pause pause reverse",
          onEnter: () => ($this.isLetsButtonOpen = true),
          onLeaveBack: function () {
            $this.isLetsButtonOpen = false;
          },
          // markers: true,
        },
        duration: 0.8,
        opacity: 1,
        scale: 3.6,
        padding: "0px 0px",
        width: "5.9375rem",
        height: "auto",
        y: -50,
        backgroundColor: "#faf4f2",
        cursor: "auto",
        zIndex: 3,
        ease: "power4",
      });
      gsap.from("#lets-text", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "30% 60%",
          toggleActions: "restart pause pause reverse",
        },
        duration: 0.8,
        color: "#33286f",
        ease: "power4",
      });
      gsap.from(".lets-logo-path", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "30% 60%",
          toggleActions: "restart pause pause reverse",
        },
        duration: 0.8,
        fill: "#ed2a58",
        ease: "power4",
      });
      gsap.from("#footer__cover", {
        scrollTrigger: {
          trigger: "#footer-main",
          start: "30% 60%",
          toggleActions: "restart pause pause reverse",
          //   markers: true,
        },
        duration: 0.8,
        visibility: "visible",
        backgroundColor: "#faf4f2",
        opacity: 1,
        ease: "power4",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  height: 58.375rem;
  background-color: $sand-color;

  @include breakpoint-down(medium) {
    height: 43.75rem;
  }

  &__cover {
    visibility: hidden;
    opacity: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $transparent-color;
    z-index: 1;
    padding-top: 12.5rem;

    @include breakpoint-down(medium) {
      padding-top: 5rem;
    }

    @include breakpoint-down(small) {
      padding-top: 7.5rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7.875rem;

    @include breakpoint-down(medium) {
      padding-top: 0.625rem;
    }
  }

  &__title {
    width: 61.375rem;
    font-size: 3.75rem;
    font-weight: bold;
    line-height: 1.18;
    letter-spacing: -0.75px;
    text-align: center;
    color: $purple-darker-color;

    @include breakpoint-down(medium) {
      font-size: 2rem;
      max-width: 80%;
    }
  }

  &__button {
    display: flex;
    justify-content: space-around;
    padding: 0 1.875rem;
    align-items: center;
    position: relative;
    margin-top: 4.375rem;
    width: 14.3125rem;
    height: 4.5rem;
    opacity: 1;
    border: 0;
    border-radius: 0.6875rem;
    cursor: pointer;
    background-color: $red-color;

    p {
      font-size: 2.375rem;
      font-weight: 500;
      line-height: 1.24;
      letter-spacing: -0.48px;
      text-align: center;
      // height: 9rem;
      padding: 0;
      margin-bottom: 0;
      color: $white-color;

      @include breakpoint-down(medium) {
        font-size: 1.5rem;
      }

      @include breakpoint-down(small) {
        font-size: auto;
      }
    }

    div {
      padding: 0;
      margin-bottom: 0;
      svg {
        width: 3.125rem;
        height: 3.125rem;
        @include breakpoint-down(medium) {
          width: 2.1875rem;
        }
        path {
          fill: $white-color;
        }
      }
    }

    @include breakpoint-down(medium) {
      width: 10.625rem;
      height: 3.4375rem;
    }

    &--transition {
      transition: background-color 0.5s ease-in-out;
    }

    &--open {
      &:hover {
        background-color: $purple-darker-color !important;
        transition: background-color 0.5s ease-in-out !important;
      }

      &:focus {
        background-color: $purple-darker-color !important;
        transition: background-color 0.5s ease-in-out !important;
      }
    }

    &--close {
      &:hover {
        background-color: $transparent-color !important;
      }
    }
  }

  &__links {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15.625rem;
    a {
      display: block;

      &:not(:last-child) {
        margin-right: 2.5625rem;
      }
    }

    @include breakpoint-down(medium) {
      display: none;
    }
  }

  &__link {
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.1px;
    text-align: center;
    color: $purple-darker-color;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: $red-color;
      transition: color 0.5s ease-in-out;
    }
  }

  &__socials {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 4.375rem;

    @include breakpoint-down(medium) {
      margin-top: 6.25rem;
      flex-direction: column;
    }
  }

  &__social {
    display: flex;
    justify-content: space-between;
    width: 25%;
    padding-top: 0.625rem;
    border-top: 1px solid $purple-darker-color;

    @include breakpoint-down(medium) {
      width: 80%;
      &:not(:last-child) {
        margin-bottom: 3.75rem;
      }
    }

    &-name {
      font-size: 1.8125rem;
      line-height: 1.52;
      letter-spacing: 0.18px;
      text-align: left;
      color: $purple-darker-color;

      @include breakpoint-down(medium) {
        font-size: 1.5rem;
      }
    }

    &-icon {
      @include breakpoint-down(medium) {
        svg {
          width: 1.5rem;
        }
      }
      &:hover {
        path {
          fill: $red-color;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
