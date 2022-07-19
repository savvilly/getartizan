<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        autoplay: 8000,
        mouseDrag: false,
        transition: 3000,
        wrapAround: true,
      },
      images: [
        { img: "/img/arlington-research-nFLmPAf9dVc-unsplash.jpg" },
        { img: "/img/dimas-handy-8svRZcxwrjg-unsplash.jpg" },
        { img: "/img/zoe-schaeffer-siD6uufCyt8-unsplash.jpg" },
        { img: "/img/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg" },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full relative">
    <div>
      <carousel :items-to-show="1" :settings="settings">
        <slide v-for="(image, index) in images" :key="index">
          <img class="w-full slide" :src="image.img" />
        </slide>
      </carousel>
    </div>
    <div
      class="bg-black absolute top-0 w-full h-[90vh] sm:h-[100vh] opacity-60"
    ></div>

    <div
      class="
        lg:py-32
        mx-4
        lg:w-3/5
        absolute
        top-0
        sm:top-12
        lg:left-56
        text-center
      "
    >
      <div class="lg:text-6xl text-4xl font-bold capitalize text-white">
        Get an Artisan of your
        <span class="text-blue">choice in minutes, </span> get the job done
        Quicker
      </div>
      <div class="text-lg lg:px-20 mt-4 text-white">
        Getting an artisan in your location can be challenging, But GetArtizan
        will find you one in 5 seconds, you can book their services in less than
        a minute.
      </div>
      <div class="lg:flex mt-10 justify-center">
        <input
          type="text"
          placeholder="Find artisan by category"
          class="p-3 lg:w-auto w-full lg:mb-0 mb-2"
        />
        <input
          type="text"
          placeholder="City"
          class="p-3 lg:w-44 w-full lg:mb-0 mb-2"
        />
        <input
          type="text"
          placeholder="Location"
          class="p-3 lg:w-44 w-full lg:mb-0 mb-2"
        />
        <router-link to="/search">
          <input
            type="button"
            class="p-3 px-14 lg:w-auto w-full lg:rounded-md bg-blue text-white"
            value="Search"
          />
        </router-link>
      </div>
    </div>
    <!-- <div>
      <img
        class="w-14 absolute top-16 left-8"
        src="../assets/hero/icon1.png"
        alt=""
      />
      <img
        class="w-10 absolute top-16 right-8"
        src="../assets/hero/icon2.png"
        alt=""
      />
      <img
        class="w-16 lg:absolute lg:block hidden bottom-6 left-8"
        src="../assets/hero/icon3.png"
        alt=""
      />
      <img
        class="w-10 absolute bottom-16 right-8"
        src="../assets/hero/icon4.png"
        alt=""
      />
      <img
        class="w-16 lg:absolute lg:block hidden top-96 left-44"
        src="../assets/hero/icon5.png"
        alt=""
      />
      <img
        class="w-16 lg:absolute lg:block hidden top-96 right-32"
        src="../assets/hero/icon6.png"
        alt=""
      />
      <img
        class="lg:w-14 w-10 absolute lg:top-52 top-80 lg:left-44 right-0"
        src="../assets/hero/icon7.png"
        alt=""
      />
      <img
        class="w-14 lg:absolute lg:block hidden bottom-14 lg:left-96"
        src="../assets/hero/icon2.png"
        alt=""
      />
      <img
        class="w-10 absolute top-40 lg:right-80"
        src="../assets/hero/icon9.png"
        alt=""
      />
      <img
        class="w-10 lg:absolute lg:block hidden top-32 lg:left-96"
        src="../assets/hero/icon8.png"
        alt=""
      />
      <img
        class="w-10 absolute bottom-16 lg:right-80"
        src="../assets/hero/icon7.png"
        alt=""
      />
    </div> -->
  </div>
</template>
<style scoped>
input:focus {
  outline: none;
}
.slide {
  height: 90vh;
}
@media (max-width: 600px) {
  .slide {
    transform: scale(2.5);
    height:100vh;
  }
}
</style>