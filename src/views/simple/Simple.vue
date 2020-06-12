<template>
  <div>
    <h2>Simple</h2>
    <dl>
      <dt>Mutation</dt>
      <dd>{{count}}</dd>
      <dd><button @click="increment()">increment</button></dd>
    </dl>
    <dl>
      <dt>EmpObj</dt>
      <dd>{{empName}}</dd>
      <dd><button @click="changeName()">changeName</button></dd>
    </dl>
  </div>
</template>

<script>
import Vue from 'vue';

const empObj = {
  id: 1,
  code: 'Code-1',
  name: 'Name-1'
}

export default Vue.extend({

  data: function() {
    return {
      title: 'Vuex-Compoment',
    }
  },
  computed: {

    count: function() {
      return this.$store.state.simple.count;
    },

    empName: function() {
      return empObj.name;
    }
  },
  methods: {
    increment: function() {
      this.$store.commit('increment');
      console.log(this.$store);
    },

    changeName: function() {
      const now = new Date();
      const nowStr = now.toISOString();
      empObj.name = `Name-${nowStr}`;
      console.log(empObj);
    }
  }
})
</script>
