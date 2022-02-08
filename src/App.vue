<template>
  <div id="app">
    <table>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
      </tr>
      <TableLine v-for="s in statues" :key="s.id" :statue="s"/>
    </table>
  </div>
</template>

<script>
import TableLine from './components/tableLine.vue'

export default {
  name: 'App',
  components: {
    TableLine
  },
  data: function() {
    return {
      statues: {},
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
