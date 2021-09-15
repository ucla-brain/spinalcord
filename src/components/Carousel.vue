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
        selectedChannels: Array
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
    }
  };

</script>

<template>
    <div id="carousel" class="col-10">
        <carousel-3d ref="carousel" :count="slides.length" :border="0" :perspective="0" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="660" :width="1200" :height="1000" :display="1" :inverseScaling="0" :startIndex="slides.length/2">
            <slide v-for="(slide, i) in slides" :index="i">
                <img class="carousel-image atlas" v-bind:src="slide.atlasHref"/>
                <img v-bind:class="{ activeLayer: selectedChannels.includes(1) }" class="carousel-image" v-bind:src="slide.purpleHref"/>
                <img v-bind:class="{ activeLayer: selectedChannels.includes(2) }" class="carousel-image" v-bind:src="slide.greenHref"/>
                <img v-bind:class="{ activeLayer: selectedChannels.includes(3) }" class="carousel-image" v-bind:src="slide.blueHref"/>
                <img v-bind:class="{ activeLayer: selectedChannels.includes(4) }" class="carousel-image" v-bind:src="slide.redHref"/>
                <figcaption class="figcaption">Section {{slide.section}}</figcaption>
            </slide>
        </carousel-3d>
    </div>
</template>

<style scoped>
.carousel-image {
  visibility: hidden;
}

.activeLayer, .atlas {
  visibility: visible;
}

.carousel-3d-slide {
  background-color: transparent;
}

.carousel-image {
  position: absolute;
  opacity: 0.8;
}

.atlas {
  opacity: 1;
}

.figcaption {
  font-size: 20px;
  text-align: center;
}

.next, .prev {
  color: white;
}
</style>