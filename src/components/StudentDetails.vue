<template>
  <div class="my-8">
    <div class="px-4 flex items-center gap-2">
      <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
        <Icon :title="'user'" :color="'white'" :size="18" />
      </div>
      <span class="text-[#003399] font-bold tracking-wider text-lg"
        >Student Details</span
      >
    </div>

    <div class="m-4 px-4 py-6 rounded-md shadow-md">
      <div class="grid grid-cols-1 gap-4 my-4 md:grid-cols-8">
        <div class="md:col-span-2 flex flex-col gap-4">
          <div
            class="border rounded h-[10rem] flex items-center justify-center"
          >
            <Icon :title="'image'" :color="'#05AA63'" :size="100" />
          </div>
          <div class="">
            <label
              for="fileInput"
              class="bg-gray-100 p-1 rounded-lg flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            >
              <input type="file" @change="handleFileChange" class="hidden" id="fileInput" />
              <span
                class="bg-[#003399] hover:bg-[#33518b] px-2 py-1 text-white rounded-md shadow font-medium"
              >
                Browse
              </span>
            </label>
          </div>
        </div>
        <div class="grid grid-col-1 md:col-span-6 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >First Name <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              required
              v-model="formData.first_name"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            />
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Last Name <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              required
              v-model="formData.last_name"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            />
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Other Names <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              required
              v-model="formData.other_names"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            />
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Gender <span class="text-red-500">*</span></label
            >
            <select
              name=""
              id=""
              required
              v-model="formData.gender"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            >
              <option value="" class="text-gray-300">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Date of Birth <span class="text-red-500">*</span></label
            >
            <input
              type="date"
              required
              v-model="formData.date_of_birth"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            />
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Religion <span class="text-red-500">*</span></label
            >
            <select
              name=""
              id=""
              required
              v-model="formData.religion"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            >
              <option value="" class="text-gray-300">Choose</option>
              <option value="Christianity">Christianity</option>
              <option value="Islamic">Islamic</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Genotype <span class="text-red-500">*</span></label
            >
            <select
              name=""
              id=""
              required
              v-model="formData.genotype"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            >
              <option value="" class="text-gray-300">Choose</option>
              <option value="AA">AA</option>
              <option value="AC">AC</option>
              <option value="AS">AS</option>
              <option value="CS">CS</option>
              <option value="CC">CC</option>
              <option value="SS">SS</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide"
              >Blood Group <span class="text-red-500">*</span></label
            >
            <select
              name=""
              id=""
              required
              v-model="formData.blood_group"
              :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
            >
              <option value="" class="text-gray-300">Choose</option>
              <option value="O+">O+</option>
              <option value="AB">AB</option>
            </select>
          </div>
        </div>
      </div>
      <div class="grid grid-col-1 my-4 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            type="email"
            required
            v-model="formData.email"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Phone Number <span class="text-red-500">*</span></label
          >
          <input
            type="tel"
            required
            v-model="formData.phone_number"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Mother Language <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            v-model="formData.mother_language"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >State <span class="text-red-500">*</span></label
          >
               <select name="" v-model="formData.state" id="" @change="handleSelectState" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="state in states" :key="state.id" :value="state.name">{{state.name}}</option>
            </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Local Government <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            v-model="formData.local_government"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
           <option value="" class="text-gray-300">Select</option>
            <option v-for="local_government in local_governments" :key="local_government.id" :value="local_government.name">{{local_government.name}}</option>
            
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >City <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            v-model="formData.city"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
      </div>
      <div class="my-4">
        <label class="block text-gray-500 font-semibold tracking-wide"
          >Student Address <span class="text-red-500">*</span></label
        >
        <textarea
          required
          v-model="formData.address"
          :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Icon from "./Icon.vue";
import { baseUrl, config } from '../main';
export default {
  components: {
    Icon,
  },
      props: {
    formData: Object,
  },
  data() {
    return {
      states: [],
      local_governments: [],
    }
  },
  watch: {
    formData: {
      deep: true,
      handler(newValue) {
        this.$emit("update:formData", newValue);
      },
    },
  },

  mounted(){
      axios.get(`${baseUrl}states`,config).then(res=>{
this.states= res.data.states;
  }).catch(err=>{

    console.log(err);
    })
  },

  methods:{
   handleFileChange(e) {
      this.formData.profile_image = e.target.files[0];
    },

    handleSelectState(event){
    console.log(event.target.value);
  const state=this.states.find(state=>state.name==event.target.value);
      axios.get(`${baseUrl}lg_for_a_state/${state.id}`,config).then(res=>{
this.local_governments= res.data.local_governments
;
  }).catch(err=>{

    console.log(err);
    })
  },
  
  },

};
</script>

<style></style>
