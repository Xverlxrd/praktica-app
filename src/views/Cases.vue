<template>
  <HeaderComponent/>
  <ContentContainer/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import ContentContainer from "@/components/ContentComponent/ContentContainer.vue";

export default {
  name: 'CasesView',
  components: {ContentContainer, HeaderComponent}
}
</script>

<style>

</style>