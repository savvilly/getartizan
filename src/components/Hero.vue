<template>
  <div class="bg-gray-100">
    <div class="py-32 lg:mx-auto mx-4 lg:w-3/5 text-center">
      <div class="lg:text-6xl text-4xl font-bold capitalize">
        find your <span class="text-blue">dream job</span> here easy and fast
      </div>
      <div class="text-lg lg:px-20 mt-4">
        finding proper jobs can be so tough, here you can get your desired dream
        job without any stress and in less time
      </div>
      <div class="lg:flex mt-10 justify-center">
        <input type="text" placeholder="Search job by title" class="p-3 lg:w-auto w-full lg:mb-0 mb-2" />
        <input type="text" placeholder="Search job by location" class="p-3 lg:w-auto w-full lg:mb-0 mb-2" />
        <input
          type="button"
          class="p-3 px-14 lg:w-auto w-full lg:rounded-md bg-blue text-white"
          value="Search"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
input:focus {
  outline: none;
}
</style>