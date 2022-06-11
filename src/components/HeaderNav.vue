<template>
  <div class="bg-gray-100">
    <div class="flex justify-between lg:p-2">
      <div>
        <router-link to="/">
          <img
            src="../assets/logo.png"
            class="lg:w-80 w-44 lg:mt-0 mt-3"
            alt=""
          />
        </router-link>
      </div>
      <div class="flex justify-between 1/2 p-2">
        <div class="lg:flex hidden">
          <router-link to="/">
            <div class="p-2">Home</div>
          </router-link>
          <router-link to="/">
            <div class="p-2">About Us</div>
          </router-link>
          <router-link to="/">
            <div class="p-2">Categories</div>
          </router-link>
          <router-link to="/">
            <div class="p-2">Task finder</div>
          </router-link>
        </div>

        <div class="lg:ml-8 lg:mr-0 mr-6 flex lg:w-80 justify-evenly">
          <div>
            <a href="https://getartizan-cutomers.netlify.app/auth/login/">
              <input
                type="button"
                class="bg-blue p-2 lg:px-8 px-4 text-white"
                value="Become an Artisan"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>