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
      <button
        type="submit"
        class="bg-[#003399] hover:bg-[#33518b] px-2 py-1 font-bold text-white rounded shadow-md tracking-wider"
      >
        Enroll Now
      </button>
    </div>
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
export default {
  components: {
    AcademicDetails,
    StudentDetails,
    StudentLoginCredentials,
    GuardianDetails,
    GuardianLoginCredentials,
    GuardianProfilePicture,
    PreviousSchoolDetails,
  },

  data() {
    return {
      formData: {
        student_personal_details: {
          profile_image: "",
          first_name: "",
          last_name: "",
          other_names: "",
          gender: "",
          date_of_birth: "",
          religion: "",
          blood_group: "",
          genotype: "",
          email: "",
          password: "",
          phone_number: "",
          mother_language: "",
          state: "",
          local_government: "",
          city: "",
          address: "",
        },
        academic_details: {
          session: "",
          class: "",
          enroll_date: "",
          section: "",
          department: "",
        },
        previous_school: {
          name: "",
          qualification: "",
          remark: "",
        },
        guardian_information: {
          profile_image: "",
          first_name: "",
          last_name: "",
          other_names: "",
          local_government: "",
          city: "",
          address: "",
          gender: "",
          religion: "",
          relationship: "",
          occupation: "",
          email: "",
          password: "",
        },
      },
    };
  },

  methods: {
    submitForm() {
      this.$store.dispatch("submitForm");
    },
  },
};
</script>

<style></style>
