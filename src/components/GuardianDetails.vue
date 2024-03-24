<template>
  <div class="my-8">
 <div class="flex flex-col gap-4 md:flex-row-reverse md:justify-between px-4">
 <div class="flex items-center gap-4">
 <span>Guardian Already exists:</span>
 <button class="bg-green-300 rounded-md py-1 px-3 text-semibold"><span class="text-green-600">Yes</span></button>
 <button class="bg-red-300 rounded-md py-1 px-3 text-semibold"><span class="text-red-600">No</span></button>
 </div>
  <div class="flex items-center gap-2">
  <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
 <Icon :title="'guardian'" :color="'white'" :size="18" />
  </div>
  <span class="text-[#003399] font-bold tracking-wider text-lg">Guardian Details</span>
  </div>
 </div>

    <form class="m-4 px-4 py-6 rounded-md shadow-md" >
    
      <div class="grid grid-col-1 my-4 md:grid-cols-3 gap-4">
       <div>
            <label class="block text-gray-500 font-semibold tracking-wide">First Name <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Last Name <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Other Names <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Gender <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
           <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Relationship <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
            <option value="Cousin">Cousin</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
           <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Religion <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="Christianity">Christianity</option>
            <option value="Islamic">Islamic</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Email <span class="text-red-500">*</span></label>
            <input type="email" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Phone Number <span class="text-red-500">*</span></label>
            <input type="tel" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
     <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Occupation <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">State <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="Oyo State">Oyo State</option>
            <option value="Lagos">Lagos</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Local Government <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="Oriire Local Government">Oriire Local Government</option>
            <option value="Suuru Lere">Suuru Lere</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
          <div>
            <label class="block text-gray-500 font-semibold tracking-wide">City <span class="text-red-500">*</span></label>
            <input type="text" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
    </div>
     <div class="my-4">
            <label class="block text-gray-500 font-semibold tracking-wide">Parrent Address <span class="text-red-500">*</span></label>
            <textarea :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"></textarea>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
      </form>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
components:{
Icon
}
}
</script>

<style>

</style>