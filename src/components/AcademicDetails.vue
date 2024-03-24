<template>
  <div class='my-8'>
  <div class="px-4 flex items-center gap-2">
  <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
 <Icon :title="'academic'" :color="'white'" :size="18" />
  </div>
  <span class="text-[#003399] font-bold tracking-wider text-lg">Academic Details</span>
  </div>

    <form class="m-4 px-4 py-6 rounded-md shadow-md" >
    <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-4">
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Academic Session <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Register No <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Roll No <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Enroll Date <span class="text-red-500">*</span></label>
            <input type="date" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
    </div>
    <div class="grid grid-col-1 md:grid-cols-3 gap-4 my-4">
     
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Class <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Select class</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Section <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Select section</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Department <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Select department</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
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