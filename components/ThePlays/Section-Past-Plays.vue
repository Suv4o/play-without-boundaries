<template>
  <section>
    <div class="upcoming-plays">
      <div class="container">
        <div class="upcoming-plays__main" id="section__upcoming-plays">
          <div class="upcoming-plays__imgs">
            <div class="upcoming-plays__imgs-timeline" :style="timelineMove">
              <div class="upcoming-plays__imgs-timeline-cercle-1"></div>
              <div class="upcoming-plays__imgs-timeline-cercle-2"></div>
              <div class="upcoming-plays__imgs-timeline-cercle-3"></div>
            </div>
            <transition v-on:enter="gsapTransitionEnter">
              <div
                class="upcoming-plays__img-1"
                v-show="switchImg1"
                id="upcoming-plays__img--transition"
              >
                <button class="upcoming-plays__btn upcoming-plays__btn--red">
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
                <button
                  @click="$refs.imageGalleryModal.openModal(images[0])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-images"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.961"
                    height="32.637"
                    viewBox="0 0 41.961 32.637"
                  >
                    <path
                      id="Icon_awesome-images"
                      data-name="Icon awesome-images"
                      d="M34.968,30.224V31.39a3.5,3.5,0,0,1-3.5,3.5H3.5A3.5,3.5,0,0,1,0,31.39V12.74a3.5,3.5,0,0,1,3.5-3.5H4.662V24.4a5.835,5.835,0,0,0,5.828,5.828ZM41.961,24.4V5.747a3.5,3.5,0,0,0-3.5-3.5H10.49a3.5,3.5,0,0,0-3.5,3.5V24.4a3.5,3.5,0,0,0,3.5,3.5H38.465A3.5,3.5,0,0,0,41.961,24.4ZM18.649,9.244a3.5,3.5,0,1,1-3.5-3.5A3.5,3.5,0,0,1,18.649,9.244Zm-6.994,10.49L15.7,15.69a.874.874,0,0,1,1.236,0l2.879,2.879L29.687,8.7a.874.874,0,0,1,1.236,0L37.3,15.072v8.159H11.656Z"
                      transform="translate(0 -2.25)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
                <button
                  @click="$refs.VideoModal.openModal(video[0])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.974"
                    height="27.983"
                    viewBox="0 0 41.974 27.983"
                  >
                    <path
                      id="Icon_awesome-video"
                      data-name="Icon awesome-video"
                      d="M24.5,4.5H3.483A3.483,3.483,0,0,0,0,7.983V29a3.483,3.483,0,0,0,3.483,3.483H24.5A3.483,3.483,0,0,0,27.983,29V7.983A3.483,3.483,0,0,0,24.5,4.5ZM38.3,7.247l-7.987,5.509v11.47l7.987,5.5a2.337,2.337,0,0,0,3.673-1.88V9.127A2.338,2.338,0,0,0,38.3,7.247Z"
                      transform="translate(0 -4.5)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
              </div>
            </transition>
            <transition v-on:enter="gsapTransitionEnter">
              <div
                class="upcoming-plays__img-2"
                v-show="switchImg2"
                id="upcoming-plays__img--transition"
              >
                <button class="upcoming-plays__btn upcoming-plays__btn--red">
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
                <button
                  @click="$refs.imageGalleryModal.openModal(images[1])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-images"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.961"
                    height="32.637"
                    viewBox="0 0 41.961 32.637"
                  >
                    <path
                      id="Icon_awesome-images"
                      data-name="Icon awesome-images"
                      d="M34.968,30.224V31.39a3.5,3.5,0,0,1-3.5,3.5H3.5A3.5,3.5,0,0,1,0,31.39V12.74a3.5,3.5,0,0,1,3.5-3.5H4.662V24.4a5.835,5.835,0,0,0,5.828,5.828ZM41.961,24.4V5.747a3.5,3.5,0,0,0-3.5-3.5H10.49a3.5,3.5,0,0,0-3.5,3.5V24.4a3.5,3.5,0,0,0,3.5,3.5H38.465A3.5,3.5,0,0,0,41.961,24.4ZM18.649,9.244a3.5,3.5,0,1,1-3.5-3.5A3.5,3.5,0,0,1,18.649,9.244Zm-6.994,10.49L15.7,15.69a.874.874,0,0,1,1.236,0l2.879,2.879L29.687,8.7a.874.874,0,0,1,1.236,0L37.3,15.072v8.159H11.656Z"
                      transform="translate(0 -2.25)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
                <button
                  @click="$refs.VideoModal.openModal(video[1])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.974"
                    height="27.983"
                    viewBox="0 0 41.974 27.983"
                  >
                    <path
                      id="Icon_awesome-video"
                      data-name="Icon awesome-video"
                      d="M24.5,4.5H3.483A3.483,3.483,0,0,0,0,7.983V29a3.483,3.483,0,0,0,3.483,3.483H24.5A3.483,3.483,0,0,0,27.983,29V7.983A3.483,3.483,0,0,0,24.5,4.5ZM38.3,7.247l-7.987,5.509v11.47l7.987,5.5a2.337,2.337,0,0,0,3.673-1.88V9.127A2.338,2.338,0,0,0,38.3,7.247Z"
                      transform="translate(0 -4.5)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
              </div>
            </transition>
            <transition v-on:enter="gsapTransitionEnter">
              <div
                class="upcoming-plays__img-3"
                v-show="switchImg3"
                id="upcoming-plays__img--transition"
              >
                <button class="upcoming-plays__btn upcoming-plays__btn--red">
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
                <button
                  @click="$refs.imageGalleryModal.openModal(images[2])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-images"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.961"
                    height="32.637"
                    viewBox="0 0 41.961 32.637"
                  >
                    <path
                      id="Icon_awesome-images"
                      data-name="Icon awesome-images"
                      d="M34.968,30.224V31.39a3.5,3.5,0,0,1-3.5,3.5H3.5A3.5,3.5,0,0,1,0,31.39V12.74a3.5,3.5,0,0,1,3.5-3.5H4.662V24.4a5.835,5.835,0,0,0,5.828,5.828ZM41.961,24.4V5.747a3.5,3.5,0,0,0-3.5-3.5H10.49a3.5,3.5,0,0,0-3.5,3.5V24.4a3.5,3.5,0,0,0,3.5,3.5H38.465A3.5,3.5,0,0,0,41.961,24.4ZM18.649,9.244a3.5,3.5,0,1,1-3.5-3.5A3.5,3.5,0,0,1,18.649,9.244Zm-6.994,10.49L15.7,15.69a.874.874,0,0,1,1.236,0l2.879,2.879L29.687,8.7a.874.874,0,0,1,1.236,0L37.3,15.072v8.159H11.656Z"
                      transform="translate(0 -2.25)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
                <button
                  @click="$refs.VideoModal.openModal(video[2])"
                  class="upcoming-plays__btn upcoming-plays__btn--white-video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.974"
                    height="27.983"
                    viewBox="0 0 41.974 27.983"
                  >
                    <path
                      id="Icon_awesome-video"
                      data-name="Icon awesome-video"
                      d="M24.5,4.5H3.483A3.483,3.483,0,0,0,0,7.983V29a3.483,3.483,0,0,0,3.483,3.483H24.5A3.483,3.483,0,0,0,27.983,29V7.983A3.483,3.483,0,0,0,24.5,4.5ZM38.3,7.247l-7.987,5.509v11.47l7.987,5.5a2.337,2.337,0,0,0,3.673-1.88V9.127A2.338,2.338,0,0,0,38.3,7.247Z"
                      transform="translate(0 -4.5)"
                      fill="#ed2a58"
                    />
                  </svg>
                </button>
              </div>
            </transition>
          </div>
          <div class="upcoming-plays__text" id="section__upcoming-plays-text">
            <div class="upcoming-plays__text-container" :style="timelineMove">
              <div class="upcoming-plays__text-1" id="upcoming-plays__text-1">
                <h1 class="upcoming-plays__title">Detska Nasmevka za ovaj svet</h1>
                <p class="upcoming-plays__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                  ligula ex. Nunc sit amet blandit sem. Nulla vitae elit eleifend,
                  accumsan risus vel, rhoncus tellus. Nulla facilisi. Phasellus
                  justo tortor, porta at nibh eu, consectetur condimentum ipsum.
                  Sed consequat, sapien a hendrerit posuere, mauris erat hendrerit
                  lacus, in gravida sem ligula ut nisi. Curabitur nulla purus,
                  dignissim eget sem in, pellentesque scelerisque dolor.
                  <br />
                  <br />Sed laoreet augue elit. Donec sapien mauris, feugiat et lobortis
                  id, tempus eget enim. Mauris nec congue est. Sed ornare justo ut
                  libero tincidunt, a ullamcorper massa sagittis. Morbi pharetra
                  eleifend nulla tincidunt vulputate. Aliquam eget sollicitudin
                  est. Vestibulum pulvinar tortor nec augue consectetur venenatis.
                  Mauris ac vulputate erat. Ut egestas felis commodo nibh rutrum,
                  non scelerisque nibh elementum. Donec magna eros, iaculis non
                  finibus quis, commodo venenatis enim. Duis ac magna pretium
                  ipsum mollis tincidunt vel id magna. Curabitur eget lacinia
                  nisi. Phasellus condimentum fermentum purus, ut convallis nisi
                  blandit.
                </p>
              </div>
              <div class="upcoming-plays__text-2">
                <h1 class="upcoming-plays__title">Igri Bez Granici</h1>
                <p class="upcoming-plays__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                  ligula ex. Nunc sit amet blandit sem. Nulla vitae elit eleifend,
                  accumsan risus vel, rhoncus tellus. Nulla facilisi. Phasellus
                  justo tortor, porta at nibh eu, consectetur condimentum ipsum.
                  Sed consequat, sapien a hendrerit posuere, mauris erat hendrerit
                  lacus, in gravida sem ligula ut nisi. Curabitur nulla purus,
                  dignissim eget sem in, pellentesque scelerisque dolor.
                  <br />
                  <br />Sed laoreet augue elit. Donec sapien mauris, feugiat et lobortis
                  id, tempus eget enim. Mauris nec congue est. Sed ornare justo ut
                  libero tincidunt, a ullamcorper massa sagittis. Morbi pharetra
                  eleifend nulla tincidunt vulputate. Aliquam eget sollicitudin
                  est. Vestibulum pulvinar tortor nec augue consectetur venenatis.
                  Mauris ac vulputate erat. Ut egestas felis commodo nibh rutrum,
                  non scelerisque nibh elementum. Donec magna eros, iaculis non
                  finibus quis, commodo venenatis enim. Duis ac magna pretium
                  ipsum mollis tincidunt vel id magna. Curabitur eget lacinia
                  nisi. Phasellus condimentum fermentum purus, ut convallis nisi
                  blandit.
                </p>
              </div>
              <div class="upcoming-plays__text-3">
                <h1 class="upcoming-plays__title">Toshe's Way</h1>
                <p class="upcoming-plays__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                  ligula ex. Nunc sit amet blandit sem. Nulla vitae elit eleifend,
                  accumsan risus vel, rhoncus tellus. Nulla facilisi. Phasellus
                  justo tortor, porta at nibh eu, consectetur condimentum ipsum.
                  Sed consequat, sapien a hendrerit posuere, mauris erat hendrerit
                  lacus, in gravida sem ligula ut nisi. Curabitur nulla purus,
                  dignissim eget sem in, pellentesque scelerisque dolor.
                  <br />
                  <br />Sedlaoreet augue elit. Donec sapien mauris, feugiat et lobortis
                  id, tempus eget enim. Mauris nec congue est. Sed ornare justo ut
                  libero tincidunt, a ullamcorper massa sagittis. Morbi pharetra
                  eleifend nulla tincidunt vulputate. Aliquam eget sollicitudin
                  est. Vestibulum pulvinar tortor nec augue consectetur venenatis.
                  Mauris ac vulputate erat. Ut egestas felis commodo nibh rutrum,
                  non scelerisque nibh elementum. Donec magna eros, iaculis non
                  finibus quis, commodo venenatis enim. Duis ac magna pretium
                  ipsum mollis tincidunt vel id magna. Curabitur eget lacinia
                  nisi. Phasellus condimentum fermentum purus, ut convallis nisi
                  blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ImageGalleryModal ref="imageGalleryModal" />
    <VideoModal ref="VideoModal" />
  </section>
