<template>
  <div class="nav--color">
    <nav
      class="nav container"
      :class="[
        isToggle
          ? 'nav__overlay'
          : !isToggle && hasBeenOpen
          ? 'nav__overlay--hidden-animation'
          : '',
      ]"
    >
      <div class="nav__shape" id="smallShape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1084.446"
          height="531.382"
          viewBox="0 0 1084.446 531.382"
        >
          <path
            id="bigShapePathSVG"
            class="nav__shape-big"
            d="M255.909,531.382a1881.243,1881.243,0,0,0,828.537-249.373V0H0A1166.543,1166.543,0,0,0,255.909,531.382Z"
            fill="#ed2a58"
          />
          <path
            id="smallShapePathSVG"
            data-name="Subtraction 3"
            d="M1084.44,118.83H29.76C23.8,99.44,18.28,79.65,13.36,60S3.91,20,0,0H1084.44V118.83Z"
            fill="#ed2b59"
          />
        </svg>
        <h1 class="nav__shape-text" id="nav__shape-text">
          We believe that through love and connection we can become one
        </h1>
      </div>
      <div class="nav__logo">
        <nuxt-link
          class="nav__logo--hidden-medium-small"
          to="/"
          aria-describedby="logo link opens home page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_2"
            width="136.814"
            height="66.59"
            data-name="Layer 2"
            viewBox="0 0 136.814 66.59"
          >
            <g id="Layer_8" data-name="Layer 8">
              <path
                id="Path_1"
                d="M3.428 52.639L0 36.07h.741c1.223 5.981 2.973 14.284 3.125 15.73.223-1.625 2.419-11.427 3.321-15.73h.848c.893 4.232 3.1 14.418 3.25 15.712.295-1.928 2.5-11.329 3.455-15.712h.723l-3.7 16.569h-.893c-.893-4.232-3-14.284-3.223-15.73-.273 1.777-2.38 11.329-3.347 15.73z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 1"
                transform="translate(0 -3.869)"
              />
              <path
                id="Path_2"
                d="M19.62 40.4h.7v12.163h-.7zm0-5.035h.7v2.178h-.7z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 2"
                transform="translate(-2.104 -3.792)"
              />
              <path
                id="Path_3"
                d="M22.48 40.59h1.785v-3.41h.687v3.41h2.321v.634h-2.32v9.383c0 .946.187 1.678 1.268 1.678a4.232 4.232 0 0 0 .964-.089v.6a3.2 3.2 0 0 1-1.08.161c-1.1 0-1.785-.455-1.785-2.214V41.26h-1.786z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 3"
                transform="translate(-2.411 -3.988)"
              />
              <path
                id="Path_4"
                d="M30.723 35.23v7.276a3.08 3.08 0 0 1 3.16-2.3c1.527 0 3.053.795 3.053 3.741v8.615h-.687V44.14c0-2.089-.714-3.259-2.473-3.259-2.178 0-3.026 1.785-3.026 4.41v7.258H30V35.23z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 4"
                transform="translate(-3.218 -3.778)"
              />
              <path
                id="Path_5"
                d="M48.311 47c0 4.41-1.437 6.356-3.821 6.356S40.66 51.468 40.66 47s1.661-6.2 3.875-6.2c2.347 0 3.776 1.8 3.776 6.2zm-6.937 0c0 3.982 1.205 5.7 3.1 5.7 2.089 0 3.107-1.919 3.107-5.7s-1.062-5.544-3.116-5.544c-1.777.009-3.08 1.5-3.08 5.571z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 5"
                transform="translate(-4.361 -4.376)"
              />
              <path
                id="Path_6"
                d="M58.928 50.079v3.089h-.67c0-.384-.08-1.509-.071-2.25a2.973 2.973 0 0 1-3.1 2.455c-1.419 0-3-.589-3-3.723V41h.713v8.517c0 1.785.473 3.16 2.4 3.16 1.705 0 2.982-1.116 2.982-4.553V41h.705z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 6"
                transform="translate(-5.587 -4.397)"
              />
              <path
                id="Path_7"
                d="M61.64 40.59h1.785v-3.41h.687v3.41h2.312v.634H64.1v9.383c0 .946.187 1.678 1.268 1.678a4.232 4.232 0 0 0 .982-.089v.6a3.2 3.2 0 0 1-1.08.161c-1.1 0-1.785-.455-1.785-2.214V41.26H61.7z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 7"
                transform="translate(-6.611 -3.988)"
              />
              <path
                id="Path_8"
                d="M.09 5.24h7.142c3.928 0 6.937 2.241 6.937 6.642s-2.794 6.83-7.294 6.83H3.741v9.427H.09zm3.651 10.5h2.786c2.544 0 3.928-1.143 3.928-3.875 0-2.419-1.437-3.669-3.741-3.669H3.741z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 8"
                transform="translate(-.01 -.562)"
              />
              <path
                id="Path_9"
                d="M19.29 5.24h3.651v19.81h8.927l-.42 3.089H19.29z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 9"
                transform="translate(-2.069 -.562)"
              />
              <path
                id="Path_10"
                d="M40.375 21.9l-1.545 6.249h-3.66c.312-.893 5.723-21.846 6.071-22.9h4.714l6.249 22.9h-3.795L46.82 21.9zm5.74-3.134c-1.277-4.982-2.169-8.32-2.58-10.356h-.071c-.411 2.268-1.3 5.919-2.428 10.356z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 10"
                transform="translate(-3.772 -.563)"
              />
              <path
                id="Path_11"
                d="M58.265 28.139v-8.517a1.411 1.411 0 0 0-.161-.678L51.73 5.24h4.1c1.527 3.625 3.571 8.454 4.4 10.659 1.125-2.839 3.017-7.222 4.464-10.659h3.839l-6.472 13.7a1.384 1.384 0 0 0-.143.678v8.517z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 11"
                transform="translate(-5.548 -.562)"
              />
              <path
                id="Path_12"
                d="M2.22 59.39h2.232c2.027 0 2.776 1.1 2.776 2.875v.625c0 1.875-.554 2.455-1.241 2.678.75.223 1.518.893 1.518 2.678v.982c0 2.348-.777 3.491-3.044 3.491H2.22zm2.214 5.7c1.205 0 1.571-.509 1.571-2.125v-.616c0-1.232-.455-1.875-1.643-1.875H3.47v4.607zm-.964 6.58h.893c1.491 0 1.866-.723 1.866-2.428v-.893c.009-1.527-.545-2.169-1.83-2.169h-.893z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 12"
                transform="translate(-.238 -6.37)"
              />
              <path
                id="Path_13"
                d="M14.8 65.8v4.321c0 2.205-1.036 3.16-2.6 3.16s-2.544-.893-2.544-3.1v-4.4c0-1.9.982-2.964 2.607-2.964S14.8 63.927 14.8 65.8zm-3.848 0v4.464c0 1.169.4 1.91 1.277 1.91s1.3-.58 1.3-1.946v-4.462c0-1.053-.357-1.785-1.277-1.785s-1.3.643-1.3 1.8z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 13"
                transform="translate(-1.036 -6.738)"
              />
              <path
                id="Path_14"
                d="M22.249 70.463v2.678h-1.2a10.294 10.294 0 0 1-.049-1.08 1.669 1.669 0 0 1-1.786 1.239c-.812 0-1.964-.295-1.964-2.58V63h1.277v7.392c0 1.268.339 1.785 1.125 1.785S21 71.74 21 69.66V63h1.277z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 14"
                transform="translate(-1.85 -6.757)"
              />
              <path
                id="Path_15"
                d="M25 66.06v-3.08h1.214a8.794 8.794 0 0 1 .054 1.036 1.785 1.785 0 0 1 1.857-1.2c1.08 0 1.982.607 1.982 2.464v7.856H28.8v-7.603c0-1-.33-1.536-1.107-1.536s-1.419.429-1.419 2.473v6.66H25z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 15"
                transform="translate(-2.681 -6.737)"
              />
              <path
                id="Path_16"
                d="M37.65 58.725v13.962h-1.2c0-.179-.054-.741-.054-1.009a1.723 1.723 0 0 1-1.785 1.169c-1.687 0-2.125-1.33-2.125-3.276v-4.2c0-1.785.723-3 2.277-3a1.678 1.678 0 0 1 1.589.768V58.68zm-3.812 6.722V69.6c0 1.375.339 2.071 1.187 2.071 1.116 0 1.384-1.08 1.384-2.535v-3.385c0-1.125-.116-2.2-1.339-2.2-.911.003-1.232.771-1.232 1.896z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 16"
                transform="translate(-3.485 -6.294)"
              />
              <path
                id="Path_17"
                d="M44.757 71.45v1.678h-1.152a6.668 6.668 0 0 1-.1-.839 1.616 1.616 0 0 1-1.661 1c-1.455 0-2.027-1.277-2.027-2.848v-.179c0-2.25 1.366-3.1 3.169-3.1h.491v-1.676c0-.946-.17-1.562-1.009-1.562s-1.062.634-1.062 1.464v.268h-1.274v-.277c0-1.4.554-2.589 2.375-2.589s2.25 1.116 2.25 2.58zM43.5 68.209h-.536c-1.205 0-1.9.509-1.9 2.027v.17c0 .946.286 1.732 1.116 1.732.991 0 1.321-.812 1.321-2.366z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 17"
                transform="translate(-4.271 -6.734)"
              />
              <path
                id="Path_18"
                d="M47.51 66.439v-3.455h1.223c0 .286.045.893.045 1.571a2.187 2.187 0 0 1 2.116-1.705v1.58c-1.277 0-2.089.839-2.089 2.616v6.1H47.51z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 18"
                transform="translate(-5.096 -6.741)"
              />
              <path
                id="Path_19"
                d="M52.46 62.542h1.277v10.151H52.46zm0-3.812h1.286v2.027h-1.277z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 19"
                transform="translate(-5.626 -6.299)"
              />
              <path
                id="Path_20"
                d="M56.979 68.293v1.7c0 1.062.205 2.187 1.259 2.187s1.2-.795 1.2-1.785V70.3h1.259v.08c0 1.205-.286 2.946-2.455 2.946-2.009 0-2.518-1.339-2.518-3.4V66c0-1.571.562-3.178 2.544-3.178s2.455 1.446 2.455 3.187v2.285zm2.5-1.062v-1.322c0-.946-.134-1.982-1.223-1.982s-1.268.893-1.268 1.991v1.312z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 20"
                transform="translate(-5.976 -6.738)"
              />
              <path
                id="Path_21"
                d="M63.848 70.123v.446c0 1.071.437 1.589 1.187 1.589s1.143-.518 1.143-1.509-.277-1.509-1.437-2.268c-1.348-.893-1.973-1.607-1.973-3s.678-2.562 2.312-2.562c1.785 0 2.277 1.161 2.277 2.616v.473h-1.25v-.545c0-.893-.25-1.437-1.045-1.437s-1.009.491-1.009 1.339.259 1.214 1.294 1.91c1.428.946 2.152 1.643 2.152 3.321 0 1.786-.795 2.8-2.5 2.8-1.919 0-2.419-1.294-2.419-2.678v-.5z"
                class="cls-1"
                :class="[isThePlays ? 'cls-1-white' : '']"
                data-name="Path 21"
                transform="translate(-6.712 -6.738)"
              />
              <path
                id="Path_22"
                d="M98.66 0a20.319 20.319 0 0 0-20.31 20.328v5.946a35.9 35.9 0 0 0 17.328 5.356 35.915 35.915 0 0 0 22.8-6.785A20.328 20.328 0 0 0 98.66 0zm-.089 28.3a5.258 5.258 0 1 1 5.258-5.258 5.258 5.258 0 0 1-5.258 5.258z"
                class="cls-2"
                :class="[isThePlays ? 'cls-2-white' : '']"
                data-name="Path 22"
                transform="translate(-8.403)"
              />
              <path
                id="Path_23"
                d="M94.732 44.992a58.029 58.029 0 0 1-7.687 25.542h-7.624a1.071 1.071 0 0 1-1.071-1.071V37.1a35.96 35.96 0 0 1 16.382 7.892z"
                class="cls-2"
                :class="[isThePlays ? 'cls-2-white' : '']"
                data-name="Path 23"
                transform="translate(-8.403 -3.979)"
              />
              <path
                id="Path_24"
                d="M128.494 29.09h-.08A58.653 58.653 0 0 1 111.88 42.4a36.183 36.183 0 0 1 1.893 27.273h14.748a20.292 20.292 0 0 0 0-40.584z"
                class="cls-2"
                :class="[isThePlays ? 'cls-2-white' : '']"
                data-name="Path 24"
                transform="translate(-11.999 -3.12)"
              />
              <path
                id="Path_25"
                d="M108.854 72.48H91.66a57.975 57.975 0 0 0 11.722-17.23 35.879 35.879 0 0 1 5.472 17.23z"
                class="cls-2"
                :class="[isThePlays ? 'cls-2-white' : '']"
                data-name="Path 25"
                transform="translate(-9.831 -5.926)"
              />
            </g>
          </svg>
        </nuxt-link>
      </div>
      <div class="nav__toggle">
        <button
          @click="
            isToggle = !isToggle;
            hasBeenOpen = true;
          "
          class="nav__hamburger-button"
          :class="[isToggle ? 'nav--open' : '']"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        class="nav__menu"
        :class="[
          isToggle
            ? 'nav__menu--small-appearance-medium-down'
            : 'nav__menu--hidden-medium-down',
        ]"
      >
        <nuxt-link
          class="nav__item-link"
          :class="[isExperiences ? 'link-active' : '']"
          to="/experiences"
          >Experiences</nuxt-link
        >
        <nuxt-link
          class="nav__item-link"
          :class="[isThePlays ? 'link-active' : '']"
          to="/the-plays"
          >ThePlays</nuxt-link
        >
        <nuxt-link
          class="nav__item-link"
          :class="[isPlayYourPart ? 'link-active' : '']"
          to="/play-your-part"
          >Play your Part</nuxt-link
        >
        <nuxt-link
          class="nav__item-link"
          :class="[isStory ? 'link-active' : '']"
          to="/story"
          >Story</nuxt-link
        >
        <nuxt-link
          class="nav__item-link"
          :class="[isLatest ? 'link-active' : '']"
          to="/latest"
          >Latest</nuxt-link
        >
        <nuxt-link to="/" aria-describedby="Together">
          <div class="nav__item-button" id="nav__item-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.325"
              height="24.217"
              viewBox="0 0 24.325 24.217"
            >
              <title>Together</title>
              <g
                id="Group_115"
                data-name="Group 115"
                transform="translate(0 0)"
              >
                <path
                  id="Path_51"
                  data-name="Path 51"
                  d="M978.919,1280.475a7.4,7.4,0,0,0-7.391,7.4v2.163a13.127,13.127,0,0,0,14.6-.512,7.4,7.4,0,0,0-7.21-9.048Zm-.04,10.3a1.914,1.914,0,1,1,1.915-1.914A1.914,1.914,0,0,1,978.879,1290.771Z"
                  transform="translate(-971.528 -1280.475)"
                  fill="#ed2a58"
                />
                <path
                  id="Path_52"
                  data-name="Path 52"
                  d="M977.489,1321.041a21.1,21.1,0,0,1-2.8,9.294h-2.774a.39.39,0,0,1-.39-.39V1318.17A13.087,13.087,0,0,1,977.489,1321.041Z"
                  transform="translate(-971.528 -1306.118)"
                  fill="#ed2a58"
                />
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M1011.639,1310.029h-.028a21.343,21.343,0,0,1-6.018,4.845,13.165,13.165,0,0,1,.686,9.922h5.368a7.384,7.384,0,0,0-.007-14.767Z"
                  transform="translate(-994.702 -1300.58)"
                  fill="#ed2a58"
                />
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M991.3,1342.88h-6.255a21.1,21.1,0,0,0,4.265-6.268A13.056,13.056,0,0,1,991.3,1342.88Z"
                  transform="translate(-980.725 -1318.664)"
                  fill="#ed2a58"
                />
              </g>
            </svg>
            <div>Together</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/" aria-describedby="Shopping Cart">
          <div class="nav__item-shopping-card" id="nav__item-shopping-card">
            <div class="nav__item-shopping-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.37"
                height="18.995"
                viewBox="0 0 21.37 18.995"
              >
                <title>Shopping Cart</title>
                <path
                  id="Icon_awesome-shopping-cart"
                  data-name="Icon awesome-shopping-cart"
                  d="M19.594,11.179l1.754-7.717a.89.89,0,0,0-.868-1.088H5.907L5.567.712A.89.89,0,0,0,4.694,0H.89A.89.89,0,0,0,0,.89v.594a.89.89,0,0,0,.89.89H3.483L6.089,15.116a2.078,2.078,0,1,0,2.487.318h7.778a2.077,2.077,0,1,0,2.36-.386l.2-.9a.89.89,0,0,0-.868-1.088H8.092l-.243-1.187H18.725A.89.89,0,0,0,19.594,11.179Z"
                  fill="#faebec"
                />
              </svg>
            </div>
            <div class="nav__item-shopping-card-badge">3</div>
          </div>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
