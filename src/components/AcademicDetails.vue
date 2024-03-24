<template>
  <div class="my-8">
    <div class="px-4 flex items-center gap-2">
      <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
        <Icon :title="'academic'" :color="'white'" :size="18" />
      </div>
      <span class="text-[#003399] font-bold tracking-wider text-lg"
        >Academic Details</span
      >
    </div>

    <div class="m-4 px-4 py-6 rounded-md shadow-md">
      <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Academic Session <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Register No <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Roll No <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Enroll Date <span class="text-red-500">*</span></label
          >
          <input
            type="date"
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
      </div>
      <div class="grid grid-col-1 md:grid-cols-3 gap-4 my-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Class <span class="text-red-500">*</span></label
          >
      <select name="" id="" @change="handleSelect" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="clas in classes" :key="clas.id" :value="clas.name">{{clas.name}}</option>
            </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Section <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value="" class="text-gray-300">Select section</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Department <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value="" class="text-gray-300">Select department</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
// import Icon from './Icon.vue'
import Icon from "./Icon.vue";
import axios from 'axios';
import { baseUrl, config } from '../main';
export default {
  components: {
    Icon,
  },
  data() {
    return {
    // branch:{},
      classes: [],
    }
  },
  mounted(){

    axios.get(`${baseUrl}academics/filter/branch_classes/${sessionStorage.getItem('branch').id}`,config).then(res=>{
  console.log(res.data.branch_classes);
this.classes= res.data.branch_classes;
  }).catch(err=>{

    console.log(err);
    })
  window.emitter.on('branch',(branch)=>{
         console.log(branch);
})
 

  }
};
</script>

<style></style>
