import { createStore } from "vuex";
import router from "./router";
import axios from "axios";
import { baseUrl, config } from "./main";


export default createStore({
  state: {
   student_information:{
    session: null,
    enrol_date: "",
    branch: null,
    class: null,
    section: null,
    department: null,
    state: null,
    lga: null,
    profile_picture: "",
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
    guardian_id: 1,
    guardian_firstname: "",
    guardian_lastname: "",
    guardian_middlename: "",
    guardian_avatar: "",
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
   alert_information:{
   type:'',
   message:'',
   status:false,
   },
   loading:false,
  },
  mutations: {
    setFirstName(state, payload) {
      state.student_information.firstname = payload;
    },
    setLastName(state, payload) {
      state.student_information.lastname = payload;
    },
    setMiddleName(state, payload) {
      state.student_information.middlename = payload;
    },
    setProfilePicture(state, payload) {
      state.student_information.profile_picture = payload;
    },
    setGender(state, payload) {
      state.student_information.gender = payload;
    },
    setState(state, payload) {
      state.student_information.state = payload;
    },
    setLga(state, payload) {
      state.student_information.lga = payload;
    },
    setDob(state, payload) {
      state.student_information.dob = payload;
    },
    setReligion(state, payload) {
      state.student_information.religion = payload;
    },
    setBloodGroup(state, payload) {
      state.student_information.bloodgroup = payload;
    },
    setGenotype(state, payload) {
      state.student_information.genotype = payload;
    },
    setMotherTongue(state, payload) {
      state.student_information.mothertongue = payload;
    },
    setEmail(state, payload) {
      state.student_information.email = payload;
    },
    setMobile(state, payload) {
      state.student_information.mobile = payload;
    },
    setCity(state, payload) {
      state.student_information.city = payload;
    },
    setAddress(state, payload) {
      state.student_information.address = payload;
    },
    setEnrolDate(state, payload) {
      state.student_information.enrol_date = payload;
    },
    setBranch(state, payload) {
      state.student_information.branch = payload;
    },
    setClass(state, payload) {
      state.student_information.class = payload;
    },
    setSession(state, payload) {
      state.student_information.session = payload;
    },
    setSection(state, payload) {
      state.student_information.section = payload;
    },
    setDepartment(state, payload) {
      state.student_information.department = payload;
    },
    setPrevSchoolName(state, payload) {
      state.student_information.prev_school_name = payload;
    },
    setPrevSchoolQualification(state, payload) {
      state.student_information.prev_school_qualification = payload;
    },
    setPrevSchoolRemark(state, payload) {
      state.student_information.prev_school_remark = payload;
    },

    guardianStatus(state, payload) {
      state.student_information.guardian_id = payload;
    },

    setGuardianFirstName(state, payload) {
      state.student_information.guardian_firstname = payload;
    },
    setGuardianLastName(state, payload) {
      state.student_information.guardian_lastname = payload;
    },
    setGuardianMiddleName(state, payload) {
      state.student_information.guardian_middlename = payload;
    },
    setGuardianAvatar(state, payload) {
      state.student_information.guardian_avatar = payload;
    },
    setGuardianGender(state, payload) {
      state.student_information.guardian_gender = payload;
    },
    setGuardianState(state, payload) {
      state.student_information.guardian_state = payload;
    },
    setGuardianLga(state, payload) {
      state.student_information.guardian_lga = payload;
    },
    setGuardianReligion(state, payload) {
      state.student_information.guardian_religion = payload;
    },
    setGuardianEmail(state, payload) {
      state.student_information.guardian_email = payload;
    },
    setGuardianMobile(state, payload) {
      state.student_information.guardian_mobile = payload;
    },
    setGuardianCity(state, payload) {
      state.student_information.guardian_city = payload;
    },
    setGuardianAddress(state, payload) {
      state.student_information.guardian_address = payload;
    },
    setGuardianRelationship(state, payload) {
      state.student_information.guardian_relationship = payload;
    },
    setGuardianOccupation(state, payload) {
      state.student_information.guardian_occupation = payload;
    },
    showAlert(state, payload) {
      state.alert_information.type = payload.type;
      state.alert_information.message = payload.message;
      state.alert_information.status = payload.status;
    },
    showLoading(state, payload) {
      state.loading = payload
    },
  },
  actions: {
    submitForm({ state,dispatch,commit, }) {
      console.log(state);
commit('showLoading',true)
      axios
        .post(`${baseUrl}admission/single_enrol/${state.student_information.branch}`, state.student_information, config)
        .then((res) => {
          console.log(res);
          if (res.status==200) {
commit('showLoading',false)
      dispatch('showAlert',{
      type:'success',
      message:res.data.success,
      status:true,
      }) 
      setTimeout(() => {
      dispatch('showAlert',{
      type:'success',
      message:res.data.success,
      status:false,
      }) 
      }, 3000);    
          }
        })
        .catch((err) => {
          console.log(err);
      //     commit('showLoading',false)
      // dispatch('showAlert',{
      // type:'error',
      // message:res.data.error,
      // status:true,
      // }) 
      // setTimeout(() => {
      // dispatch('showAlert',{
      // type:'error',
      // message:res.data.error,
      // status:false,
      // }) 
      // }, 3000);    
        });
    },

showAlert({commit},payload){
commit('showAlert',payload)
},
 

  },
});
