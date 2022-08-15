<script>
import axios from "axios";
import router from "../router";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  data() {
    return {
      users: "",
      artizan: "",
      _user: null,
      modal: false,
      modal2: false,
      name: "",
      time: "",
      email: "",
      date: "",
      phone: "",
      address: "",
      description: "",
      loading: false,
    };
  },
  mounted() {
    this.users = JSON.parse(localStorage.getItem("users"));
    this._user = JSON.parse(localStorage.getItem("_user"));
    if (this._user === null) {
    } else {
      this.name = this._user.name;
      this.email = this._user.email;
      this.phone = this._user.phone;
      this.address = this._user.address;
    }
  },
  methods: {
    bookArtizian() {
      if (this._user === null) {
        localStorage.setItem(
          "_user",
          JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
          })
        );
        this.book();
        this.loading = false;
        this.modal2 = false;
        router.push("/");
      } else {
        this.book();
        this.loading = false;
        this.modal2 = false;
        router.push("/");
      }
    },
    book() {
      this.loading = true;
      axios
        .post("https://getartizan.herokuapp.com/artizan/bookArtizan", {
          user: this.artizan,
          name: this._user.name,
          time: this.time,
          email: this._user.email,
          date: this.date,
          phone: this._user.phone,
          address: this._user.address,
          description: this.description,
        })
        .then(function (response) {
          console.log(response.data);
          toast.success(response.data.message);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div>
    <div class="lg:p-8 p-2">
      <div
        v-for="user in users"
        :key="user._id"
        class="bg-gray-100 rounded-md lg:p-12 p-4 lg:m-3 lg:flex"
      >
        <div class="text-center lg:w-96">
          <img
            v-if="user.avatar"
            :src="user.avatar"
            class="lg:w-44 lg:h-44 w-32 h-32 mx-auto rounded-full"
            alt=""
          />
          <img
            v-else
            src="../assets/person.png"
            class="lg:w-44 lg:h-44 w-32 h-32 mx-auto rounded-full"
            alt=""
          />
          <!-- <div
            @click="modal = !modal"
            class="
              text-blue
              capitalize
              lg:text-base
              text-sm
              my-2
              cursor-pointer
            "
          >
            View profile & reviews
          </div> -->
          <input
            @click="(modal2 = true), (artizan = _id)"
            type="button"
            value="select & continue"
            class="
              capitalize
              bg-blue
              lg:p-4
              p-2
              text-white
              rounded-md
              w-52
              my-4
            "
          />
          <!-- <div class="my-3 text-sm text-gray-800 sm:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quidem iusto repellendus ipsam vero ea veritatis exercitationem?
          </div> -->
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
              <div class="lg:text-4xl text-2xl font-bold">{{ user.name }}</div>
              <div class="lg:text-base text-sm text-gray-800">
                <div class="my-1 capitalize">{{ user.specialty }}</div>
                <!-- <div class="my-1">4.9 (9 reviews)</div> -->
                <div class="my-1">100% reliable</div>
              </div>
            </div>
            <div>
              <!-- <div class="lg:text-2xl text-lg">#100,000/hr</div> -->
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
              {{ user.description }}<br />
              <span class="text-blue">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="modal">
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
                  lg:h-16
                  w-52
                  lg:m-8
                "
                @click="(modal = false), (modal2 = true)"
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
    </div> -->

    <div v-if="modal2">
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
            lg:w-1/2
            shadow-lg
            mx-auto
            h-full
            z-50
            rounded-md
            bg-white
            overflow-y-scroll
          "
        >
          <button
            class="px-6 py-3 float-right text-xl"
            @click="modal2 = !modal2"
          >
            x
          </button>
          <div class="m-12">
            <div class="text-center text-3xl font-black">
              Enter Booking Details
            </div>
            <div class="my-3">
              <input
                type="text"
                class="p-3 border border-gray w-full"
                placeholder="Enter your Name"
                v-model="name"
              />
            </div>
            <div class="my-3">
              <input
                type="text"
                class="p-3 border border-gray w-full"
                placeholder="Enter your Email"
                v-model="email"
              />
            </div>
            <div class="my-3">
              <input
                type="number"
                class="p-3 border border-gray w-full"
                placeholder="Enter your Phone Number"
                v-model="phone"
              />
            </div>
            <div class="my-3">
              <textarea
                class="p-3 border border-gray w-full"
                placeholder="Enter your Address"
                rows="2"
                v-model="address"
              ></textarea>
            </div>
            <div class="my-3">
              <textarea
                class="p-3 border border-gray w-full"
                placeholder="Enter your Job Description"
                rows="5"
                v-model="description"
              ></textarea>
            </div>
            <div class="my-3 flex">
              <input type="date" class="p-3 border border-gray w-full" />
              <input type="time" class="p-3 border border-gray w-full" />
            </div>
            <div class="mt-5 text-center">
              <button
                class="bg-blue p-3 text-white border-none w-44"
                @click="bookArtizian"
              >
                {{ loading ? "Loading.." : " Book Now" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>