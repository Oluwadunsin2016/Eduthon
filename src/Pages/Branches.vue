<template>
  <div class="md:!w-[80%] mx-auto my-4">
  <p class="text-[#003399] font-bold tracking-wider text-lg">Enroll New Student</p>
  <div class="py-6 px-4 shadow-md rounded">
    <div class="my-4 w-[60%] mx-auto">
            <label class="block text-gray-500 font-semibold tracking-wide">Branches <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
          </div>
          <div class="flex justify-end">
          <button class="rounded px-3 py-2 shadow  bg-[#003399] text-white font-bold tracking-widest flex items-center gap-2 hover:text-[#3c578d]" @click="proceed"><span>Proceed</span> 
          <Icon :title="'arrow_right'" :color="'white'" :size="18" /></button>
          </div>
  </div>
          
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'
export default {
components:{
Icon
},
  methods:{
  proceed(){
  this.$router.push('/enroll');
  }
  }
}
</script>

<style>

</style>