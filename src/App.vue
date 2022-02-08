<template>
  <div id="app">
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      statues: {}
    }
  },
  mounted() {
    fetch('http://localhost:8000/api/statues')
    .then(response => response.json())
    .then(data => this.statues = data);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
