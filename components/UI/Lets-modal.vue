<template>
  <div class="modal" id="modal-lets" @click.self="closeModal()">
    <div class="modal__window" id="modal__window-lets">
      <button @click="closeModal()" class="modal__close-button">&times;</button>
      <div class="modal__window-left">
        <div class="modal__window-title">
          <img src="/images/icons/heart-red-modal.svg" />
          <h1>your part</h1>
        </div>
        <button class="modal__button-options">
          <h4>Tickets</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
        <button class="modal__button-options">
          <h4>Donate</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
        <button class="modal__button-options">
          <h4>Artist Request</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
        <button class="modal__button-options">
          <h4>Sponsorship</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
        <button class="modal__button-options">
          <h4>Shop</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
      </div>
      <div class="modal__window-middle">
        <div class="modal__cercle-or">OR</div>
      </div>
      <div class="modal__window-right">
        <div class="modal__window-title">
          <img src="/images/icons/heart-red-modal.svg" />
          <h1>together</h1>
        </div>
        <p class="modal__window-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pulvinar blandit massa, eget faucibus metus euismod in. Fusce at
          libero sed lectus luctus consectetur.
          <br />
          <br />Morbi malesuada elit in metus malesuada, non mollis magna
          pharetra. Suspendisse tincidunt feugiat velit nec venenatis. Nulla
          scelerisque gravida nisi. Proin a euismod tellus. Phasellus
          ullamcorper eu mauris sit amet interdum. Nunc ornare maximus turpis,
          et pulvinar elit porttitor tincidunt.
        </p>
        <button class="modal__button-options">
          <h4>Membership</h4>
          <div>
            <svg
              id="Icon_ionic-ios-arrow-dropright"
              data-name="Icon ionic-ios-arrow-dropright"
              xmlns="http://www.w3.org/2000/svg"
              width="24.383"
              height="24.383"
              viewBox="0 0 24.383 24.383"
            >
              <path
                id="Path_6337"
                data-name="Path 6337"
                d="M14.748,10.312a1.136,1.136,0,0,1,1.6,0l5.592,5.609a1.13,1.13,0,0,1,.035,1.559l-5.51,5.527a1.129,1.129,0,1,1-1.6-1.594l4.683-4.754-4.8-4.754A1.118,1.118,0,0,1,14.748,10.312Z"
                transform="translate(-5.212 -4.474)"
                fill="#33286f"
              />
              <path
                id="Path_6338"
                data-name="Path 6338"
                d="M3.375,15.567A12.192,12.192,0,1,0,15.567,3.375,12.19,12.19,0,0,0,3.375,15.567Zm1.876,0A10.312,10.312,0,0,1,22.858,8.275,10.312,10.312,0,1,1,8.275,22.858,10.227,10.227,0,0,1,5.251,15.567Z"
                transform="translate(-3.375 -3.375)"
                fill="#33286f"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasModalBeenOpen: false
    };
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (!newValue) {
        this.closeModal();
      }
    }
  },
  methods: {
    openModal() {
      if (!this.hasModalBeenOpen) {
        gsap.to("#modal-lets", {
          duration: 1,
          visibility: "visible",
          opacity: 1,
          ease: "power4"
        });

        gsap.from("#modal__window-lets", {
          duration: 0.6,
          y: 300,
          ease: "back"
        });
        this.hasModalBeenOpen = true;
      } else {
        gsap.to("#modal-lets", {
          duration: 1,
          visibility: "visible",
          opacity: 1,
          ease: "power4"
        });

        gsap.to("#modal__window-lets", {
          duration: 0.6,
          visibility: "visible",
          opacity: 1,
          y: 0,
          ease: "back"
        });
      }
    },
    closeModal() {
      if (this.hasModalBeenOpen) {
        let TimlineModalWindow = gsap.timeline();
        TimlineModalWindow.to("#modal__window-lets", {
          duration: 0.6,
          opacity: 0,
          y: 300,
          ease: "power4"
        }).to("#modal__window-lets", {
          duration: 0,
          visibility: "hidden"
        });

        gsap.to("#modal-lets", {
          delay: 0.6,
          duration: 1,
          visibility: "hidden",
          opacity: 0,
          ease: "power4"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 3.125rem;
  background: $transparent-color;

  @include breakpoint-down(medium) {
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 62em) and (min-height: 50em) {
    padding-top: 3.125rem;
  }

  &__close-button {
    position: absolute;
    top: 0.625rem;
    right: 1.25rem;
    font-size: 2.8125rem;
    border: 0;
    cursor: pointer;
    background-color: $transparent-color;
    color: $purple-darker-color;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: $red-color;
      transition: color 0.3s ease-in-out;
    }
  }

  &__cercle-or {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.75rem;
    height: 3.75rem;
    border: 1px solid $purple-darker-color;
    border-radius: 50%;
    font-size: 1.1875rem;
    font-weight: 300;
    color: $purple-darker-color;

    @include breakpoint-down(medium) {
      width: 2.625rem;
      height: 2.625rem;
      font-size: 0.875rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      width: 1px;
      height: 15.625rem;
      background-color: $purple-darker-color;

      @include breakpoint-down(medium) {
        width: 15rem;
        height: 1px;
        top: 50%;
        left: 100%;
      }

      @include breakpoint-down(small) {
        width: 7.5rem;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      width: 1px;
      height: 15.625rem;
      background-color: $purple-darker-color;

      @include breakpoint-down(medium) {
        width: 15rem;
        height: 1px;
        top: 50%;
        left: -600%;
      }

      @include breakpoint-down(small) {
        width: 7.5rem;
        left: -300%;
      }
    }
  }

  &__window {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    margin: auto;
    width: 70%;
    min-height: 700px;
    height: 85%;
    max-height: 900px;
    border-radius: 2.625rem;
    outline: 0;
    padding: 1.875rem;
    background-color: $white-color;

    @include breakpoint-down(xlarge) {
      width: 95%;
    }

    @include breakpoint-down(medium) {
      flex-direction: column;
      height: 62.5rem;
      width: 90vw;
    }

    button:not(:last-child) {
      margin-bottom: 0.625rem;
      @include breakpoint-down(medium) {
        margin-bottom: 0.4375rem;
      }
    }

    &-paragraph {
      width: 23.125rem;
      line-height: 1.4;
      font-size: 1.125rem;
      margin-bottom: 1.875rem;
      color: $purple-darker-color;

      @include breakpoint-down(medium) {
        width: 16.1875rem;
        font-size: 0.875rem;
        margin-bottom: 1.3125rem;
      }
    }

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1.9;
    }

    &-middle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0.2;
    }

    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1.9;
    }

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.875rem;
      @include breakpoint-down(medium) {
        margin-bottom: 1.3125rem;
        img {
          width: 18%;
        }
      }

      h1 {
        margin-left: 1.25rem;
        font-size: 4.5625rem;
        line-height: 1.07;
        letter-spacing: -1px;
        color: $purple-darker-color;

        @include breakpoint-down(medium) {
          margin-left: 0.875rem;
          font-size: 3.19375rem;
        }
      }
    }
  }

  &__button-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.25rem;
    padding-right: 0.625rem;
    width: 24.5625rem;
    height: 4.8125rem;
    cursor: pointer;
    border: 1px solid $purple-darker-color;
    border-radius: 1.25rem;
    background-color: $white-color;
    color: $purple-darker-color;
    transition: all 0.3s ease-in-out;

    @include breakpoint-down(medium) {
      border-radius: 0.875rem;
      padding-left: 0.875rem;
      padding-right: 0.4375rem;
      width: 17.19375rem;
      height: 3.36875rem;
    }

    h4 {
      font-size: 2.375rem;
      font-weight: 300;
      @include breakpoint-down(medium) {
        font-size: 1.6625rem;
      }
    }

    &:hover {
      border-color: $red-color;
      color: $red-color;
      transition: all 0.3s ease-in-out;
      path {
        fill: $red-color;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
