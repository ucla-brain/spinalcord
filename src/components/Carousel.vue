<script>
  //import { Carousel3d, Slide } from 'vue-carousel-3d'
  import {VueperSlides, VueperSlide} from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  export default {
    components: {
      VueperSlides,
      VueperSlide
    },
    props: {
        slides: Array,
        isAtlasSelected: Boolean,
        selectedChannel: String
    },
    mounted: function() {
      var self = this;
      window.addEventListener('keyup', function(event) {
        if (event.keyCode == 39) {
            self.$refs.carousel.goNext();
        }
        if (event.keyCode == 37) { 
            self.$refs.carousel.goPrev();
        }
      });
    },
    methods: {
      /***
       * Constructs the URL for each section's channels.
       * section_channel.(png/jpg)
       * Ex: `245_L3_atlas.png`
       * 
       * Files should follow this format.
       */
      getSlideUrl(section, channel) {
        let url = section.replace(/ /g,"_") + "_" + channel ;
        url = channel == 'atlas' ? url + ".png" : url + ".jpg" ;
        url = process.env.NODE_ENV === 'development' ? url : "/spinalcord/" + url;
        return url
      }
    },
    computed: {
      currentSection() {

      }
    }
  };

</script>

<template>
    <div id="carousel" class="col-10">
    <Vueper-slides class="vueper" fade :bullets="false" :slide-ratio="100/162" :disableArrowsOnEdges="true">
      <template #arrow-left>
        <svg viewBox="0 0 9 18">
          <path stroke-linecap="round" d="m8 1 l-7 8 7 8"></path>
        </svg>
        <p>Rostral</p>
      </template>
      <template #arrow-right>
        <svg viewBox="0 0 9 18">
          <path stroke-linecap="round" d="m1 1 l7 8 -7 8"></path>
        </svg>
        <p>Caudal</p>
      </template>
      <Vueper-slide v-for="(slide, i) in slides" :key="i" >
        <template #content>
          <figcaption class="figcaption">Section {{slide}}</figcaption>
          <img v-bind:class="{ activeLayer: isAtlasSelected }" class="carousel-image atlas" v-bind:src="getSlideUrl(slide, 'atlas')"/>
          <img v-bind:class="{ activeLayer: selectedChannel == '1' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'NeuN')"/>
          <img v-bind:class="{ activeLayer: selectedChannel == '2' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'TH')"/>
          <img v-bind:class="{ activeLayer: selectedChannel == '3' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'nissl')"/>
          <img v-bind:class="{ activeLayer: selectedChannel == '4' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'ChAT')"/>
        </template>
      </Vueper-slide>
    </Vueper-slides>
    </div>
</template>

<style scoped>

.carousel-image {
  visibility: hidden;
  width: 95%;
  height: 95%;
  object-fit: cover;
}

.activeLayer{
  visibility: visible;
}

.carousel-3d-slide {
  background-color: transparent;
}

.carousel-image {
  position: absolute;
}

.atlas {
  z-index: 100;
}

.figcaption {
  font-size: 30px;
  /*text-align: center;*/
  position: absolute;
  z-index: 1;
}
</style>