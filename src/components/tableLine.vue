<template>
    <tr id="TableLine">
        <td v-if="!editMode">{{ statue.person }}</td>
        <td v-if="!editMode">{{ statue.height }}</td>
        <td v-if="!editMode">{{ statue.price }}</td>
        <td v-if="editMode"><input class="form-control bg-dark text-white" type="text" placeholder="Statue name" v-model="inputName"></td>
        <td v-if="editMode"><input class="form-control bg-dark text-white" type="number" placeholder="Statue Height" v-model="inputHeight"></td>
        <td v-if="editMode"><input class="form-control bg-dark text-white" type="number" placeholder="Statue price" v-model="inputPrice"></td>
        <td class="text-end">
            <button :class="editBtnColor" class="btn mx-1" @click="editBtnClicked(statue.id)">{{ editBtnText }}</button>
            <button class="btn btn-outline-danger px-3 bold mx-1" @click="deleteBtnClicked(statue.id)">{{ deleteBtnText }}</button>
        </td>
    </tr>
</template>

<script>

export default {
  name: 'TableLine',
  props: ['statue'],
  data: function() {
    return {
        editMode: false,
        deleteBtnText: 'X',
        editBtnText: 'Edit',
        editBtnColor: 'btn-outline-warning',
        inputName: '',
        inputHeight: '',
        inputPrice: ''
    }
  },
  methods: {
      async editBtnClicked(statueid) {
        if (!this.editMode) {
            this.editMode = !this.editMode;
            this.deleteBtnText = 'Cancel';
            this.editBtnText = 'Save';
            this.editBtnColor = 'btn-outline-success';
        } else {
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
            if (this.inputPrice < 1000 || this.inputPrice === '') {
                if (error.length != 0) error += "\r\n";
                error += 'The price must be at least 1000';
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
            await fetch('http://localhost:8000/api/statues/' + statueid, {
                method: 'PATCH',
                body: JSON.stringify(newStatue),
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            });
            await this.$emit('refreshTable');
            this.defaultEditMode();
            this.setInputValues();

        }
      },
      defaultEditMode() {
          this.editMode = !this.editMode;
          this.deleteBtnText = 'X';
          this.editBtnText = 'Edit';
          this.editBtnColor = 'btn-outline-warning';
          this.setInputValues();
      },
      async deleteBtnClicked(statueid) {
        if (this.editMode) {
            this.defaultEditMode();
        } else {
            await fetch('http://localhost:8000/api/statues/' + statueid, {
            method: "DELETE"
            });
            this.$emit('refreshTable');
        }
      },
      setInputValues() {
        this.inputName = this.statue.person;
        this.inputHeight = this.statue.height;
        this.inputPrice = this.statue.price;
      }
  },
  mounted() {
      this.setInputValues();
  }
}
</script>