</template>

<script>
import ImageGalleryModal from "@/components/UI/Image-gallery-modal.vue";
import VideoModal from "@/components/UI/Video-modal.vue";
export default {
  components: {
    ImageGalleryModal,
    VideoModal,
  },
  data() {
    return {
      moveValue: 0,
      windowSize: 0,
      switchImg1: true,
      switchImg2: false,
      switchImg3: false,
      video: [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
      ],
      images: {
        0: [
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
          },
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
          },
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
          },
        ],
        1: [
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
          },
        ],
        2: [
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3",
          },
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2",
          },
          {
            small:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
            medium:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
            large:
              "https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1",
          },
        ],
      },
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.onResize);
      this.windowSize = window.innerWidth;
    }
  },
  mounted() {
    let $this = this;
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    this.gsapOnLoad();

    ScrollTrigger.matchMedia({
      "(min-width: 992px) and (min-height: 500px)": function () {
        $this.gsapOnScrollLarge();
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 350px) and (max-width: 991px) and (min-height: 500px)": function () {
        $this.gsapOnScrollSmall();
      },
    });
  },
  destroyed() {
    ScrollTrigger.clearMatchMedia("(min-width: 992px) and (min-height: 500px)");
    ScrollTrigger.clearMatchMedia(
      "(min-width: 350px) and (max-width: 991px) and (min-height: 500px)"
    );

    if (process.client) {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
    gsapOnLoad() {
      let $this = this;
      gsap.from("#upcoming-plays__text-1", {
        scrollTrigger: {
          trigger: "#section__upcoming-plays",
          start: "top center",
          // markers: true,
        },
        duration: 3,
        opacity: 0,
        y: 45,
        ease: "back",
      });

      gsap.from("#upcoming-plays__img--transition", {
        scrollTrigger: {
          trigger: "#section__upcoming-plays",
          start: "top center",
          // markers: true,
        },
        duration: 1,
        opacity: 0,
        filter: "blur(4px)",
        ease: "back",
      });
    },
    gsapOnScrollLarge() {
      let $this = this;
      gsap.to("#section__upcoming-plays-text", {
        scrollTrigger: {
          trigger: "#section__upcoming-plays",
          start: "bottom bottom",
          end: "+=1000",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: function (self) {
            $this.moveValue = parseFloat(self.progress.toFixed(3)) * 190;
            if ($this.moveValue < 75) {
              $this.switchImg1 = true;
              $this.switchImg2 = false;
              $this.switchImg3 = false;
            } else if ($this.moveValue > 75 && $this.moveValue < 160) {
              $this.switchImg1 = false;
              $this.switchImg2 = true;
              $this.switchImg3 = false;
            } else {
              $this.switchImg1 = false;
              $this.switchImg2 = false;
              $this.switchImg3 = true;
            }
          },
        },
        duration: 3,
      });
    },
    gsapOnScrollSmall() {
      let $this = this;
      gsap.to("#section__upcoming-plays-text", {
        scrollTrigger: {
          trigger: "#section__upcoming-plays",
          start: "top top",
          end: "+=1000",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          scrub: 1,
          pin: true,
          onUpdate: function (self) {
            $this.moveValue = parseFloat(self.progress.toFixed(3)) * 190;
            if ($this.moveValue < 75) {
              $this.switchImg1 = true;
              $this.switchImg2 = false;
              $this.switchImg3 = false;
            } else if ($this.moveValue > 75 && $this.moveValue < 160) {
              $this.switchImg1 = false;
              $this.switchImg2 = true;
              $this.switchImg3 = false;
            } else {
              $this.switchImg1 = false;
              $this.switchImg2 = false;
              $this.switchImg3 = true;
            }
          },
        },
        duration: 3,
      });
    },
    gsapTransitionEnter() {
      let $this = this;
      if (!gsap.isTweening("#upcoming-plays__img--transition")) {
        gsap.from("#upcoming-plays__img--transition", {
          duration: 1,
          opacity: 0,
          filter: "blur(4px)",
          //   y: 30,
          ease: "power4",
        });
      }
    },
  },
  computed: {
    timelineMove() {
      if (this.windowSize < 992) {
        return { top: "auto", left: "-" + this.moveValue + "%", right: "0px" };
      } else {
        return {
          top: "-" + this.moveValue + "%",
          left: "auto",
          right: "-0.625rem",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.upcoming-plays {
  background-color: $light-pink-background-color;

  &__main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    height: 100vh;
    max-height: 904px;
    overflow: hidden;
    @include breakpoint-down(medium) {
      flex-direction: column;
      max-height: 100vh;
    }
  }

  &__imgs {
    flex: 1.08;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    @include breakpoint-down(small) {
      flex: auto;
      height: 30%;
    }

    &-timeline {
      position: absolute;
      z-index: 2;
      top: 0%;
      right: -0.625rem;
      width: 1.25rem;
      height: 300%;
      background-color: $red-color;

      @include breakpoint-down(medium) {
        top: auto;
        bottom: -0.625rem;
        right: 0%;
        left: 0%;
        width: 300%;
        height: 1.25rem;
      }

      &-cercle-1 {
        position: absolute;
        top: 4%;
        left: 50%;
        width: 3.875rem;
        height: 3.875rem;
        border-radius: 50%;
        background-color: $red-color;
        transform: translate(-50%);

        @include breakpoint-down(medium) {
          width: 2.625rem;
          height: 2.625rem;
          top: 50%;
          left: 4%;
          transform: translate(0%, -50%);
        }
      }

      &-cercle-2 {
        position: absolute;
        top: 36%;
        left: 50%;
        width: 3.875rem;
        height: 3.875rem;
        border-radius: 50%;
        background-color: $red-color;
        transform: translate(-50%);

        @include breakpoint-down(medium) {
          width: 2.625rem;
          height: 2.625rem;
          top: 50%;
          left: 36%;
          transform: translate(0%, -50%);
        }
      }

      &-cercle-3 {
        position: absolute;
        top: 68%;
        left: 50%;
        width: 3.875rem;
        height: 3.875rem;
        border-radius: 50%;
        background-color: $red-color;
        transform: translate(-50%);

        @include breakpoint-down(medium) {
          width: 2.625rem;
          height: 2.625rem;
          top: 50%;
          left: 68%;
          transform: translate(0%, -50%);
        }
      }
    }
  }

  &__text {
    flex: 0.92;
    position: relative;
    width: 100%;
    height: 100%;

    padding-left: 5%;
    padding-right: 3%;
    padding-top: 3%;

    @include breakpoint-down(small) {
      flex: auto;
      height: 70%;
    }

    &-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 300%;
      padding-left: 10%;
      padding-right: 7%;
      padding-top: 7%;

      @include breakpoint-down(medium) {
        display: flex;
        left: 0;
        align-items: flex-start;
        width: 300vw;
        height: 100%;
        padding-left: 5%;
        padding-right: 3%;
        padding-top: 3.125rem;
      }
    }

    &-1 {
      height: 29%;
      @include breakpoint-down(medium) {
        width: 100vw;
        height: auto;
        padding-right: 20vw;
      }
    }
    &-2 {
      margin-top: 6.25rem;
      height: 29%;
      @include breakpoint-down(medium) {
        margin-top: 0;
        padding-right: 20vw;
        width: 100vw;
        height: auto;
      }
    }
    &-3 {
      margin-top: 6.25rem;
      height: 29%;
      @include breakpoint-down(medium) {
        margin-top: 0;
        padding-right: 20vw;
        width: 100vw;
        height: auto;
      }
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

  &__description {
    max-width: 46.125rem;
    font-size: 1.125rem;
    line-height: 1.56;
    text-align: left;
    margin-top: 3.75rem;
    color: $purple-darker-color;

    @include breakpoint-down(large) {
      margin: 0.9375rem 0;
      font-size: 0.875rem;
    }

    @media (max-width: 100em) and (max-height: 43.75em) {
      margin: 0.9375rem 0;
      font-size: 0.875rem;
    }
  }

  &__img-1 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1");
    background-size: cover;
    background-position: center center;

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-1");
    }
  }

  &__img-2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2");
    background-size: cover;
    background-position: center center;

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122759/pwb-website-2020/past-plays-img-2");
    }
  }

  &__img-3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3");
    background-size: cover;
    background-position: center center;

    @include breakpoint-down(xsmall) {
      background-image: url("https://res.cloudinary.com/the-clue/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1599122761/pwb-website-2020/past-plays-img-3");
    }
  }

  &__btn {
    position: absolute;
    width: 4.9375rem;
    height: 4.9375rem;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;

    @include breakpoint-down(medium) {
      width: 3.125rem;
      height: 3.125rem;

      svg {
        width: 45%;
      }
    }

    &--red {
      top: 3.75rem;
      left: 6%;
      background-color: $red-color;

      @include breakpoint-down(medium) {
        top: 0.625rem;
        left: 5%;
      }

      @media (max-width: 991px) and (max-height: 730px) {
        top: 0.625rem;
        left: 0.625rem;
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

    &--white-images {
      top: 10.625rem;
      left: 6%;
      background-color: $white-color;

      @include breakpoint-down(medium) {
        top: 5rem;
        left: 5%;
      }

      @media (max-width: 991px) and (max-height: 730px) {
        top: 0.625rem;
        left: 5rem;
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

    &--white-video {
      top: 17.5rem;
      left: 6%;
      background-color: $white-color;

      @include breakpoint-down(medium) {
        top: 9.375rem;
        left: 5%;
      }

      @media (max-width: 991px) and (max-height: 730px) {
        top: 0.625rem;
        left: 9.375rem;
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
