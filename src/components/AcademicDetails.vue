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
      <div class="grid grid-col-1 md:grid-cols-2 gap-5 my-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Academic Session <span class="text-red-500">*</span></label
          >
                 <select name="" id="" v-model="session" @change="handleSelectSession" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="session in sessions" :key="session.id" :value="session.name">{{session.name}}</option>
            </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Enroll Date <span class="text-red-500">*</span></label
          >
          <input
            type="date"
            required
            v-model="enrol_date"
              @input="updateDate"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
      </div>
      <div class="grid grid-col-1 md:grid-cols-3 gap-4 my-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Class <span class="text-red-500">*</span></label
          >
      <select name="" id="" @change="handleSelectClass" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="clas in classes" :key="clas.id" :value="clas.name">{{clas.name}}</option>
            </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Section <span class="text-red-500">*</span></label
          >
             <select name="" v-model="section" id="" @change="handleSelectSection" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="section in sections" :key="section.id" :value="section.name">{{section.name}}</option>
            </select>
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Department <span class="text-red-500">*</span></label
          >
             <select name="" id="" @change="handleSelectDepartment" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm `">
            <option value="" class="text-gray-300">Select</option>
            <option v-for="department in departments" :key="department.id" :value="department.name">{{department.name}}</option>
            </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Icon from './Icon.vue'
import Icon from "./Icon.vue";
import axios from 'axios';
import { baseUrl, config } from '../main';
export default {
  components: {
    Icon,
  },
      props: {
    formData: Object,
  },
  watch: {
    formData: {
      deep: true,
      handler(newValue) {
        this.$emit("update:formData", newValue);
      },
    },
  },
  data() {
    return {
    session: null,
    enrol_date: '',
    branch: null,
    clas: null,
    section: null,
    department: null,
    state: null,
    lga: null,
      sessions:[],
      classes: [],
      sections:[],
      departments:[],
    }
  },
  mounted(){
    axios.get(`${baseUrl}academics/sessions`,config).then(res=>{
this.sessions= res.data.sessions;
  }).catch(err=>{

    console.log(err);
    })

const branch=this.$store.state.student_information.branch
if (branch) {
    axios.get(`${baseUrl}academics/filter/branch_classes/${branch}`,config).then(res=>{
this.classes= res.data.branch_classes;
  }).catch(err=>{

    console.log(err);
    })
}
 
  },

  methods:{
updateDate(){
  this.$store.commit('setEnrolDate',this.enrol_date)
},
  
  handleSelectClass(event){
  const clas=this.classes.find(cl=>cl.name==event.target.value);
  this.$store.commit('setClass',clas.id)
      axios.get(`${baseUrl}academics/filter/class_sections/${clas.id}`,config).then(res=>{
this.sections= res.data.branch_class_sections
;
  }).catch(err=>{

    console.log(err);
    })
  },
  handleSelectSection(event){
  const section=this.sections.find(section=>section.name==event.target.value);
  this.$store.commit('setSection',section.id)
  const branch=this.$store.state.student_information.branch
      axios.get(`${baseUrl}academics/filter/branch_departments/${branch}`,config).then(res=>{
this.departments= res.data.branch_departments
;
  }).catch(err=>{

    console.log(err);
    })
  },
  handleSelectSession(event){
  const session=this.sessions.find(session=>session.name==event.target.value);
  this.$store.commit('setSession',session.id)
  },
  handleSelectDepartment(event){
  const department=this.departments.find(department=>department.name==event.target.value);
  this.$store.commit('setDepartment',department.id)
  },
  }
};
</script>

<style></style>
