<script>
export default {
  data() {
    return {
      modal: false,
    };
  },
};
</script>
<template>
  <div>
    <div class="lg:p-8 p-2">
      <div class="bg-gray-100 rounded-md lg:p-12 p-4 lg:m-3 lg:flex">
        <div class="text-center lg:w-96">
          <img
            src="../assets/user.jpg"
            class="lg:w-44 lg:h-44 w-32 h-32 mx-auto rounded-full"
            alt=""
          />
          <div @click="modal = !modal" class="text-blue capitalize lg:text-base text-sm my-2 cursor-pointer">
            View profile & reviews
          </div>
          <input
            type="button"
            value="select & continue"
            class="capitalize bg-blue lg:p-4 p-2 text-white rounded-md w-52"
          />
          <div class="my-3 text-sm text-gray-800 sm:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quidem iusto repellendus ipsam vero ea veritatis exercitationem?
          </div>
        </div>
        <div class="lg:w-full lg:ml-20">
          <div
            class="
              flex
              justify-between
              border border-x-0 border-t-0
              lg:pb-6
              pb-3
              my-3
              lg:my-6
            "
          >
            <div>
              <div class="lg:text-4xl text-2xl font-bold">Alabo excel</div>
              <div class="lg:text-base text-sm text-gray-800">
                <div class="my-1">Tailor/dress maker</div>
                <div class="my-1">4.9 (9 reviews)</div>
                <div class="my-1">100% reliable</div>
              </div>
            </div>
            <div>
              <div class="lg:text-2xl text-lg">#100,000/hr</div>
              <input
                type="button"
                value="Great value"
                class="p-2 rounded-xl mt-1 text-xs w-28 bg-blue text-white"
              />
            </div>
          </div>
          <div>
            <div class="text-lg font-bold mb-2">How i can help:</div>
            <div class="lg:text-base text-sm text-gray-800 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              vitae eius culpa? Ratione, totam tenetur? Adipisci numquam
              deserunt amet reprehenderit, delectus neque, alias ratione omnis
              vel sit aliquid eum similique, blanditiis illo ex voluptatum
              dicta. Sequi maxime possimus neque quasi dolorem, reiciendis dolor
              ea repudiandae, dicta ut quo, tenetur iusto! <br />
              <span class="text-blue">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modal">
      <div
        class="
          bg-gray-600
          opacity-90
          fixed
          w-full
          h-full
          overflow-y-auto
          inset-0
          fade
        "
      ></div>
      <div class="fixed top-0 h-full lg:p-6 p-3 w-full z-30">
        <div
          class="
            lg:w-2/3
            shadow-lg
            mx-auto
            h-full
            z-50
            rounded-md
            bg-white
            overflow-y-scroll
          "
        >
          <button class="px-6 py-3 float-right text-xl" @click="modal = !modal">
            x
          </button>
          <div>
            <div class="lg:flex sm:text-center p-6">
              <img
                src="../assets/user.jpg"
                class="lg:w-44 lg:h-44 sm:mx-auto w-32 h-32 rounded-full"
                alt=""
              />
              <div class="lg:m-8">
                <div class="lg:text-4xl text-2xl font-bold">Alabo excel</div>
                <div class="lg:text-base text-sm text-gray-800">
                  <div class="my-1">Tailor/dress maker</div>
                </div>
              </div>
              <input
                type="button"
                value="select & continue"
                class="
                  capitalize
                  bg-blue
                  lg:p-4
                  p-2
                  text-white
                  rounded-md
                  h-16
                  w-52
                  lg:m-8
                "
              />
            </div>
            <div class="lg:m-6 m-3 p-4 bg-gray-100 rounded-md">
              <div class="text-lg font-bold mb-2">About Me</div>
              <div class="lg:text-base text-sm text-gray-800 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vitae eius culpa? Ratione, totam tenetur? Adipisci numquam
                deserunt amet reprehenderit, delectus neque, alias ratione omnis
                vel sit aliquid eum similique, blanditiis illo ex voluptatum
                dicta. Sequi maxime possimus neque quasi dolorem, reiciendis
                dolor ea repudiandae, dicta ut quo, tenetur iusto!
              </div>
            </div>
            <div class="lg:m-6 m-3 p-4 bg-gray-100 rounded-md">
              <div class="text-lg font-bold mb-2">Skills and Experience</div>
              <div class="lg:text-base text-sm text-gray-800 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vitae eius culpa? Ratione, totam tenetur? Adipisci numquam
                deserunt amet reprehenderit, delectus neque, alias ratione omnis
                vel sit aliquid eum similique, blanditiis illo ex voluptatum
                dicta. Sequi maxime possimus neque quasi dolorem, reiciendis
                dolor ea repudiandae, dicta ut quo, tenetur iusto!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>