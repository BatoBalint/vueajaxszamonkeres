<template>
    <tr id="TableLine">
        <td>{{ statue.person }}</td>
        <td>{{ statue.height }}</td>
        <td>{{ statue.price }}</td>
        <td>X</td>
    </tr>
</template>

<script>

export default {
  name: 'TableLine',
  props: ['statue'],
  data: function() {
    return {

    }
  }
}
</script>

<style>

</style>
