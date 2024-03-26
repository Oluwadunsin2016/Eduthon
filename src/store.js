import { createStore } from "vuex";
import router from "./router";
import axios from "axios";
import { baseUrl, config } from "./main";

export default createStore({
  state: {
    session: null,
    enrol_date: "",
    branch: null,
    class: null,
    section: null,
    department: null,
    state: null,
    lga: null,
    firstname: "",
    lastname: "",
    middlename: "",
    gender: "",
    dob: "",
    religion: "",
    bloodgroup: null,
    genotype: null,
    mothertongue: null,
    email: "",
    mobile: "",
    city: "",
    address: null,
    prev_school_name: "",
    prev_school_qualification: "",
    prev_school_remark: "",
    guardian_id: 0,
    guardian_firstname: "",
    guardian_lastname: "",
    guardian_middlename: "",
    guardian_gender: "",
    guardian_email: "",
    guardian_mobile: "",
    guardian_city: "",
    guardian_religion: "",
    guardian_occupation: "",
    guardian_relationship: "",
    guardian_state: null,
    guardian_lga: null,
  },
  mutations: {
    setFirstName(state, payload) {
      state.firstname = payload;
    },
    setLastName(state, payload) {
      state.lastname = payload;
    },
    setMiddleName(state, payload) {
      state.middlename = payload;
    },
    setGender(state, payload) {
      state.gender = payload;
    },
    setState(state, payload) {
      state.state = payload;
    },
    setLga(state, payload) {
      state.lga = payload;
    },
    setDob(state, payload) {
      state.dob = payload;
    },
    setReligion(state, payload) {
      state.religion = payload;
    },
    setBloodGroup(state, payload) {
      state.bloodgroup = payload;
    },
    setGenotype(state, payload) {
      state.genotype = payload;
    },
    setMotherTongue(state, payload) {
      state.mothertongue = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setMobile(state, payload) {
      state.mobile = payload;
    },
    setCity(state, payload) {
      state.city = payload;
    },
    setAddress(state, payload) {
      state.address = payload;
    },
    setEnrolDate(state, payload) {
      state.enrol_date = payload;
    },
    setBranch(state, payload) {
      state.branch = payload;
    },
    setClass(state, payload) {
      state.class = payload;
    },
    setSession(state, payload) {
      state.session = payload;
    },
    setSection(state, payload) {
      state.section = payload;
    },
    setDepartment(state, payload) {
      state.department = payload;
    },
    setPrevSchoolName(state, payload) {
      state.prev_school_name = payload;
    },
    setPrevSchoolQualification(state, payload) {
      state.prev_school_qualification = payload;
    },
    setPrevSchoolRemark(state, payload) {
      state.prev_school_remark = payload;
    },

    guardianStatus(state, payload) {
      state.guardian_id = payload;
    },

    setGuardianFirstName(state, payload) {
      state.guardian_firstname = payload;
    },
    setGuardianLastName(state, payload) {
      state.guardian_lastname = payload;
    },
    setGuardianMiddleName(state, payload) {
      state.guardian_middlename = payload;
    },
    setGuardianGender(state, payload) {
      state.guardian_gender = payload;
    },
    setGuardianState(state, payload) {
      state.guardian_state = payload;
    },
    setGuardianLga(state, payload) {
      state.guardian_lga = payload;
    },
    setGuardianReligion(state, payload) {
      state.guardian_religion = payload;
    },
    setGuardianEmail(state, payload) {
      state.guardian_email = payload;
    },
    setGuardianMobile(state, payload) {
      state.guardian_mobile = payload;
    },
    setGuardianCity(state, payload) {
      state.guardian_city = payload;
    },
    setGuardianAddress(state, payload) {
      state.guardian_address = payload;
    },
    setGuardianRelationship(state, payload) {
      state.guardian_relationship = payload;
    },
    setGuardianOccupation(state, payload) {
      state.guardian_occupation = payload;
    },
  },
  actions: {
    submitForm({ state }) {
      console.log(state);
      axios
        .post(`${baseUrl}admission/single_enrol/${state.branch}`, config)
        .then((res) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
