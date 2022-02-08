<template>
  <div id="app">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-8 mx-auto">
          <table class="table table-dark table-striped">
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Price</th>
            </tr>
            <TableLine v-for="s in statues" :key="s.id" :statue="s"
            @deleteBtnClicked="loadData" 
            @editBtnClicked="loadData"/>
            <tr>
              <td><input class="form-control bg-dark text-white" type="text" placeholder="Statue name" v-model="inputName"></td>
              <td><input class="form-control bg-dark text-white" type="number" placeholder="Statue Height" v-model="inputHeight"></td>
              <td><input class="form-control bg-dark text-white" type="number" placeholder="Statue price" v-model="inputPrice"></td>
              <td class="text-end">
                <button class="btn btn-outline-success mx-1" @click="addStatueBtnClicked">Save</button>
                <button class="btn btn-outline-danger mx-1" @click="cancelAddStatueBtnClicked">Cancel</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
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
      inputName: '',
      inputHeight: '',
      inputPrice: ''
    }
  },
  methods: {
    loadData() {
      fetch('http://localhost:8000/api/statues')
      .then(response => response.json())
      .then(data => this.statues = data);
    },
    async addStatueBtnClicked() {
      let error = '';
      if (this.inputName.trim() === '') {
        error += 'Name can\'t be empty';
      }
      if (this.inputName.trim().length < 5 ) {
        if (error.length != 0) error += '\r\n';
        error += 'Name must be at least 5 charachters long';
      }
      if (this.inputHeight < 1 || this.inputHeight === '') {
        if (error.length != 0) error += '\r\n';
        error += 'Height must be positive';
      }
      if (this.inputHeight > 250 || this.inputHeight === '') {
        if (error.length != 0) error += '\r\n';
        error += 'Height can not be greater than 250';
      }
      if (this.inputPrice < 0 || this.inputPrice === '') {
        if (error.length != 0) error += "\r\n";
        error += 'The price can\'t be negative';
      }
      if (error.length > 0) {
        alert(error);
        return;
      }
      let newStatue = {
        person: this.inputName.trim(),
        height: this.inputHeight,
        price: this.inputPrice
      }
      let myPromise = await fetch('http://localhost:8000/api/statues', {
        method: 'POST',
        body: JSON.stringify(newStatue),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      let data = myPromise.json();
      console.log(data);
      this.loadData();
      this.inputName = '';
      this.inputHeight = '';
      this.inputPrice = '';
    },
    cancelAddStatueBtnClicked() {

    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style>

</style>
