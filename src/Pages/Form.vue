<template>
  <form @submit.prevent="submitForm">
    <AcademicDetails />
    <StudentDetails />
    <StudentLoginCredentials />
    <GuardianDetails />
    <GuardianProfilePicture />
    <PreviousSchoolDetails />
    <GuardianLoginCredentials />
    <div class="flex justify-center item-center">
      <q-btn
        type="submit"
        :class="` text-white ${this.$store.state.loading?'!bg-[#6c85b6]':'!bg-[#003399]'} min-w-[9rem] text-center`"
      >
        <q-spinner v-if="this.$store.state.loading" size="md" />
        <span class="!font-semibold  tracking-wider" v-else>Enroll Now</span>
      </q-btn>
    </div>
    <Alert />
  </form>
</template>

<script>
import AcademicDetails from "../components/AcademicDetails.vue";
import StudentDetails from "../components/StudentDetails.vue";
import StudentLoginCredentials from "../components/StudentLoginCredentials.vue";
import GuardianDetails from "../components/GuardianDetails.vue";
import GuardianLoginCredentials from "../components/GuardianLoginCredentials.vue";
import GuardianProfilePicture from "../components/GuardianProfilePicture.vue";
import PreviousSchoolDetails from "../components/PreviousSchoolDetails.vue";
import Alert from "../components/Alert.vue";
import { useQuasar } from "quasar";

export default {
  components: {
    AcademicDetails,
    StudentDetails,
    StudentLoginCredentials,
    GuardianDetails,
    GuardianLoginCredentials,
    GuardianProfilePicture,
    PreviousSchoolDetails,
    Alert,
  },

  data() {
    return {};
  },

  methods: {
    submitForm() {
      this.$store.dispatch("submitForm");
    },
  },
};
</script>

<style></style>
