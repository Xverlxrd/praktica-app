<template>
  <div class="info-wrapper">
    <div class="container">
      <h4 class="info-title">{{ $t('aboutUs') }}</h4>
      <div class="info-container">
        <InfoSwitch @showServices="showServices" @showAbout="showAbout"/>
        <div v-if="showingServices">
          <InfoServices/>
        </div>
        <div v-else>
          <p :style="{ color: activeTab === 'about' ? 'blue' : 'inherit' }">
            {{ $t('aboutUsText') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import InfoSwitch from "@/components/common/InfoSwitch/InfoSwitch.vue";
import InfoServices from "@/components/common/InfoServices/InfoServices.vue";

export default {
  components: {
    InfoSwitch,
    InfoServices
  },
  data() {
    return {
      showingServices: false,
      activeTab: ''
    }
  },
  methods: {
    showServices(active) {
      this.showingServices = active
      this.activeTab = 'services'
    },
    showAbout(active) {
      this.showingServices = !active
      this.activeTab = 'about'
    },
  }
}
</script>

<style lang="scss">
.info-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 161px;

  .container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    height: 200px;
    min-width: 1150px;

    .info-title {
      align-self: flex-start;
      color: #0A7CFF;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 14px;
      letter-spacing: 1px;
    }

    .info-container {
      display: flex;
      column-gap: 213px;
    }
  }
}
</style>