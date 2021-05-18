<template>
  <div class="video-gallery" :class="classBgModal" id="modal-video-gallery">
    <div class="video-gallery__window" id="modal__window-video-gallery">
      <div
        class="video-gallery__play-button"
        :class="[!isPlayed ? 'video-gallery--shown' : 'video-gallery--hidden']"
      >
        <svg
          @click="playVideo"
          id="svg-play-button"
          xmlns="http://www.w3.org/2000/svg"
          width="141.487"
          height="141.487"
          viewBox="0 0 141.487 141.487"
        >
          <path
            id="Icon_awesome-play-circle"
            data-name="Icon awesome-play-circle"
            d="M71.306.563A70.744,70.744,0,1,0,142.05,71.306,70.731,70.731,0,0,0,71.306.563Zm33,77.59L54.105,106.963a6.858,6.858,0,0,1-10.184-5.99V41.639a6.862,6.862,0,0,1,10.184-5.99L104.31,66.171A6.868,6.868,0,0,1,104.31,78.152Z"
            transform="translate(-0.563 -0.563)"
            fill="#fff"
          />
        </svg>
      </div>
      <video class="video-gallery__player" ref="video-player" id="video-player">
        <source :src="videoURL" type="video/mp4" />Your browser does not support HTML video.
      </video>
      <button @click="closeModal()" class="video-gallery__close-button">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let video = this.$refs["video-player"];
    video.addEventListener("pause", this.showPlayIcon);
  },
  destroyed() {
    window.removeEventListener("pause", this.showPlayIcon);
  },
  data() {
    return {
      classBgModal: "video-gallery--transparent",
      isPlayed: false,
      videoURL: "",
    };
  },
  methods: {
    resetPlayer() {
      let video = this.$refs["video-player"];
      video.pause();
      this.isPlayed = false;
      video.removeAttribute("controls");
    },
    showPlayIcon() {
      let video = this.$refs["video-player"];
      this.isPlayed = false;
      video.removeAttribute("controls");
    },
    playVideo() {
      let video = this.$refs["video-player"];
      if (!this.isPlayed) {
        video.play();
        this.isPlayed = true;
        video.setAttribute("controls", "controls");
      } else {
        video.pause();
        this.isPlayed = false;
        video.removeAttribute("controls");
      }
    },
    openModal(vid) {
      let video = this.$refs["video-player"];
      this.videoURL = vid;
      video.load();
      this.classBgModal = "video-gallery--secondary";

      gsap.to("#svg-play-button", {
        duration: 0,
        display: "block",
      });

      gsap.to("#modal-video-gallery", {
        duration: 0.6,
        visibility: "visible",
        opacity: 1,
        ease: "power4",
      });

      gsap.from("#modal__window-video-gallery", {
        duration: 0.6,
        y: 300,
        ease: "back",
      });
    },
    closeModal() {
      let $this = this;
      this.classBgModal = "video-gallery--transparent";
      let TimlineModalWindow = gsap.timeline({
        onComplete: $this.resetPlayer(),
      });
      TimlineModalWindow.to("#modal__window-video-gallery", {
        duration: 0.6,
        opacity: 0,
        y: 300,
        ease: "power4",
      })
        .to("#modal__window-video-gallery", {
          duration: 0,
          visibility: "hidden",
        })
        .set("#modal__window-video-gallery", { clearProps: "all" })
        .to("#svg-play-button", {
          duration: 0,
          display: "none",
        });

      gsap.to("#modal-video-gallery", {
        delay: 0.6,
        duration: 1,
        visibility: "hidden",
        opacity: 0,
        ease: "power4",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-gallery {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  &--hidden {
    display: none !important;
  }

  &--shown {
    display: flex !important;
  }

  &__player {
    width: 100%;
    height: 100%;
  }

  &__play-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $transparent-color;

    svg {
      path {
        transition: all 0.5s ease-in-out;
        fill: $white-color;
      }
      &:hover {
        cursor: pointer;
        path {
          transition: all 0.5s ease-in-out;
          fill: $red-color;
        }
      }
    }

    @include breakpoint-down(medium) {
      svg {
        width: 90px;
      }
    }

    @include breakpoint-down(xsmall) {
      svg {
        width: 70px;
      }
    }
  }

  &--secondary {
    background: $black-color;
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
    z-index: 6;
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
}
</style>