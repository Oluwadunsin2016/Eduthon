<template>
  <AcademicDetails/>
  <StudentDetails/>
  <StudentLoginCredentials/>
  <GuardianDetails/>
  <GuardianLoginCredentials/>
  <GuardianProfilePicture/>
  <PreviousSchoolDetails/>
  <div class="flex justify-center item-center">
     <button
                class="bg-[#003399] hover:bg-[#33518b] px-2 py-1 font-bold text-white rounded shadow-md tracking-wider"
              >
                Enroll Now
              </button>
  </div>
</template>

<script>
import AcademicDetails from '../components/AcademicDetails.vue';
import StudentDetails from '../components/StudentDetails.vue';
import StudentLoginCredentials from '../components/StudentLoginCredentials.vue';
import GuardianDetails from '../components/GuardianDetails.vue';
import GuardianLoginCredentials from '../components/GuardianLoginCredentials.vue';
import GuardianProfilePicture from '../components/GuardianProfilePicture.vue';
import PreviousSchoolDetails from '../components/PreviousSchoolDetails.vue';
export default {
components:{
AcademicDetails,
StudentDetails,
StudentLoginCredentials,
GuardianDetails,
GuardianLoginCredentials,
GuardianProfilePicture,
PreviousSchoolDetails,
}
}
</script>

<style>

</style>