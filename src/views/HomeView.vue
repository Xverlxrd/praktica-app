<template>
  <SliderComponent/>qq
  <div class="home__container">
    <PopularComponent/>
    <InfoComponent/>
    <FeedbackComponent/>
  </div>
</template>

<script>

import PopularComponent from "@/components/PopularComponent/PopularComponent.vue";
import FeedbackComponent from "@/components/FeedbackComponent/FeedbackComponent.vue";
import InfoComponent from "@/components/InfoComponent/InfoComponent.vue";
import SliderComponent from "@/components/SliderCOmponent/SliderComponent.vue";

export default {
  name: 'HomeView',
  components: {SliderComponent, InfoComponent, FeedbackComponent, PopularComponent},

};
</script>

<style>
.home__container{
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 144px;
  padding: 60px 150px;
}


</style>