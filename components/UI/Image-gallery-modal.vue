<template>
  <div class="image-gallery" :class="classBgModal" id="modal-gallery">
    <div class="image-gallery__window" id="modal__window-gallery">
      <picture id="picture-slider-gallery-modal">
        <source media="(max-width: 991px)" :srcset="image[image_counter].medium" />
        <source media="(max-width: 575px)" :srcset="image[image_counter].small" />
        <img :src="image[image_counter].large" alt="Image Gallery" class="image-gallery__img" />
      </picture>
      <button @click="closeModal()" class="image-gallery__close-button">&times;</button>
      <button
        v-show="!isOnlyOneImage"
        @click="previousImage()"
        class="image-gallery__left-button"
        id="image-gallery__left-button"
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
            transform="translate(56.155 -3.375) rotate(90)"
            fill="#fff"
          />
        </svg>
      </button>
      <button
        v-show="!isOnlyOneImage"
        @click="nextImage()"
        class="image-gallery__right-button"
        id="image-gallery__right-button"
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
            d="M0,26.39A26.39,26.39,0,1,1,26.39,52.78,26.386,26.386,0,0,1,0,26.39ZM36.679,31.9a2.458,2.458,0,0,0,3.464,0,2.419,2.419,0,0,0,.71-1.726,2.461,2.461,0,0,0-.723-1.738L28.166,16.507a2.446,2.446,0,0,0-3.375.076l-12.142,12.1a2.449,2.449,0,0,0,3.464,3.464L26.4,21.759Z"
            transform="translate(52.78) rotate(90)"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_counter: 0,
      isOnlyOneImage: true,
      classBgModal: "image-gallery--transparent",
      image: [
        {
          small: "",
          medium: "",
          large: "",
        },
      ],
    };
  },
  methods: {
    openModal(imgs) {
      this.image = imgs;
      this.classBgModal = "image-gallery--secondary";
      gsap.to("#image-gallery__left-button", {
        duration: 0,
        display: "block",
      });
      gsap.to("#image-gallery__right-button", {
        duration: 0,
        display: "block",
      });

      gsap.to("#modal-gallery", {
        duration: 0.6,
        visibility: "visible",
        opacity: 1,
        ease: "power4",
      });

      gsap.from("#modal__window-gallery", {
        duration: 0.6,
        y: 300,
        ease: "back",
      });

      if (this.image.length === 1) {
        this.isOnlyOneImage = true;
        gsap.to("#image-gallery__left-button", {
          duration: 0,
          display: "none",
        });
        gsap.to("#image-gallery__right-button", {
          duration: 0,
          display: "none",
        });
      } else {
        this.isOnlyOneImage = false;
      }
    },
    closeModal() {
      let $this = this;
      this.classBgModal = "image-gallery--transparent";
      let TimlineModalWindow = gsap.timeline({
        onComplete: $this.resetCounter(),
      });
      TimlineModalWindow.to("#modal__window-gallery", {
        duration: 0.6,
        opacity: 0,
        y: 300,
        ease: "power4",
      })
        .to("#modal__window-gallery", {
          duration: 0,
          visibility: "hidden",
        })
        .set("#modal__window-gallery", { clearProps: "all" })
        .to("#image-gallery__left-button", {
          duration: 0,
          display: "none",
        })
        .to("#image-gallery__right-button", {
          duration: 0,
          display: "none",
        });

      gsap.to("#modal-gallery", {
        delay: 0.6,
        duration: 1,
        visibility: "hidden",
        opacity: 0,
        ease: "power4",
      });
    },
    nextImage() {
      let imgArrayLength = this.image.length;

      if (imgArrayLength - 1 === this.image_counter) {
        this.image_counter = 0;
      } else {
        this.image_counter++;
      }

      let TimlineModalNext = gsap.timeline();
      TimlineModalNext.to("#picture-slider-gallery-modal", {
        duration: 0.1,
        filter: "blur(4px)",
        ease: "power4",
      })
        .to("#picture-slider-gallery-modal", {
          duration: 0.1,
          filter: "blur(4px)",
          ease: "power4",
        })
        .set("#picture-slider-gallery-modal", { clearProps: "all" });
    },
    previousImage() {
      let imgArrayLength = this.image.length;

      if (this.image_counter === 0) {
        this.image_counter = 2;
      } else {
        this.image_counter--;
      }

      let TimlineModalPrevious = gsap.timeline();
      TimlineModalPrevious.to("#picture-slider-gallery-modal", {
        duration: 0.1,
        opacity: 0,
        filter: "blur(4px)",
        ease: "power4",
      })
        .to("#picture-slider-gallery-modal", {
          duration: 0.1,
          opacity: 1,
          filter: "blur(4px)",
          ease: "power4",
        })
        .set("#picture-slider-gallery-modal", { clearProps: "all" });
    },
    resetCounter() {
      this.image_counter = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-gallery {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  &--secondary {
    background: $light-pink-background-color;
  }

  &--transparent {
    background: $transparent-color;
  }

  &__window {
    position: relative;
    overflow: hidden;
    margin: auto;
    width: 100%;
    min-height: 600px;
    height: 100%;
    outline: 0;
  }

  &__img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
  }

  &__close-button {
    position: absolute;
    top: -0.4%;
    right: 1%;
    font-size: 3.75rem;
    border: 0;
    cursor: pointer;
    background-color: $transparent-color;
    color: $white-color;
    transition: color 0.5s ease-in-out;

    &:hover {
      color: $red-color;
    }
  }

  &__left-button {
    position: absolute;
    top: 50%;
    left: 1%;
    cursor: pointer;
    border: 0;
    background-color: $transparent-color;
    transition: all 0.5s ease-in-out;

    svg {
      path {
        transition: all 0.5s ease-in-out;
        fill: $white-color;
      }
    }

    &:hover {
      svg {
        path {
          transition: all 0.5s ease-in-out;
          fill: $red-color;
        }
      }
    }
  }

  &__right-button {
    position: absolute;
    top: 50%;
    right: 1%;
    cursor: pointer;
    border: 0;
    background-color: $transparent-color;
    transition: all 0.5s ease-in-out;

    svg {
      path {
        transition: all 0.5s ease-in-out;
        fill: $white-color;
      }
    }

    &:hover {
      svg {
        path {
          transition: all 0.5s ease-in-out;
          fill: $red-color;
        }
      }
    }
  }
}
</style>