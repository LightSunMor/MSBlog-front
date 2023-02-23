import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  themeObj: {
    start_msg:"MorSun Blog",
    top_image:"static/img/星球地球.jpg"
  },//主题
  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"',
  baseURL:'http://localhost:7777/'
}

export default new Vuex.Store({
    state,
})
