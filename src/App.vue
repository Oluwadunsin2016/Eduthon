<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-50">
    <div v-if="showNav">
    <!-- This is the header section -->
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
          <!-- <div class="flex items-center gap-4"> -->
          <div class="!hidden md:!flex items-center gap-4">
            <div class="flex items-center gap-4">
              <img
                class="h-3 w-4 rounded-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png"
                alt="Nigeria_flag"
              />
              <div class="inline cursor-pointer">
                <Icon :title="'square'" :color="'gray'" :size="18" />
              </div>
              <div class="inline cursor-pointer">
                <Icon :title="'moon'" :color="'gray'" :size="18" />
                 <q-tooltip class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Mode</q-tooltip>
              </div>
              <div class="inline cursor-pointer relative">
                <span
                  class="w-4 h-4 text-xs text-center bg-red-500 text-white rounded-full absolute -top-2 -right-1"
                  >1</span
                >
                <Icon :title="'bell'" :color="'gray'" :size="18" />
                 <q-tooltip class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Notification</q-tooltip>
              </div>
              <!-- <div class="inline cursor-pointer">
                <Icon :title="'dot'" :color="'gray'" :size="30" />
              </div> -->
              <div @click="confirm = true" class="inline cursor-pointer">
                <Icon :title="'logout'" :color="'gray'" :size="20" />
                <q-tooltip class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Logout</q-tooltip>
              </div>
            </div>
          </div>
          <q-btn-dropdown
            unelevated
            class="md:!hidden !shadow-none !text-gray-400 !bg-transparent outline-none"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section class="flex justify-center items-center">
                  <img
                    class="h-3 w-4 rounded-sm"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png"
                    alt="Nigeria_flag"
                  />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section class="flex justify-center items-center">
                  <Icon :title="'square'" :color="'gray'" :size="18" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section class="flex justify-center items-center">
                  <Icon :title="'moon'" :color="'gray'" :size="18" />
                   <q-tooltip anchor="top middle" self="bottom middle" class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Mode</q-tooltip>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section class="flex justify-center items-center">
                  <div class="inline cursor-pointer relative">
                    <span
                      class="w-4 h-4 text-xs text-center bg-red-500 text-white rounded-full absolute -top-2 -right-1"
                      >1</span
                    >
                    <Icon :title="'bell'" :color="'gray'" :size="18" />
                     <q-tooltip anchor="top middle" self="bottom middle" class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Notification</q-tooltip>
                  </div>
                </q-item-section>
              </q-item>
              <!-- <q-item clickable v-close-popup>
                <q-item-section class="flex justify-center items-center">
                  <Icon :title="'dot'" :color="'gray'" :size="30" />
                </q-item-section>
              </q-item> -->
              <q-item clickable v-close-popup>
                <q-item-section
                @click="confirm = true"
                  class="flex justify-center items-center"
                >
                  <Icon :title="'logout'" :color="'gray'" :size="20" />
                   <q-tooltip anchor="top middle" self="bottom middle" class="!bg-gray-300 !text-sm !font-semibold !tracking-wider !text-[#003399]">Logout</q-tooltip>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>
<!-- This is the logout confirm section -->
   <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="items-center">
          <span class="q-ml-sm text-medium font-medium">Are you sure you want to log out ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="red" v-close-popup />
          <q-btn flat label="Confirm" color="primary" @click="logout" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

<!-- This is the sidebar drawer section -->
      <q-drawer v-model="leftDrawerOpen" show-if-above class="w-[5rem]">
        <Sidebar />
      </q-drawer>
    </div>

<!-- This the main pages rendering container section -->
    <q-page-container>
      <div class="py-6 px-8">
        <router-view />
      </div>
    </q-page-container>

<!-- This the footer section -->
    <q-footer
      v-if="showNav"
      class="absolute bottom-0 border-t !bg-gray-100 !text-gray-600 border-gray-200 flex flex-col items-center sm:flex-row sm:justify-between px-4 py-2"
    >
      <span>2023 &copy; Delwathon Group of Schools</span>
      <span>Designed and developed by Delwathon IT Solution</span>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Icon from "./components/Icon.vue";
import router from "./router";

export default {
  name: "LayoutDefault",

  components: {
    Sidebar,
    Icon,
  },

  data() {
    return {
      leftDrawerOpen: ref(false),
      showNav: true,
      confirm: ref(false),
    };
  },
  mounted() {
  },
  created() {
    this.$router.afterEach((to, from) => {
      // Update showNav based on the current route
        if (router.hasRoute(to.name)&&to.path !== "/") {
      this.showNav = true;
  } else {
      this.showNav = false;
  }
    });
  },
  methods: {
    logout() {
    this.confirm=false
      localStorage.removeItem("eduthonToken");
      this.$router.push("/");
    },
  },
};
</script>
