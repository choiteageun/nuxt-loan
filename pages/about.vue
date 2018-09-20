<template>
  <div></div>
</template>
<script>

import Vue from "vue"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import locale from "element-ui/lib/locale/lang/ko"
import axios from "axios"
import { setTimeout } from 'timers';

Vue.use(ElementUI,{
  locale: locale
})



export default{
  data(){
    return{
    
    }
  },
  
  methods:{
    getData(callback){
      let tableData

      setTimeout(()=>{
        tableData = "데이터 들어감!"

        callback(tableData)
      }, 1000)
    },

  },
  created(){
    
  },
  async mounted(){
    // this.getData(function (data){
    //   console.log(data)
    // })
    const func = (num)=>{
      return new Promise(function(resolve, reject){
        //resolve : 성공을 알리는 함수
        //reject : 실패를 알리는 함수
        setTimeout(function(){
          if(num > 5){
            resolve(num)
          }else{
            reject("실패!")
          }
        }, 1000)
      })
    }

    /* then, catch 구문을 이용한 promise 비동기 처리 */
    // func(10).then( result =>{
    //   console.log("성공했을때만 실행됩니다.")
    //   console.log(result)
    // }).catch(err => {
    //   console.log("실패했습니다.")
    //   console.log("에러 코드 : " + err)
    // })

    /* async, await 을 통한 비동기 처리 */
    /*await 은 프로미스로 만들어진 곳에만 사용할 수 있다. */
    try{
      let result = await func(11)
      console.log(result)

      result = await func(12)
      console.log(result)

      result = await func(13)
      console.log(result)

      result = await func(14)
      console.log(result)

      result = await func(15)
      console.log(result) 
    }catch(err){
      console.log("실패했습니다.")
    }
  }
}
</script>
<style>
  .el-select{
    width: 300px;
  }
</style>
