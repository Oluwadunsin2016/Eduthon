<template>
<section class="bg-white shadow">
  <div class="lg:grid lg:min-h-[92vh] lg:grid-cols-12">
    <section class="relative flex h-40 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://learn.canva.com/wp-content/uploads/2019/01/education-is-important.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-80"
      />
<div class="bg-black/60 absolute top-0 w-full h-full">

</div>
    </section>

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="w-full">
        <div class="relative -mt-16 block lg:hidden text-[#252424]">
          <a
            class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span class="sr-only">Home</span>
         <Icon :title="'graduation'" :color="'#252424'" :size="50" />
          </a>

          <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Eduthon
          </h1>

          <p class="mt-4 font-normal text-lg tracking-wide text-gray-500">
            Welcome to Eduthon University, where knowledge knows no bounds and learning becomes an exhilarating journey.
          </p>
        </div>

         <form @submit.prevent="submitForm" class="my-8">
    <p class="text-[#003399] font-bold tracking-wider text-lg">
      Enter your Login Credentials
    </p>
      <div class="my-4 flex flex-col gap-4">
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Email <span class="text-red-500">*</span></label>
            <input type="email" v-model="loginDetails.email" required :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
          </div>
      <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Password <span class="text-red-500">*</span></label>
            <input type="password" v-model="loginDetails.password" required :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
          </div>
      </div>
      <div class="flex justify-end">
        <button
        type="submit"
          class="rounded px-3 py-2 shadow bg-[#003399] text-white font-bold tracking-widest flex items-center gap-2 hover:text-[#3c578d]"
        >
          Submit
        </button>
      </div>
    </form>
      </div>
    </main>
  </div>
</section>

  <!-- <div class="">
  </div> -->
</template>

<script>
import axios from "axios";
import Icon from "../components/Icon.vue";
import { baseUrl } from "../main";
export default {
data(){
return{
loginDetails:{
email:'',
password:'',
}
}
},
  components: {
    Icon,
  },

  methods:{
  submitForm(){
  console.log(this.loginDetails);
  axios.post(`${baseUrl}login`,this.loginDetails).then(res=>{
   if (res.data.token) {
      sessionStorage.setItem('eduthonToken',res.data.token)

    // this.$router.push('/')
     location.replace('/dashboard')
    }
  }).catch(err=>{

    console.log(err);
    })
  }
  }
};
</script>

<style></style>
