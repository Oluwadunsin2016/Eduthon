<template>
  <div class="my-8">
    <div
      class="flex flex-col gap-4 md:flex-row-reverse md:justify-between px-4"
    >
      <div class="flex items-center gap-4">
        <span class="font-semibold tracking-wider">Guardian Already exists:</span>
        <button @click="handleGuardianExists" type="button" class="bg-green-300 rounded-md py-1 px-3 text-semibold cursor-pointer">
          <span class="text-green-600">Yes</span>
        </button>
        <button @click="handleGuardianDoesNotExists" type="button" class="bg-red-300 rounded-md py-1 px-3 text-semibold cursor-pointer">
          <span class="text-red-600">No</span>
        </button>
      </div>
      <div v-if="this.$store.state.guardian_id>0" class="flex items-center gap-2">
        <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
          <Icon :title="'guardian'" :color="'white'" :size="18" />
        </div>
        <span class="text-[#003399] font-bold tracking-wider text-lg"
          >Guardian Details</span
        >
      </div>
    </div>

    <div v-if="this.$store.state.guardian_id>0" class="m-4 px-4 py-6 rounded-md shadow-md">
      <div class="grid grid-col-1 my-4 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >First Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
v-model="guardian_firstname"
@input="handleGuardianFirstName"
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
            v-model="guardian_lastname"
@input="handleGuardianLastName"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Middle Names <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
           v-model="guardian_middlename"
@input="handleGuardianMiddleName"
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
            v-model="guardian_gender"
@change="handleGuardianGender"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value="" class="text-gray-300">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Relationship <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            v-model="guardian_relationship"
@change="handleGuardianRelationship"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value="" class="text-gray-300">Choose</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
            <option value="Cousin">Cousin</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Religion <span class="text-red-500">*</span></label
          >
          <select
            name=""
            id=""
            required
            v-model="guardian_religion"
@change="handleGuardianReligion"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          >
            <option value="" class="text-gray-300">Choose</option>
            <option value="Christianity">Christianity</option>
            <option value="Islamic">Islamic</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Email <span class="text-red-500">*</span></label
          >
          <input
            type="email"
            required
            v-model="guardian_email"
@input="handleGuardianEmail"
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
            v-model="guardian_mobile"
@input="handleGuardianMobile"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Occupation <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            occupation
            v-model="guardian_occupation"
@input="handleGuardianOccupation"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
       <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >State <span class="text-red-500">*</span></label
          >
               <select name="" id="" @change="handleSelectState" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
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
            @change="handleSelectLga"
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
            v-model="guardian_city"
@input="handleGuardianCity"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
      </div>
      <div class="my-4">
        <label class="block text-gray-500 font-semibold tracking-wide"
          >Permanent Address <span class="text-red-500">*</span></label
        >
        <textarea
          required
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
   data() {
    return {
     guardian_id: 1,
    guardian_firstname: "",
    guardian_lastname: "",
    guardian_middlename: "",
    guardian_gender: "",
    guardian_email: "",
    guardian_mobile: "",
    guardian_city: "",
    guardian_religion: "",
    guardian_occupation: "",
    guardian_relationship: "",
    guardian_state: null,
    guardian_lga: null,
      states: [],
      local_governments: [],
      guardianExists:false
    }
  },
    mounted(){
      axios.get(`${baseUrl}states`,config).then(res=>{
  console.log(res);
this.states= res.data.states;
  }).catch(err=>{

    console.log(err);
    })
  },

  methods:{
    handleSelectState(event){
    console.log(event.target.value);
  const state=this.states.find(state=>state.name==event.target.value);
  this.$store.commit('setGuardianState',state.id)
      axios.get(`${baseUrl}lg_for_a_state/${state.id}`,config).then(res=>{
  console.log(res.data);
this.local_governments= res.data.local_governments
;
  }).catch(err=>{

    console.log(err);
    })
  },

  
    handleSelectLga(event){
      const lga = this.local_governments.find(
        (lga) => lga.name == event.target.value
      );
      this.$store.commit('setGuardianLga',lga.id)
    },

    handleGuardianFirstName(){
this.$store.commit('setGuardianFirstName',this.guardian_firstname)
},
handleGuardianLastName(){
this.$store.commit('setGuardianLastName',this.guardian_lastname)
},
handleGuardianMiddleName(){
this.$store.commit('setGuardianMiddleName',this.guardian_middlename)
},
handleGuardianEmail(){
this.$store.commit('setGuardianEmail',this.guardian_email)
},
// handleGuardianAddress(){
// this.$store.commit('setGuardianAddress',this.email)
// },
handleGuardianGender(){
this.$store.commit('setGuardianGender',this.guardian_gender)
},
handleGuardianReligion(){
this.$store.commit('setGuardianReligion',this.guardian_religion)
},
handleGuardianMobile(){
this.$store.commit('setGuardianMobile',this.guardian_mobile)
},
handleGuardianCity(){
this.$store.commit('setGuardianCity',this.guardian_city)
},
handleGuardianOccupation(){
this.$store.commit('setGuardianOccupation',this.guardian_occupation)
},
handleGuardianRelationship(){
this.$store.commit('setGuardianRelationship',this.guardian_relationship)
},


  handleGuardianExists(){
  this.$store.commit('guardianStatus',0)
  },
  handleGuardianDoesNotExists(){
  this.$store.commit('guardianStatus',1)
  }
  
  },
};
</script>

<style></style>
