<template>
  <div id="app">
    <h1>Learn Vuex</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/simple">Simple</router-link> |
      <router-link to="/list">List</router-link>
    </div>
    <router-view/>
  </div>
</template>