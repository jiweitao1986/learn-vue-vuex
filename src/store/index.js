import Vue from 'vue'
import Vuex from 'vuex'
import SimpleModule from './modules/simple';
import ListModule from './modules/list';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    simple: SimpleModule,
    list: ListModule
  }
})
