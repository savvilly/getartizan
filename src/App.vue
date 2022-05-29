<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";

components: {
  HeaderNav, Hero, Footer, Carousel;
}
</script>

<template>
  <div>
    <HeaderNav />
    <Hero />
    <div>
      <div class="text-center lg:mx-0 mx-6 my-5">
        <div class="text-3xl capitalize my-4">
          Browse popular Artisans on Demand
        </div>
        <div class="text-base lg:w-1/2 mx-auto">
          Here are some categories of artisans on demand. Popular artisans may
          change dependent on the demand
        </div>
      </div>
      <div class="lg:flex lg:my-0 my-10 justify-evenly lg:p-16 p-4">
        <div class="lg:w-1/5 text-center lg:my-0 my-8 ">
          <img
            class="w-16 mx-auto"
            src="./assets/features/tool-box.png"
            alt=""
          />
          <div class="text-lg my-2 font-bold">Carpenter</div>
          <!-- <div class="text-m">
            Find new customers and build your email list with lead generation ..
          </div> -->
        </div>
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img
            class="w-16 mx-auto"
            src="./assets/features/cleaning.png"
            alt=""
          />
          <div class="text-lg my-2 font-bold">Cleaner</div>
          <!-- <div class="text-m">
            Find new customers and build your email list with lead generation ..
          </div> -->
        </div>
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img class="w-16 mx-auto" src="./assets/features/helmet.png" alt="" />
          <div class="text-lg my-2 font-bold">Electrician</div>
          <!-- <div class="text-m">
            Find new customers and build your email list with lead generation ..
          </div> -->
        </div>
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img
            class="w-16 mx-auto"
            src="./assets/features/responsive.png"
            alt=""
          />
          <div class="text-lg my-2 font-bold">Web Developer</div>
          <!-- <div class="text-m">
            Find new customers and build your email list with lead generation ..
          </div> -->
        </div>
      </div>
    </div>

    <div class="lg:flex lg:m-12 m-6 lg:mx-20 justify-between">
      <div class="lg:w-full my-auto">
        <div class="lg:text-6xl text-3xl my-3">What is GetArtisan?</div>
        <div class="lg:text-2xl text-lg my-8 text-gray-500">
          About GetArtisan is an online platform that connects customers across
          the globe. We help find artisans that best deliver the services you
          need in your location of choice.
        </div>
        <div class="lg:text-2xl text-lg text-blue mb-5">Become an Artisian</div>
      </div>
      <div class="lg:w-full">
        <img
          class="ml-auto"
          src="./assets/about getartizan collage.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="my-32">
      <div class="text-center lg:m-0 m-6 my-5">
        <div class="lg:text-5xl text-3xl font-bold lg:w-1/2 mx-auto capitalize my-4">
          Get artisan is free simple and easy to use
        </div>
      </div>
      <div class="lg:flex lg:my-0 lg:my-10 justify-evenly lg:p-16 p-4">
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img class="w-16 mx-auto" src="./assets/desc/booking.png" alt="" />
          <div class="text-2xl my-2 font-bold">Search Artisans by location</div>
          <div class="text-m">
            here are thousands of artisans in various locations waiting for a
            booking from you
          </div>
        </div>
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img class="w-16 mx-auto" src="./assets/desc/search.png" alt="" />
          <div class="text-2xl my-2 font-bold">Book any artisan of choice</div>
          <div class="text-m">
            Select from the list of artisans in your specified location.
          </div>
        </div>
        <div class="lg:w-1/5 text-center lg:my-0 my-8">
          <img class="w-16 mx-auto" src="./assets/desc/phone-call.png" alt="" />
          <div class="text-2xl my-2 font-bold">
            Recieve a call from the verified artisan
          </div>
          <div class="text-m">
            You receive a call from your selected artisan
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="bg-blue p-5 text-white text-lg rounded-md">
          Get started now for free
        </button>
      </div>
    </div>

    <div class="lg:flex lg:m-12 m-6 lg:mx-20 justify-between my-20">
      <div class="lg:w-full my-auto lg:mr-4">
        <div class="lg:text-5xl text-3xl my-3">Daily life made simpler</div>
        <div class="lg:text-xl text-lg my-8 text-gray-500">
          Looking to get the job done by a genuine professional in his field?
          Search no more, We're here to simplify your search by offering the
          very best.
        </div>
        <div>
          <ul class="lg:text-2xl text-lg mx-5 lg:mb-0 mb-8">
            <li class="my-2">Choose from our database of verified artisans</li>
            <li class="my-2">
              Schedule and fix a time that works best for you
            </li>
            <li class="my-2">Discuss with the artisan and get your job done</li>
          </ul>
        </div>
      </div>
      <div class="lg:w-full">
        <img class="ml-auto" src="./assets/daily life made easier.png" alt="" />
      </div>
    </div>
    <div>

    </div>
    <Footer />
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #f6fbfd;
  box-shadow: 0px 20px 50px rgba(198, 217, 225, 0.3);
  border-radius: 5px;
}
ul li {
  list-style-type: square;
}
</style>
