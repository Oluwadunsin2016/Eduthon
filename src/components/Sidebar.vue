<template>
    <div class="bg-gradient-to-b from-[#05AA63] !h-full overflow-hidden to-[#2B3A98] max-w-[300px]">
<div class="q-pa-md q-gutter-sm">
<div class="text-gray-100 flex items-center gap-4">
<p>
<q-icon size="lg"  name="school" />
</p>
<p class="text-2xl font-[900] tracking-[0.3rem]">Eduthon</p>
</div>
<div class="flex justify-center items-center">
    <div class="w-[7rem] h-[7rem] rounded-full overflow-hidden border-2 border-gray-100">
      <img class="w-full h-full object-cover" src="https://cdn.quasar.dev/img/avatar.png">
    </div>
</div>
    
  </div>
     <h3 class="text-gray-100  text-[16px] font-[900] tracking-wider px-5 uppercase">Menu</h3>
  <div class="scrollbar-style overflow-y-scroll !h-[60vh]">
        <q-list padding class="rounded-borders">
      <q-expansion-item
        icon="grid_view"
        label="Dashboard"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple to="/branches" exact>
        <q-item-section avatar>
          <q-icon name="zoom_out_map" />
        </q-item-section>
        <q-item-section>Branches</q-item-section>
      </q-item>
      <q-expansion-item
        icon="person_add"
        label="Enroll"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list class="ms-5">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>New Student</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>Multiple Enroll</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="person"
        label="Students"
        color="white"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="library_books"
        label="Academics"
        class="text-gray-200 font-semibold tracking-wider"
      >
               <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      <q-expansion-item
        icon="person_add"
        label="Enroll"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list class="ms-5 font-normal">
      <q-item clickable v-ripple to="/enroll_student" exact>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>New Student</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/multiple" exact>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>Multiple Enroll</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      </q-expansion-item>
      <q-expansion-item
        icon="event_note"
        label="Class Schedule"
        class="text-gray-200 font-semibold tracking-wider"
      >
            <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="event_note"
        label="Attendance"
        class="text-gray-200 font-semibold tracking-wider"
      >
            <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="event_note"
        label="Guardians"
        class="text-gray-200 font-semibold tracking-wider"
      >
            <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="event_note"
        label="Exam Master"
        class="text-gray-200 font-semibold tracking-wider"
      >
            <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>

    </q-list>
     <h3 class="text-gray-100 text-[16px] font-[900] tracking-wider px-5  uppercase mt-6">Administration</h3>
        <q-list padding class="rounded-borders">
      <q-expansion-item
        icon="person"
        label="Employees"
        color="white"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-expansion-item
        icon="library_books"
        label="Student Accounting"
        class="text-gray-200 font-semibold tracking-wider"
      >
               <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      <q-expansion-item
        icon="person_add"
        label="Enroll"
        class="text-gray-200 font-semibold tracking-wider"
      >
           <q-list class="ms-5 font-normal">
      <q-item clickable v-ripple to="/enroll_student" exact>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>New Student</q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/multiple" exact>
        <q-item-section avatar>
          <q-icon name="keyboard_double_arrow_right" />
        </q-item-section>
        <q-item-section>Multiple Enroll</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      </q-expansion-item>
      <q-expansion-item
        icon="event_note"
        label="Office Accounting"
        class="text-gray-200 font-semibold tracking-wider"
      >
            <q-list bordered separator class="bg-[#138177] ps-4">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="schedule" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="history" />
        </q-item-section>
        <q-item-section>something</q-item-section>
      </q-item>

    </q-list>
      </q-expansion-item>
      <q-list class="text-gray-200 font-semibold tracking-wider">
      
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="verified_user" />
        </q-item-section>
        <q-item-section>Role & Permission</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon size="" name="settings" />
        </q-item-section>
        <q-item-section>Setting</q-item-section>
      </q-item>
      </q-list>
    </q-list>
  </div>
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.scrollbar-style {
  height: 300px; 
  width: 100%; 
  overflow-y: auto; 

  scrollbar-width: none;
  -ms-overflow-style: none;

}
  .scrollbar-style::-webkit-scrollbar {
    width: 12px; 
  }

  .scrollbar-style::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  .scrollbar-style::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 6px; 
  }

  .scrollbar-style::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
</style>