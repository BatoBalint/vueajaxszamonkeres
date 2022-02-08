<template>
    <tr id="TableLine">
        <td class="py-2">{{ statue.person }}</td>
        <td>{{ statue.height }}</td>
        <td>{{ statue.price }}</td>
        <td class="text-end">
            <button class="btn btn-outline-warning mx-1" @click="editBtnClicked(statue.id)">Edit</button>
            <button class="btn btn-outline-danger px-3 bold mx-1" @click="deleteBtnClicked(statue.id)">X</button>
        </td>
    </tr>
</template>

<script>

export default {
  name: 'TableLine',
  props: ['statue'],
  data: function() {
    return {

    }
  },
  methods: {
      editBtnClicked(statueid) {
        alert(statueid);
      },
      async deleteBtnClicked(statueid) {
        await fetch('http://localhost:8000/api/statues/' + statueid, {
            method: "DELETE"
        });
        this.$emit('deleteBtnClicked');
      }
  }
}
</script>

<style>

</style>
