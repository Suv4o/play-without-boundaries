export default {
  mode: "universal",
  target: "static",
  server: {
    host: "0"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Play Without Boundaries",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "We Are Human, We Are One"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/god3fjq.css"
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollToPlugin.min.js"
      },
      {
        src: "/lib/MorphSVGPlugin.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000000" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  pageTransition: {
    name: "fade",
    mode: "out-in"
    // name: "slide-fade",
    // mode: "out-in"
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["~/assets/scss/_variables.scss", "~/assets/scss/_breakpoints.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
