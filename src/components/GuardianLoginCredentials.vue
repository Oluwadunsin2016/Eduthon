<template>
  <div v-if="!guardianExists" class="my-8">
    <div class="px-4 flex items-center gap-2">
      <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
        <Icon :title="'user_lock'" :color="'white'" :size="18" />
      </div>
      <span class="text-[#003399] font-bold tracking-wider text-lg"
        >Guardian Login Credentials</span
      >
    </div>
    <div class="m-4 px-4 py-6 rounded-md shadow-md">
      <div class="grid grid-col-1 md:grid-cols-3 gap-4 my-4">
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
            >Password <span class="text-red-500">*</span></label
          >
            
          <input
            type="password"
            required
            v-model="formData.password"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Confirm Password <span class="text-red-500">*</span></label
          >
          <input
            type="password"
            required
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
data(){
return{
guardianExists:false
}
},
  components: {
    Icon,
  },
  props: {
    formData: Object,
  },
mounted(){
window.emitter.on('guardianExists',(status)=>{
this.guardianExists=status
})
},

  watch: {
    formData: {
      deep: true,
      handler(newValue) {
        this.$emit("update:formData", newValue);
      },
    },
  },
};
</script>

<style></style>
