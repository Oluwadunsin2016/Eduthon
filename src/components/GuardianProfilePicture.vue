<template>
  <div v-if="this.$store.state.guardian_id<1" class="my-8">
    <div class="px-4 flex items-center gap-2">
      <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
        <Icon :title="'guardian'" :color="'white'" :size="18" />
      </div>
      <span class="text-[#003399] font-bold tracking-wider text-lg"
        >Guardian Profile Picture</span
      >
    </div>

    <div class="m-4 px-4 py-6 rounded-md shadow-md">
      <div
        :class="`${
          isDraggedOver && 'bg-white border-blue-500'
        } border-2 border-dashed h-[18rem] flex items-center justify-center rounded-xl p-4`"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <div v-if="!display_image" class="flex flex-col justify-center items-center">
          <div
            :class="`${
              isDraggedOver && 'animate-bounce'
            } inline-block p-4 my-5 rounded-full bg-slate-100`"
          >
            <Icon :title="'upload'" :color="'gray'" :size="18" />
          </div>
          <p v-if="!isDraggedOver">
            <label
              for="fileInput"
              class="text-blue-400 font-medium cursor-pointer inline"
            >
              Click to add
              <input
                type="file"
                @change="handleFileChange"
                class="hidden"
                id="fileInput"
              />
            </label>
            <span> or drag and drop </span>
          </p>
          <p class="text-blue-400 font-medium" v-if="isDraggedOver">
            Drop here
          </p>
          <p class="text-gray-300">PNG, JPG or JPEG (max. 800x400px)</p>
        </div>
        <div
          class="border rounded h-[16rem] md:sm-[60%] md:w-[60%] md:lg-[40%] overflow-hidden flex items-center justify-center"
          v-if="display_image"
        >
          <img
            class="w-full h-full object-top rounded-md object-cover"
            :src="display_image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  data() {
    return {
      display_image: null,
      isDraggedOver: false,
    };
  },
  components: {
    Icon,
  },

  methods: {
 
    handleDragOver(event) {
      this.isDraggedOver = true;
      event.dataTransfer.dropEffect = "copy";
    },
    handleDragLeave() {
      this.isDraggedOver = false;
    },

    handleDrop(event) {
      this.isDraggedOver = false;
      this.display_image = URL.createObjectURL(event.dataTransfer.files[0]);
      this.formData.profile_image = event.dataTransfer.files[0];
    },

       handleFileChange(e) {
    console.log(e)
      this.formData.profile_image = e.target.files[0];
      this.display_image = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>

<style></style>
