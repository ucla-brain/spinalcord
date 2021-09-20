<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    components: {
      Carousel3d,
      Slide
    },
    props: {
        slides: {
          type: Array,
          default: function () { return [] }
        },
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
    computed: {
      currentSection() {

      }
    }
  };

</script>

<template>
    <div id="carousel" class="col-10">
        <carousel-3d ref="carousel" :count="slides.length" :border="0" :perspective="0" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :width="1000" :height="700" :display="1" :inverseScaling="0" :loop="false">
            <slide v-for="(slide, i) in slides" :index="i">
                <img v-bind:class="{ activeLayer: isAtlasSelected }" class="carousel-image atlas" v-bind:src="slide.atlasHref"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '1' }" class="carousel-image" v-bind:src="slide.purpleHref"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '2' }" class="carousel-image" v-bind:src="slide.greenHref"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '3' }" class="carousel-image" v-bind:src="slide.blueHref"/>
                <img v-bind:class="{ activeLayer: selectedChannel == '4' }" class="carousel-image" v-bind:src="slide.redHref"/>
                <figcaption class="figcaption">Section {{slide.section}}</figcaption>
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
  font-size: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
}
</style>