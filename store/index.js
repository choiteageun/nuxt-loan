import Vuex from "vuex"

const store = () => new Vuex.Store({
  //담아 놓을 데이터 저장소
  state :{
    info:{
      id: 0,
      name: ''
    },

    logged: false,

    applyList: [],
    staffList: [],

    list:[],
  },

  //번이 : state 에 있는 데이터를 바꿀수 있는 유일한 곳

  mutations:{
    login(state, info){
      state.logged= true,
      state.info.id = info.id
      state.info.name = info.name
    },

    logout(state){
      state.logged = false
    },

    setApplyList(state, data){
      state.applyList = data
    },

    addApply(state, apply){
      //배열 앞에 데이터를 추가
      state.applyList.unshift( apply)
    },

    setStaffList(state, data){
      state.staffList = data
    },

    addStaff(state, staff){
      //배열 앞에 데이터를 추가
      state.staffList.unshift( staff)
    },

    setList(state, list){
      state.list = list
    },

    addItem(state, item){
      state.list.push(item)
    },
    deleteItem(state, item){
      const num = state.list.indexOf(item)
      state.list.splice(num,1)
    }
  },
  actions:{
    nuxtServerInit({ commit}, {req}){
      if(req.ctx.session.logged){
        commit("login", req.ctx.session)
      }
    }
  }
})

export default store