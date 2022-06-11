<template>
  <div class="bg-gray-100">
    <div class="py-32 lg:mx-auto mx-4 lg:w-3/5 text-center">
      <div class="lg:text-6xl text-4xl font-bold capitalize">
        Get an Artisan of your
        <span class="text-blue">choice in minutes, </span> get the job done
        Quicker
      </div>
      <div class="text-lg lg:px-20 mt-4">
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
    <div>
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
    </div>
  </div>
</template>
<style scoped>
input:focus {
  outline: none;
}
</style>