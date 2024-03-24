<template>
  <div class="my-8">
    <div class="px-4 flex items-center gap-2">
      <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
        <Icon :title="'academic'" :color="'white'" :size="18" />
      </div>
      <span class="text-[#003399] font-bold tracking-wider text-lg"
        >Previous School Details</span
      >
    </div>

    <div class="m-4 px-4 py-6 rounded-md shadow-md">
      <div class="grid grid-col-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >School Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            v-model="formData.name"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
        <div>
          <label class="block text-gray-500 font-semibold tracking-wide"
            >Qualification <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            required
            v-model="formData.qualification"
            :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
          />
        </div>
      </div>
      <div>
        <label class="block text-gray-500 font-semibold tracking-wide"
          >Remark <span class="text-red-500">*</span></label
        >
        <textarea
          name=""
          id=""
          required
          v-model="formData.remark"
          :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import Icon from './Icon.vue'
import Icon from "./Icon.vue";
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
};
</script>

<style></style>