let DELAY_MAIN_TEXT = 1.5;
let DEBOUNCING_XLARGE = false;
let DEBOUNCING_LARGE = false;
let DEBOUNCING_MEDIUM = false;
let DEBOUNCING_SMALL = false;

export default {
  data() {
    return {
      isToggle: false,
      hasBeenOpen: false,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.onResize);
    }
  },
  mounted() {
    gsap.registerPlugin(MorphSVGPlugin);
    if (this.isHome) {
      this.gsapOnLoadHome();
    } else {
      this.gsapOnLoadTheRest();
    }

    if (window.innerWidth <= 992) {
      DELAY_MAIN_TEXT = 0;
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    onResize() {
      if (this.isHome) {
        if (window.innerWidth > 1469) {
          if (!DEBOUNCING_XLARGE) {
            gsap.set("#smallShapePathSVG", {
              clearProps: "all",
            });
            gsap.to("#smallShapePathSVG", {
              duration: 6,
              morphSVG: "#bigShapePathSVG",
              transform: "translate(0, 0)",
              ease: "power4",
            });
            DEBOUNCING_XLARGE = true;
            DEBOUNCING_LARGE = false;
            DEBOUNCING_MEDIUM = false;
            DEBOUNCING_SMALL = false;
          }
        } else if (window.innerWidth <= 1469 && window.innerWidth > 991) {
          if (!DEBOUNCING_LARGE) {
            gsap.set("#smallShapePathSVG", {
              clearProps: "all",
            });
            gsap.to("#smallShapePathSVG", {
              duration: 6,
              morphSVG: "#bigShapePathSVG",
              transform: "translate(0, -5.3125rem)",
              ease: "power4",
            });
            DEBOUNCING_XLARGE = false;
            DEBOUNCING_LARGE = true;
            DEBOUNCING_MEDIUM = false;
            DEBOUNCING_SMALL = false;
          }
        } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
          if (!DEBOUNCING_MEDIUM) {
            gsap.set("#smallShapePathSVG", {
              clearProps: "all",
            });
            gsap.to("#smallShapePathSVG", {
              duration: 6,
              morphSVG: "#bigShapePathSVG",
              transform: "translate(0, 0)",
              ease: "power4",
            });
            DEBOUNCING_XLARGE = false;
            DEBOUNCING_LARGE = false;
            DEBOUNCING_MEDIUM = true;
            DEBOUNCING_SMALL = false;
          }
        } else if (window.innerWidth <= 767) {
          if (!DEBOUNCING_SMALL) {
            gsap.to("#smallShapePathSVG", {
              duration: 6,
              morphSVG: "#bigShapePathSVG",
              transform: "translate(0, -10rem)",
              ease: "power4",
            });
            DEBOUNCING_XLARGE = false;
            DEBOUNCING_LARGE = false;
            DEBOUNCING_MEDIUM = false;
            DEBOUNCING_SMALL = true;
          }
        }
      }

      if (this.isToggle) {
        this.isToggle = false;
      }
      if (process.client) {
        if (window.innerWidth <= 992) {
          DELAY_MAIN_TEXT = 0;
        } else {
          DELAY_MAIN_TEXT = 1.5;
        }
      }
    },
    gsapOnLoadHome() {
      let $this = this;

      if (window.innerWidth > 1469) {
        gsap.to("#smallShapePathSVG", {
          duration: 6,
          morphSVG: "#bigShapePathSVG",
          ease: "power4",
        });
      } else if (window.innerWidth <= 1469 && window.innerWidth > 991) {
        gsap.to("#smallShapePathSVG", {
          duration: 6,
          morphSVG: "#bigShapePathSVG",
          transform: "translate(0, -5.3125rem)",
          ease: "power4",
        });
      } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
        gsap.to("#smallShapePathSVG", {
          duration: 6,
          morphSVG: "#bigShapePathSVG",
          transform: "translate(0, 0)",
          ease: "power4",
        });
      } else if (window.innerWidth <= 767) {
        gsap.to("#smallShapePathSVG", {
          duration: 6,
          morphSVG: "#bigShapePathSVG",
          transform: "translate(0, -10rem)",
          ease: "power4",
        });
      }

      let tl = gsap.timeline();

      gsap.from(".nav__shape-text", {
        delay: DELAY_MAIN_TEXT,
        duration: 2.5,
        opacity: 0,
        y: 30,
        ease: "back",
      });

      if (process.client) {
        if (window.innerWidth > 992) {
          tl.from(".nav__item-link", {
            duration: 1,
            opacity: 0,
            y: -30,
            ease: "back",
            stagger: 0.3,
          })
            .from(".nav__item-button", {
              opacity: 0,
            })
            .to(".nav__item-button", {
              duration: 1,
              opacity: 1,
              ease: "back",
            });
        } else {
          gsap.to(".nav__item-button", {
            opacity: 1,
          });
        }
      }
    },
    gsapOnLoadTheRest() {
      let $this = this;

      gsap.to("#smallShapePathSVG", {
        duration: 0,
        morphSVG: "#smallShapePathSVG",
        ease: "power4",
      });
      gsap.to(".nav__shape-text", {
        duration: 0,
        display: "none",
        ease: "back",
      });

      let tl = gsap.timeline();

      if (process.client) {
        if (window.innerWidth > 992) {
          tl.from(".nav__item-link", {
            duration: 1,
            opacity: 0,
            y: -30,
            ease: "back",
            stagger: 0.3,
          })
            .from(".nav__item-button", {
              opacity: 0,
            })
            .to(".nav__item-button", {
              duration: 1,
              opacity: 1,
              ease: "back",
            });
        } else {
          gsap.to(".nav__item-button", {
            opacity: 1,
          });
        }
      }
    },
  },
  computed: {
    isHome() {
      return this.$store.state.routers.isHome;
    },
    isExperiences() {
      return this.$store.state.routers.isExperiences;
    },
    isThePlays() {
      return this.$store.state.routers.isThePlays;
    },
    isPlayYourPart() {
      return this.$store.state.routers.isPlayYourPart;
    },
    isStory() {
      return this.$store.state.routers.isStory;
    },
    isLatest() {
      return this.$store.state.routers.isLatest;
    },
  },
  watch: {
    isHome(newValue, oldValue) {
      if (!newValue) {
        gsap.killTweensOf(".nav__shape-text");
        gsap.killTweensOf("#smallShapePathSVG");
        gsap.to(".nav__shape-text", {
          duration: 0,
          display: "none",
          ease: "back",
        });
        gsap.to("#smallShapePathSVG", {
          duration: 3,
          morphSVG: "#smallShapePathSVG",
          transform: "translate(0, 0)",
          ease: "power4",
        });
      } else {
        gsap.set(".nav__shape-text", {
          clearProps: "all",
        });
        gsap.from(".nav__shape-text", {
          delay: DELAY_MAIN_TEXT,
          duration: 2.5,
          opacity: 0,
          display: "none",
          y: 30,
          ease: "back",
        });
        if (window.innerWidth > 1469) {
          gsap.to("#smallShapePathSVG", {
            duration: 6,
            morphSVG: "#bigShapePathSVG",
            ease: "power4",
          });
        } else if (window.innerWidth <= 1469 && window.innerWidth > 991) {
          gsap.to("#smallShapePathSVG", {
            duration: 6,
            morphSVG: "#bigShapePathSVG",
            transform: "translate(0, -5.3125rem)",
            ease: "power4",
          });
        } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
          gsap.to("#smallShapePathSVG", {
            duration: 6,
            morphSVG: "#bigShapePathSVG",
            transform: "translate(0, 0)",
            ease: "power4",
          });
        } else if (window.innerWidth <= 767) {
          gsap.to("#smallShapePathSVG", {
            duration: 6,
            morphSVG: "#bigShapePathSVG",
            transform: "translate(0, -10rem)",
            ease: "power4",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#bigShapePathSVG {
  visibility: hidden;
}

.nav--color {
  background-color: $light-pink-background-color;
}
.nav {
  position: relative;
  z-index: 2;
  height: 7.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10.625rem;
  padding-right: 6.125rem;

  @include breakpoint-down(xlarge) {
    padding-left: 1.875rem;
    padding-right: 1.25rem;
  }

  &__logo {
    &--hidden-medium-small {
      @include breakpoint-down(medium) {
        display: none;
      }
    }
  }

  &__shape {
    position: absolute;
    z-index: 0;
    opacity: 1;
    width: 67.75rem;
    height: 33.1875rem;
    top: 0;
    right: 0;

    @include breakpoint-down(xlarge) {
      width: 59.375rem;
    }

    @include breakpoint-down(large) {
      width: 51.875rem;
    }

    @include breakpoint-down(medium) {
      width: auto;
      top: 0;
      left: 0;
    }

    @include breakpoint-down(xsmall) {
      width: auto;
      left: -30%;
    }

    &-text {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35.6rem;
      opacity: 1;
      font-size: 3.5rem;
      font-weight: normal;
      line-height: 1.07;
      letter-spacing: -1px;
      text-align: left;
      color: $light-pink-background-color;

      @include breakpoint-down(xlarge) {
        top: 43%;
        font-size: 2.6875rem;
        left: 56%;
      }

      @include breakpoint-down(large) {
        left: 60%;
      }

      @include breakpoint-down(medium) {
        width: 100%;
        padding: 0 6.25rem;
        font-size: 3.5rem;
        text-align: right;
        top: 45%;
        left: 55%;
      }

      @include breakpoint-down(small) {
        top: 38%;
        font-size: 2.25rem;
      }

      @include breakpoint-down(xsmall) {
        width: 90%;
        padding-right: 3.125rem;
        padding-left: 7.5rem;
        font-size: 2.25rem;
        text-align: right;
        top: 38%;
        left: 55%;
      }

      @include breakpoint-down(xxsmall) {
        font-size: 1.875rem;
      }
    }
  }

  &__menu {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      display: block;
    }

    & > :not(:nth-child(n + 6)) {
      margin-right: 2.625rem;
      @include breakpoint-down(large) {
        margin-right: 1.875rem;
      }
    }

    & > :nth-child(6) {
      margin-right: 5.6875rem;
      @include breakpoint-down(large) {
        margin-right: 2.5rem;
      }
    }

    @include breakpoint-down(medium) {
      display: none;
    }

    &--hidden-medium-down {
      @include breakpoint-down(medium) {
        display: none;
        animation-name: disappearing-menu-items;
        animation-duration: 0.5s;
      }
    }

    &--small-appearance-medium-down {
      @include breakpoint-down(medium) {
        position: absolute;
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        left: 50%;
        top: 50vh;
        transform: translate(-50%, -50%);
        animation-name: appearing-menu-items;
        animation-duration: 0.5s;

        & > :not(:last-child) {
          margin-right: 0;
          margin-bottom: 0.625rem;
        }
      }
    }
  }

  &__toggle {
    margin-right: 1.875rem;
    @include breakpoint-up(large) {
      display: none;
    }
    @include breakpoint-down(xsmall) {
      margin-right: 0.3125rem;
    }
  }

  &__item-link {
    font-size: 1.125rem;
    line-height: 1.33;
    letter-spacing: 0.006875rem;
    text-align: center;
    color: $light-pink-menu-text-color;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: $pink-badge-color;
      transition: color 0.5s ease-in-out;
    }

    @include breakpoint-down(medium) {
      font-size: 1.125rem * 1.3;
    }
  }

  &__item-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0;
    width: 8.5625rem;
    height: 2.8125rem;
    border-radius: 0.3125rem;
    background-color: $light-pink-menu-text-color;
    transition: all 0.5s ease-in-out;
    div {
      font-size: 1.0625rem;
      font-weight: 300;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: center;
      color: $red-color;
    }

    &:hover {
      background-color: $purple-color;
      transition: all 0.5s ease-in-out;

      path {
        fill: $light-pink-menu-text-color;
        transition: all 0.5s ease-in-out;
      }

      div {
        color: $light-pink-menu-text-color;
        transition: all 0.5s ease-in-out;
      }
    }
  }

  &__item-shopping-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 3.75rem;
    display: none;
    // opacity: 0;

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        path {
          fill: $pink-badge-color;
          transition: fill 0.5s ease-in-out;
        }
      }
    }

    &-badge {
      display: flex;
      justify-content: center;
      align-self: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.3125rem;
      background-color: $pink-badge-color;
      color: $light-pink-menu-text-color;
      font-size: 0.875rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: normal;
      color: #ffffff;
    }
  }

  &__hamburger-button {
    position: relative;
    z-index: 3;
    cursor: pointer;
    background-color: $transparent-color;
    border: 0;
    transition: all 0.5s ease-in-out;
    > span {
      display: block;
      width: 2.5rem;
      height: 0.25rem;
      background-color: $white-color;
      transition: all 500ms ease-in-out;
      transform-origin: 4px 2px;
      &:not(:last-child) {
        margin-bottom: 0.4375rem;
      }
    }
  }

  &--open {
    span:first-child {
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform: rotate(-45deg);
    }
  }

  &__overlay {
    position: relative;
    &::before {
      content: "";
      position: fixed;
      height: 100vh;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: $overlay-black-80-per;
      z-index: 1;
      animation-name: opening-toggle-overlay;
      animation-duration: 0.5s;
    }

    &--hidden-animation {
      position: relative;
      &::before {
        content: "";
        position: fixed;
        height: 0vh;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: $overlay-black-80-per;
        z-index: 1;
        animation-name: closing-toggle-overlay;
        animation-duration: 0.5s;
      }
    }
  }

  @keyframes opening-toggle-overlay {
    from {
      background-color: $transparent-color;
      height: 0vh;
    }
    to {
      background-color: $overlay-black-80-per;
      height: 100vh;
    }
  }

  @keyframes closing-toggle-overlay {
    from {
      background-color: $overlay-black-80-per;
      height: 100vh;
    }
    to {
      background-color: $transparent-color;
      height: 0vh;
    }
  }

  @keyframes appearing-menu-items {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes disappearing-menu-items {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}

.cls-1 {
  fill: $purple-darker-color;
}
.cls-1-white {
  fill: $white-color;
}
.cls-2 {
  fill: $red-color;
}
.cls-2-white {
  fill: $white-color;
}

.link-active {
  position: relative;
  @include breakpoint-down(medium) {
    color: $red-color;
  }
  &:hover {
    &::before {
      content: "";
      background-color: $pink-badge-color;
      transition: all 0.5s ease-in-out;
    }
  }
  &::before {
    content: "";
    position: absolute;
    height: 0.6875rem;
    width: 0.6875rem;
    top: 140%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    background-color: $light-pink-menu-text-color;
    transition: all 0.5s ease-in-out;

    @include breakpoint-down(medium) {
      display: none;
    }
  }
}
</style>
