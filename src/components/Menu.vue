<template>
  <div>
    <input type="checkbox" id="nissl" value="nissl" v-model="selectedChannels">
    <label for="nissl">NISSL</label>
    <input type="checkbox" id="th" value="th" v-model="selectedChannels">
    <label for="th">Tyrosine Hydroxylase</label>
    <input type="checkbox" id="ca" value="ca" v-model="selectedChannels">
    <label for="ca">Choline Acetyltransferase</label>
    <input type="checkbox" id="neun" value="neun" v-model="selectedChannels">
    <label for="neun">NeuN</label>
  </div>
</template>

<script>
export default {
  data () {
    selectedChannels: []
  }
}
</script>

<style scoped>
span {
  font-weight: bold;  
}
</style>
