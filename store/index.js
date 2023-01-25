export const state = () => ({
    userData:{
        email:null,
        password:null
    }
  })
  
  export const getters = {
    getUserInfo(state){
        return state.userData
    }
  }
  
  export const mutations = {
    setUserData(state,data){
        state.userData = data
    }
  }