import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Learn Vue Vuex',
    employees: [
      {id: 1, code: 'Emp-0001', name: '员工-0001'},
      {id: 2, code: 'Emp-0002', name: '员工-0002'}
    ]
  },
  getters: {
    title: (state) => {
      return `【${state.title}】`;
    },
    employeesCount: (state) => {
      return state.employees.length;
    }
  },
  mutations: {
    changeTitle: (state, payload)=> {
      const now = (new Date()).toISOString();
      state.title = `【Title】: ${now}-${payload}`;
    },

    addEmployee: (state, newEmployee) => {
      state.employees.push(newEmployee);
    },
    
    removeEmployee: (state, idToRemove) => {
      const indexToRemove = state.employees.findIndex((employee) => {
        return employee.id === idToRemove;
      });
      state.employees.splice(indexToRemove, 1);
    }
  },
  actions: {

    addEmployee(context) {
      const random = Math.round(Math.random() * 10000);
      const newEmployee = {
        id: random,
        code: `Emp-${random}`,
        name: `员工-${random}`
      };
      context.commit('addEmployee', newEmployee);
    },

    removeEmployee(context, idToRemove) {
      context.commit('removeEmployee', idToRemove);
    }
  },
  modules: {
  }
})
