import Vuex from "vuex"

const store = () => new Vuex.Store({
  //담아 놓을 데이터 저장소
  state :{
    logged: false,

    applyList: [],

    list:[],
  },

  //번이 : state 에 있는 데이터를 바꿀수 있는 유일한 곳

  mutations:{
    login(state){
      state.logged= true
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

  }
})

export default store