<template>
  <div class="my-8">
  <div class="px-4 flex items-center gap-2">
  <div class="p-2 bg-[#003399] rounded-tl-lg rounded-bl-lg">
 <Icon :title="'user'" :color="'white'" :size="18" />
  </div>
  <span class="text-[#003399] font-bold tracking-wider text-lg">Student Details</span>
  </div>

    <form class="m-4 px-4 py-6 rounded-md shadow-md" >
    <div class="grid grid-cols-1 gap-4 my-4 md:grid-cols-8">
    <div class="md:col-span-2 flex flex-col gap-4">
    <div class="border rounded h-[10rem] flex items-center justify-center">
    <Icon :title="'image'" :color="'#05AA63'" :size="100" />
    </div>
     <!-- <input
          type="file"
          name="image"
          id="file"
          class="border border-gray-300 bg-transparent w-full rounded outline-none focus:border-indigo-400 p-2 shadow-sm"
        /> -->
          <div class="">
            <div
              class="bg-gray-100 p-1 rounded-lg flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            >
              <!-- onClick={() => fileInputRef.current.click()} -->
                <!-- ref={fileInputRef}
                onChange={handleFileInputChange} -->
              <input
                type="file"
                class="hidden"
                id="fileInput"
              />
              <!-- <p class="ms-2">{attachmentFile?.name}</p> -->
              <button
                class="bg-[#003399] hover:bg-[#33518b] px-2 py-1 text-white rounded-md shadow font-medium"
              >
                Browse
              </button>
            </div>
          </div>
    </div>
    <div class="grid grid-col-1 md:col-span-6 md:grid-cols-2 gap-4">
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
            <label class="block text-gray-500 font-semibold tracking-wide">Date of Birth <span class="text-red-500">*</span></label>
            <input type="date" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `"  />
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
            <label class="block text-gray-500 font-semibold tracking-wide">Genotype <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="AA">AA</option>
            <option value="AC">AC</option>
            <option value="AS">AS</option>
            <option value="CS">CS</option>
            <option value="CC">CC</option>
            <option value="SS">SS</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
           <div>
            <label class="block text-gray-500 font-semibold tracking-wide">Blood Group <span class="text-red-500">*</span></label>
            <select name="" id="" :class="`border bg-transparent dark:focus:border-indigo-600 w-full rounded outline-none focus:border-indigo-400 p-2 `">
            <option value="" class="text-gray-300">Choose</option>
            <option value="O+">O+</option>
            <option value="AB">AB</option>
            </select>
            <!-- <small class="text-xs errorMessage">{{ errorMessage.firstName }}</small> -->
          </div>
    </div>
    </div>
      <div class="grid grid-col-1 my-4 md:grid-cols-2 gap-4">
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
            <label class="block text-gray-500 font-semibold tracking-wide">Mother Language <span class="text-red-500">*</span></label>
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
            <label class="block text-gray-500 font-semibold tracking-wide">Student Address <span class="text-red-500">*</span></label>
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