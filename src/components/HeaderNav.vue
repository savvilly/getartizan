<template>
  <div class="bg-gray-100">
    <div class="flex justify-between lg:p-2">
      <div>
        <img
          src="../assets/logo.png"
          class="lg:w-80 w-44 lg:mt-0 mt-3"
          alt=""
        />
      </div>
      <div class="flex justify-between 1/2 p-2">
        <div class="lg:flex hidden">
          <div class="p-2">Home</div>
          <div class="p-2">About</div>
          <div class="p-2">Contact</div>
        </div>

        <div class="lg:ml-8 lg:mr-0 mr-6 flex lg:w-80 justify-evenly">
          <div class="p-2">
            <a href="https://getartizan-artisan.netlify.app/auth/login/">
              Post a Job
            </a>
          </div>
          <div>
            <a href="https://getartizan-cutomers.netlify.app/auth/login/">
              <input
                type="button"
                class="bg-blue p-2 lg:px-8 px-4 text-white"
                value="Log In"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>