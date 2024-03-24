<template>
  <div class="">
    <div class="py-6 px-4 shadow-md rounded md:!w-[60%] mx-auto my-8">
    <p class="text-[#003399] font-bold tracking-wider text-lg">
      Enter your Login Credentials
    </p>
      <div class="my-4 flex flex-col gap-4">
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Email <span class="text-red-500">*</span></label>
            <input type="email" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
      <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Password <span class="text-red-500">*</span></label>
            <input type="password" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
      </div>
      <div class="flex justify-end">
        <button
          class="rounded px-3 py-2 shadow bg-[#003399] text-white font-bold tracking-widest flex items-center gap-2 hover:text-[#3c578d]"
          @click="login"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";
export default {
  components: {
    Icon,
  },

  methods:{
  login(){
  this.$router.push('/');
  }
  }
};
</script>

<style></style>
