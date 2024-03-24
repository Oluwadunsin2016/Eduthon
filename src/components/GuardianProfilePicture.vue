<template>
  <div class='my-8'>
  <div class="px-4 flex items-center gap-2">
  <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
 <Icon :title="'guardian'" :color="'white'" :size="18" />
  </div>
  <span class="text-[#003399] font-bold tracking-wider text-lg">Guardian Profile Picture</span>
  </div>

    <div class="m-4 px-4 py-6 rounded-md shadow-md" >
   <div class="border-2 border-dashed rounded-xl p-4">
                  <div class="flex flex-col justify-center items-center">
                    <div class="inline-block p-4 my-5 rounded-full bg-slate-100">
                      <Icon :title="'upload'" :color="'gray'" :size="18" />
                    </div>
                    <p>
                      <label for="fileInput" class="text-blue-400 font-medium cursor-pointer inline">
                        Click to add
                        <input type="file" @change="handleFileChange" class="hidden" id="fileInput" />
                      </label>
                      <span>
                      or drag and drop
                      </span>
                    </p>
                    <p class="text-gray-300">
                      PNG, JPG or JPEG (max. 800x400px)
                    </p>
                  </div>
                </div>
    
      </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
components:{
Icon
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

  methods:{
     handleFileChange(e) {
      this.formData.profile_image = e.target.files[0];
    },
  }
}
</script>

<style>

</style>