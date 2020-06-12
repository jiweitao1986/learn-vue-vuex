<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    
    <dl>
      <dt>{{title}}</dt>
      <dd><button @click="changeTitle()">ChangeTitle</button></dd>
    </dl>
    
    <dl>
      <dt>Employees</dt>
      <dd>
        <ul>
          <li v-for="employee in employees" :key="employee.id">
            {{employee.name}} &nbsp; <button @click="removeEmployee(employee.id)">删除</button>
          </li>
        </ul>
      </dd>
      <dd>共【{{employeesCount}}】个员工</dd>
      <dd><button @click="addEmployee()">新增</button>&nbsp;</dd>
    </dl>

    <dl>
      <dt>Test</dt>
      <dd>{{test}}</dd>
      <dd>
        <button @click="changeTest()">ChangeTest</button>
      </dd>
    </dl>
  </div>
</template>

<script>

window.test = 'This is a test.';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    title: function() {
      return this.$store.getters.title;
    },
    
    employees: function() {
      return this.$store.state.employees;
    },
    
    employeesCount: function() {
      return this.$store.getters.employeesCount;
    },
    
    test: function() {
      return window.test;
    }
  },
  
  methods: {
    
    changeTitle: function() {
      const random = Math.random();
      this.$store.commit('changeTitle', random);
    },
    
    addEmployee: function() {
      this.$store.dispatch('addEmployee');
    },
    
    removeEmployee: function(id) {
      this.$store.dispatch('removeEmployee', id);
    },
    
    
    changeTest: function() {
      window.test = `This is a test ...【${(new Date()).toISOString()}】`;
      console.log(window.test);
      console.log(this.test);
    }
  }
}
</script>