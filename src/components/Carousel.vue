<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    components: {
      Carousel3d,
      Slide
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

      let rostralLabel = document.createElement("p");
      rostralLabel.setAttribute("id", "rostralLabel");
      rostralLabel.setAttribute("style", "position: absolute; z-index: 1000; top: 65px; left: 10px;");
      rostralLabel.innerHTML = "Rostral";
      let caudalLabel = document.createElement("p");
      caudalLabel.setAttribute("id", "caudalLabel");
      caudalLabel.setAttribute("style", "position: absolute; z-index: 1000; top: 65px; right: 10px");
      caudalLabel.innerHTML = "Caudal";
      document.getElementsByClassName("carousel-3d-controls")[0].appendChild(rostralLabel);
      document.getElementsByClassName("carousel-3d-controls")[0].appendChild(caudalLabel);
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
        <carousel-3d ref="carousel" :count="slides.length" :border="0" :perspective="0" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :width="1000" :height="680" :display="1" :inverseScaling="0" :loop="false">
            <slide v-for="(slide, i) in slides" :key="slide" :index="i">
                <img v-bind:class="{ activeLayer: isAtlasSelected }" class="carousel-image atlas" v-bind:src="getSlideUrl(slide, 'atlas')"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '1' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'NeuN')"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '2' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'TH')"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '3' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'nissl')"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '4' }" class="carousel-image" v-bind:src="getSlideUrl(slide, 'ChAT')"/>
                <figcaption class="figcaption">Section {{slide}}</figcaption>
            </slide>
        </carousel-3d>
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