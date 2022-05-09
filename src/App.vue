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
    <div class="lg:flex lg:my-0 my-10 justify-evenly lg:p-16 p-4">
      <div class="lg:w-1/5 text-center lg:my-0 my-8">
        <img class="w-16 mx-auto" src="./assets/Icon1.png" alt="" />
        <div class="text-lg my-2 font-bold">Grow your audience</div>
        <div class="text-m">
          Find new customers and build your email list with lead generation ..
        </div>
      </div>
      <div class="lg:w-1/5 text-center lg:my-0 my-8">
        <img class="w-16 mx-auto" src="./assets/Icon2.png" alt="" />
        <div class="text-lg my-2 font-bold">Boost online sales</div>
        <div class="text-m">
          Find new customers and build your email list with lead generation ..
        </div>
      </div>
      <div class="lg:w-1/5 text-center lg:my-0 my-8">
        <img class="w-16 mx-auto" src="./assets/Icon.png" alt="" />
        <div class="text-lg my-2 font-bold">Sell your knowledge</div>
        <div class="text-m">
          Find new customers and build your email list with lead generation ..
        </div>
      </div>
    </div>

    <div class="bg-blue lg:w-10/12 lg:mx-auto mx-4 text-white rounded-xl p-8 my-8">
      <div class="lg:text-5xl text-4xl text-center">Journey of our Success</div>
      <div class="lg:flex justify-evenly mt-20">
        <div class="lg:w-1/5">
          <div class="text-7xl">85%</div>
          <div class="bg-white w-20 h-1"></div>
          <div class="my-2 text-base">
            manage communication more efficiently
          </div>
        </div>
        <div class="lg:w-1/5">
          <div class="text-7xl">95%</div>
          <div class="bg-white w-20 h-1"></div>
          <div class="my-2 text-base">
            improve communication with customers and clients
          </div>
        </div>
        <div class="lg:w-1/5">
          <div class="text-7xl">75%</div>
          <div class="bg-white w-20 h-1"></div>
          <div class="my-2 text-base">
            average improvement in team efficiency
          </div>
        </div>
      </div>
    </div>

    <div class="my-20 lg:p-0 p-4">
      <div class="lg:w-96 mx-auto text-center">
        <div class="lg:text-5xl text-4xl my-6">Our Features</div>
        <div>
          Unleash your creativety with a visual collaboration plattorm that
          enables effective ideation
        </div>
      </div>
      <div class="lg:flex justify-evenly">
        <div class="lg:w-1/5 text-center mt-8">
          <img src="./assets/Icon3.png" class="w-10 mx-auto" alt="" />
          <div class="font-bold text-base my-4">Choosing a Service</div>
          <div class="text-sm">
            Choosing an accountant that matches your needs
          </div>
        </div>
        <div class="lg:w-1/5 text-center mt-8">
          <img src="./assets/Icon4.png" class="w-10 mx-auto" alt="" />
          <div class="font-bold text-base my-4">Our Clients Say</div>
          <div class="text-sm">
            Read the reviews from some of our satisfied clients
          </div>
        </div>
        <div class="lg:w-1/5 text-center mt-8">
          <img src="./assets/Icon5.png" class="w-10 mx-auto" alt="" />
          <div class="font-bold text-base my-4">Initial Consultation</div>
          <div class="text-sm">Understanding your accountancy requirements</div>
        </div>
        <div class="lg:w-1/5 text-center mt-8">
          <img src="./assets/Icon6.png" class="w-10 mx-auto" alt="" />
          <div class="font-bold text-base my-4">Request a Callback</div>
          <div class="text-sm">Lets talk at a more convenient time for you</div>
        </div>
      </div>
    </div>
    <div class="my-32 bg-gray-50 py-20 lg:px-0 px-4">
      <div class="lg:w-1/2 mx-auto text-center">
        <div class="lg:text-5xl text-4xl my-6">Our Featured Artisans</div>
      </div>
      <div class="lg:flex justify-around lg:mx-40 text-center">
        <div class="card lg:w-80 p-4 h-72">
          <img src="./assets/image.png" class="w-40 mx-auto" alt="" />
          <div class="text-lg">Victory Roberts</div>
          <div class="text-sm my-1">Michigan, TX</div>
          <div class="mt-8">
            <div class="text-sm">989-653-2986</div>
            <div class="text-sm text-blue my-1">alisonkiara@hommy.com</div>
          </div>
        </div>
        <div class="card h-72 lg:w-80 p-4 mt-10">
          <img src="./assets/image.png" class="w-40 mx-auto" alt="" />
          <div class="text-lg">Victory Roberts</div>
          <div class="text-sm my-1">Michigan, TX</div>
          <div class="mt-8">
            <div class="text-sm">989-653-2986</div>
            <div class="text-sm text-blue my-1">alisonkiara@hommy.com</div>
          </div>
        </div>
        <div class="card h-72 lg:w-80 p-4 lg:mt-20 mt-10">
          <img src="./assets/image.png" class="w-40 mx-auto" alt="" />
          <div class="text-lg">Victory Roberts</div>
          <div class="text-sm my-1">Michigan, TX</div>
          <div class="mt-8">
            <div class="text-sm">989-653-2986</div>
            <div class="text-sm text-blue my-1">alisonkiara@hommy.com</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="lg:w-1/2 mx-auto text-center">
        <div class="lg:text-5xl text-4xl my-6">What our Customers say</div>
        <div class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio laboriosam dicta voluptas!</div>
      </div>
      <div class="my-10">
        <Carousel />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.card {
  background: #ffffff;
  border: 1px solid #f6fbfd;
  box-shadow: 0px 20px 50px rgba(198, 217, 225, 0.3);
  border-radius: 5px;
}
</style>
