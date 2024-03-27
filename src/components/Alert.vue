<template>
  <div v-if="this.$store.state.alert_information.status" :class="`fixed top-[5rem] text-gray-100 z-[999] ${bgColor} right-5 shadow  p-4 rounded slideIn`">
      <p class="absolute top-0 right-2 cursor-pointer" @click="close">x</p>
      <div class="flex items-center gap-1"><Icon :title="icon" :color="'white'" :size="18" /><span class="text-lg max-w-[20rem] font-medium tracking-wide">{{this.$store.state.alert_information.message}}</span></div>
      </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
name:'Alert',
components:{
Icon
},
computed:{
bgColor(){
if (this.$store.state.alert_information.type=='error') {
    return 'bg-red-500'
} 
else if(this.$store.state.alert_information.type=='success') {
    return 'bg-green-500'   
}
else if(this.$store.state.alert_information.type=='warning') {
    return 'bg-yellow-500'   
}
},
icon(){
if (this.$store.state.alert_information.type=='error') {
    return 'error'
} 
else if(this.$store.state.alert_information.type=='success') {
    return 'success'
}
else if(this.$store.state.alert_information.type=='warning') {
    return 'warning'
}

}
},
methods: {
  close() {
    this.$store.dispatch('showAlert',{
      type:'success',
      message:'This the alart Message',
      status:false,
      })
  },
},
}
</script>

<style scoped>
.slideIn {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    right: -5rem;
  }
  to {
    opacity: 1;
    right: 1.25rem;
  }
}
</style>