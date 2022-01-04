<template>
  <div id="app" class="container-fluid vh-100">
    <div class="row vh-100">
    <div class="col-2 toggle-menu">
      <p id="sidebarTitle">Channel</p>
      <div id="toggles">
      <div id="atlas" class="channel">
        <input type="checkbox" id="ch0" v-model="isAtlasSelected">
        <label for="atlas">Atlas</label>
      </div>
      <div id="neun" class="channel">
        <input type="radio" id="ch1" value="1" v-model="selectedChannel">
        <label for="neun">NeuN</label>
      </div>
      <div id="th" class="channel">
        <input type="radio" id="ch2" value="2" v-model="selectedChannel">
        <label for="th">Tyrosine Hydroxylase</label>
      </div>
      <div id="nissl" class="channel">
        <input type="radio" id="ch3" value="3" v-model="selectedChannel">
        <label for="nissl">NISSL</label>
      </div>
      <div id="ca" class="channel">
        <input type="radio" id="ch4" value="4" v-model="selectedChannel">
        <label for="ca">Choline Acetyltransferase</label>
      </div>
      </div>
    </div>
    <carousel :slides="images" :isAtlasSelected="isAtlasSelected" :selectedChannel="selectedChannel"/>
    </div>
    </div>
</template>

<script>
import Carousel from './components/Carousel'
//import imageData from './assets/data.js'

export default {
  name : 'app',
  components: {
    Carousel
  },
  methods: {
    selectOnlyThis(channelNumber) {
      this.selectedChannels = [];
      for (var i = 1;i <= 4; i++) {
        document.getElementById("ch" + i).checked = false;
      }
      document.getElementById("ch" + channelNumber).checked = true;
      this.selectedChannels.push(channelNumber);
    }
  },
  data () {
    return {
        images: ["245 L3", "253 L3", "263 L4"],
        selectedChannel: "1",
        isAtlasSelected: true
    }
  }
}
</script>

<style>
.row {
  overflow: hidden;
}

#app {
  background-color: black;
  color: white;
  font-family: "Helvetica Neue";
  margin-left:0px;
  margin-right:0px;
}

#sidebarTitle {
  font-weight: bold;
}

#toggles {
  border: 1px grey solid;
  border-radius: 3px;
  background-color: #141414;
}

.channel {
  font-weight: 700;
  font-size: 14px;
  padding: 5px;
}

.toggle-menu {
  top: 50px;
}

#neun {
  color: purple;
}

#th {
  color: green;
}

#nissl {
  color: blue;
}

#ca {
  color: red;
}

.next, .prev {
  color: white !important;
}
</style>
 
