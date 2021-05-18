<template>
  <section class="the-play" id="the-play">
    <div class="container">
      <div class="the-play__main">
        <div class="the-play__img" id="the-play__img">
          <button class="the-play__btn the-play__btn--red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.449"
              height="38.23"
              viewBox="0 0 33.449 38.23"
            >
              <path
                id="Icon_awesome-ribbon"
                data-name="Icon awesome-ribbon"
                d="M.455,33.175a1.785,1.785,0,0,0,.336,2.666l5.137,2.083a1.8,1.8,0,0,0,2.337-.284l6.855-7.609L9.206,23.468.455,33.175Zm32.541,0S11.193,8.938,10.939,8.527a11.8,11.8,0,0,1,5.787-1.337,11.8,11.8,0,0,1,5.787,1.337c-.246.418-4.181,4.824-4.181,4.824L24.237,19.9l2.554-2.837a7.306,7.306,0,0,0,.851-8.624L24.379,2.949a4.234,4.234,0,0,0-1.254-1.344c-3.039-2.061-9.513-2.218-12.8,0A4.234,4.234,0,0,0,9.072,2.949L5.816,8.415a7.366,7.366,0,0,0,.859,8.662L25.2,37.633a1.8,1.8,0,0,0,2.337.284l5.137-2.083A1.774,1.774,0,0,0,33,33.175Z"
                transform="translate(-0.004 0)"
                fill="#fff"
              />
            </svg>
          </button>
          <nuxt-link to="/play-your-part">
            <button class="the-play__btn the-play__btn--white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47.044"
                height="31.363"
                viewBox="0 0 47.044 31.363"
              >
                <path
                  id="Icon_awesome-ticket-alt"
                  data-name="Icon awesome-ticket-alt"
                  d="M10.454,12.341H36.59V28.022H10.454Zm32.67,7.841a3.92,3.92,0,0,0,3.92,3.92v7.841a3.92,3.92,0,0,1-3.92,3.92H3.92A3.92,3.92,0,0,1,0,31.943V24.1a3.92,3.92,0,0,0,3.92-3.92A3.92,3.92,0,0,0,0,16.261V8.42A3.92,3.92,0,0,1,3.92,4.5h39.2a3.92,3.92,0,0,1,3.92,3.92v7.841A3.92,3.92,0,0,0,43.124,20.181ZM39.2,11.687a1.96,1.96,0,0,0-1.96-1.96H9.8a1.96,1.96,0,0,0-1.96,1.96V28.676a1.96,1.96,0,0,0,1.96,1.96H37.243a1.96,1.96,0,0,0,1.96-1.96Z"
                  transform="translate(0 -4.5)"
                  fill="#ed2a58"
                />
              </svg>
            </button>
          </nuxt-link>
        </div>
        <div class="the-play__text" id="the-play__text">
          <h1 class="the-play__title">Detska Nasmevka za ovaj svet</h1>
          <h3 class="the-play__info">
            Saturday, 15 Feb 2020 6:30PM Till Late GRAND NERET RECEPTION 19
            SALICKI AVENUE EPPING VIC 3076, AUS
          </h3>
          <p class="the-play__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            ligula ex. Nunc sit amet blandit sem. Nulla vitae elit eleifend,
            accumsan risus vel, rhoncus tellus. Nulla facilisi. Phasellus justo
            tortor, porta at nibh eu, consectetur condimentum ipsum. Sed
            consequat, sapien a hendrerit posuere, mauris erat hendrerit lacus,
            in gravida sem ligula ut nisi. Curabitur nulla purus, dignissim eget
            sem in, pellentesque scelerisque dolor.
          </p>
        </div>
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
      let $this = this;
      gsap.from("#the-play__text", {
        scrollTrigger: {
          trigger: "#the-play",
          start: "top center",
          // markers: true,
        },
        duration: 3,
        opacity: 0,
        y: 45,
        ease: "back",
      });

      gsap.from("#the-play__img", {
        scrollTrigger: {
          trigger: "#the-play",
          start: "top center",
          // markers: true,
        },
        duration: 1,
        opacity: 0,
        filter: "blur(4px)",
        ease: "back",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.the-play {
  background-color: $light-pink-background-color;
  &__main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 600px;
    height: 100vh;
    max-height: 904px;
    @include breakpoint-down(medium) {
      flex-direction: column;
      max-height: 100vh;
    }
  }
  &__img {
    position: relative;
    flex: 1.08;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1598790232/pwb-website-2020/the-play-img");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;

    @include breakpoint-down(small) {
      flex: auto;
      height: 30%;
    }

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1598790232/pwb-website-2020/the-play-img");
    }
  }
  &__text {
    flex: 0.92;
    padding-left: 5%;
    padding-right: 3%;
    padding-top: 3%;
    @include breakpoint-down(small) {
      flex: auto;
      height: 70%;
      padding: 3% 5%;
    }
  }

  &__title {
    max-width: 31.625rem;
    font-weight: bold;
    line-height: 1.07;
    letter-spacing: -1px;
    text-align: left;
    color: $purple-darker-color;

    @include breakpoint-down(large) {
      font-size: 1.875rem;
    }

    @media (max-width: 100em) and (max-height: 43.75em) {
      font-size: 1.875rem;
    }
  }

  &__info {
    max-width: 34.8125rem;
    font-size: 1.875rem;
    font-weight: 300;
    line-height: 1.37;
    margin: 3.75rem 0;
    letter-spacing: -0.54px;
    text-align: left;
    color: $purple-darker-color;

    @include breakpoint-down(large) {
      font-size: 1.125rem;
      margin: 0.9375rem 0;
    }

    @media (max-width: 100em) and (max-height: 43.75em) {
      font-size: 1.125rem;
      margin: 0.9375rem 0;
    }
  }

  &__description {
    max-width: 46.125rem;
    font-size: 1.125rem;
    line-height: 1.56;
    text-align: left;
    color: $purple-darker-color;

    @include breakpoint-down(large) {
      font-size: 0.875rem;
    }

    @media (max-width: 100em) and (max-height: 43.75em) {
      font-size: 0.875rem;
    }
  }

  &__btn {
    position: absolute;
    width: 79px;
    height: 79px;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;

    @include breakpoint-down(medium) {
      width: 50px;
      height: 50px;

      svg {
        width: 45%;
      }
    }

    &--red {
      top: 60px;
      left: 6%;
      background-color: $red-color;

      @include breakpoint-down(medium) {
        top: 20px;
        left: 5%;
      }

      &:hover {
        background-color: $sand-color;
        svg {
          path {
            transition: all 0.5s ease-in-out;
            fill: $purple-color;
          }
        }
      }
    }

    &--white {
      top: 170px;
      left: 6%;
      background-color: $white-color;

      @include breakpoint-down(medium) {
        top: 90px;
        left: 5%;
      }

      &:hover {
        background-color: $sand-color;
        svg {
          path {
            transition: all 0.5s ease-in-out;
            fill: $purple-color;
          }
        }
      }
    }
  }
}
</style>
