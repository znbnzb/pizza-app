/*
 *
 **引用实例化对象
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 创建一个实例对象，让外部访问
 * 
 */
export const store = new Vuex.Store({

  state: {
    //设置属性，存储数据

    menuItems: {},
    //登录进来的时候currentUser默认值为空
    currentUser: null,
    //还没有登录，所以为空
    isLogin: false
  },
  getters: {
    //获取属性的状态
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin

  },
  mutations: {
    //改变属性的状态

    //在Menu.vue中定义这个方法，然后再这里执行两个参数，state是上面的state,
    //data，是传递过来的参数
    setMenuItems(state, data) {
      state.menuItems = data
    },
    //将匹配到的对象在MenuItem数组中删除
    removeMenuItems(state, data) {
      state.menuItems.forEach((item, index) => {
        if (item == data) {
          state.menuItems.splice(index, 1)
        }
      });
    },
    pushToMenuItems(state, data) {
      state.menuItems.push(data)
    }
  },
  actions: {
    //应用mutations
  }
})
