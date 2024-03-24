<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-50">
<div v-if="showNav">
    <q-header class="h-16 !bg-gray-100 shadow flex items-center">
      <q-toolbar class="flex justify-between items-center px-5">
<div class="flex items-center gap-2">
      <div class="md:hidden">
        <q-btn
          flat
          dense
          round
          class="!text-gray-600"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
      </div>
 <div class="relative">
          <input
            type="text"
            name=""
            class="w-full py-2 ps-8 pe-2 text-sm outline-none rounded border"
            placeholder="Search..."
          />
          <div class="absolute top-3 left-2">
          <Icon :title="'search'" :color="'gray'" :size="18" />
          </div>
        </div>
</div>
<div class="flex items-center gap-4">
<!-- <div class="hidden md:!flex items-center gap-4 "> -->
<div  class="flex items-center gap-4 ">
<img class="h-3 w-4 rounded-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png" alt="Nigeria_flag">
<div class="inline cursor-pointer">
          <Icon :title="'square'" :color="'gray'" :size="18" />
</div>
<div class="inline cursor-pointer">
          <Icon :title="'moon'" :color="'gray'" :size="18" />
</div>
<div class="inline cursor-pointer relative">
<span class="w-4 h-4 text-xs text-center bg-red-500 text-white rounded-full absolute -top-2 -right-1">1</span>
          <Icon :title="'bell'" :color="'gray'" :size="18" />
</div>
<div class="inline cursor-pointer">
          <Icon :title="'dot'" :color="'gray'" :size="30" />
</div>
</div>
<div class="inline cursor-pointer">
          <Icon :title="'arrow_down'" :color="'gray'" :size="18" />
</div>
</div>
      </q-toolbar>
    </q-header>



    <q-drawer
      v-model="leftDrawerOpen"
      
      show-if-above
      class="w-[5rem]"
    >
   <Sidebar/>
    </q-drawer>
</div>

    <q-page-container>
    <div class="py-6 px-8">
    <router-view/>
    </div>
    </q-page-container>

<q-footer v-if="showNav" class="absolute bottom-0 border-t !bg-gray-100 !text-gray-600 border-gray-200 flex flex-col items-center sm:flex-row sm:justify-between px-4 py-2">
         <span>2023 &copy; Delwathon Group of Schools</span>
  <span>Designed and developed by Delwathon IT Solution</span>
      </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Icon from './components/Icon.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Sidebar,
    Icon
  },

  data () {
    return {
      leftDrawerOpen: ref(false),
      showNav: true,
    }
  },
  mounted(){
  // this.$router.push('/login');
  },

    created() {
    this.$router.afterEach((to, from) => {
      // Update showNav based on the current route
      this.showNav = to.path !== '/login';
    });
  },
}
</script>
