import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    username:'游客',
    avatar:'',
    nowPostId:0,
    type:'',
    loginStatus:false
  },
  getters: {
    getUsername: state => state.username,
    getAvatar: state => state.avatar,
    getPostId: state => state.nowPostId,
    getType: state => state.type,
    getLoginStatus: state => state.loginStatus
  },
  mutations: {
    setUsername(state,value){
      state.username = value
    },
    setAvatar(state,value){
      state.avatar = value
    },
    setPostId(state,value){
      state.nowPostId = value
    },
    setType(state,value){
      state.type = value
    },
    setLoginStatus(state,value){
      state.loginStatus = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[
      createPersistedstate({
        key: 'savePostID',
        paths: 'nowPostId'
      },{
        key: 'saveUsername',
        paths: 'username'
      },{
        key: 'saveAvatar',
        paths: 'avatar'
      },{
        key: 'saveType',
        paths: 'type'
      },{
        key: 'saveLoginStatus',
        paths: 'loginStatus'
      })
  ]
})
