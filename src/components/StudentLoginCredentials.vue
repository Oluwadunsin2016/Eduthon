<template>
  <div class='my-8'>
  <div class="px-4 flex items-center gap-2">
  <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
 <Icon :title="'user_lock'" :color="'white'" :size="18" />
  </div>
  <span class="text-[#003399] font-bold tracking-wider text-lg">Student Login Credentials</span>
  </div>

    <form class="m-4 px-4 py-6 rounded-md shadow-md" >
    <div class="grid grid-col-1 md:grid-cols-3 gap-4 my-4">
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
      <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Confirm Password <span class="text-red-500">*</span></label>
            <input type="password" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
    </div>
    
      </form>
  </div>
</template>

<script>
// import Icon from './Icon.vue'
import Icon from './Icon.vue'
export default {
components:{
Icon
}
}
</script>

<style>

</style>