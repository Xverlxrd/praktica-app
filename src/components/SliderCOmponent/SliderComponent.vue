<script>


import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    }
  },
  methods: {
    toggleLanguage() {
      if (this.$i18n.locale === 'ru') {
        this.$i18n.locale = 'en';
      } else if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'ru';
      }
    }
  }
}
</script>

<template>
  <header class="header__wrapper">
    <div class="header__container">
      <nav class="header__nav">
        <div class="header__logo">
          <img class="header__logo_img" src="../../assets/Cases/logo.svg" alt="logo">
          <img class="header__logo_text" src="../../assets/Cases/logo_text.svg" alt="logo_text">
        </div>

        <ul class="header__nav_items">
          <li class="header__nav_item">
            <img class="header__nav_img" src="../../assets/Cases/search.svg" alt="search">
          </li>
          <li class="header__nav_item">
            <router-link to="/auth">
              <img class="header__nav_img" src="../../assets/Cases/user.svg" alt="user">
            </router-link>
          </li>
          <li @click="toggleLanguage"  class="header__nav_item">
            <p class="header__nav_ru">{{ $t('russian') }}</p>
            <p class="header__nav_slash">/</p>
            <p class="header__nav_eng">{{ $t('english') }}</p>
          </li>
          <li class="header__nav_item">
            <img class="header__nav_img" src="../../assets/Cases/menu.png" alt="menu">
          </li>
        </ul>
      </nav>

      <div class="header__info">
        <div class="header__info_content">
          <div class="header__categories">
            <div class="header__categories_item">
              <p class="header__categories_text">{{ $t('energy') }}</p>
            </div>
            <div class="header__categories_item">
              <p class="header__categories_text">{{ $t('vrMoodle') }}</p>
            </div>
          </div>
          <h1 class="header__info_name">{{ $t('primaryDiagnostic') }}</h1>
          <div class="header__info_btns">
            <router-link to="/cases">
              <MyButton style="color: white; background: #0A7CFF">{{ $t('learnMore') }}</MyButton>
            </router-link>
            <p class="header__info_text">{{ $t('allSimulators') }}</p>
          </div>
        </div>
        <div class="header__info_vidio">
          <img src="@/assets/Home/video.png" alt="Video">
          <img class="header__info_play" src="@/assets/Home/Exclude.svg" alt="Exclude">
        </div>
      </div>
      <div class="header__footer">
        <div class="header__pagination">
          <div class="header__pagination_btn">
            <img src="@/assets/Home/angle-left.svg" alt="arrow">
          </div>
          <p class="header__pagination_numbers">{{ $t('pagination', { current: '01', total: '32' }) }}</p>
          <div class="header__pagination_btn">
            <img src="@/assets/Home/angle-right.svg" alt="arrow">
          </div>
        </div>
        <div class="header__social_container">
          <img class="header__social_img" src="../../assets/Cases/vk.svg" alt="social img">
          <img class="header__social_img" src="../../assets/Cases/tg.svg" alt="social img">
          <img class="header__social_img" src="../../assets/Cases/youtube.svg" alt="social img">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header__wrapper {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-image: url("@/assets/Home/bg1.png");
}

.header__bg {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.header__container {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1140px;
  row-gap: 404px;
}

.header__nav {
  padding-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  display: flex;
  align-items: center;
  column-gap: 13px;
}

.header__nav_items {
  display: flex;
  column-gap: 24px;
  align-items: center;
}

.header__nav_item {
  display: flex;
  align-items: center;
}

.header__nav_img {

}

.header__nav_ru {

}

.header__nav_slash {

}

.header__nav_eng {

}

.header__social_container {
  padding-bottom: 79px;
  display: flex;
  column-gap: 30px;
}

.header__social_img {

}

.header__info {
  display: flex;
  column-gap: 227px;
}

.header__info_content {
  display: flex;
  flex-direction: column;
}

.header__categories {
  display: flex;
  column-gap: 10px;
  padding-bottom: 26px;
  padding-top: 46px;
}

.header__categories_item {
  border-radius: 100px;
  border: 1px solid #FFF;
  padding: 2px 12px;
}

.header__categories_text {
  color: #FFF;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  align-self: center;
  margin: 0;
}

.header__info_name {
  width: 643px;
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  letter-spacing: 1px;
  padding-bottom: 52px;
}

.header__info_text {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 1px;
}

.header__info_btns {
  display: flex;
  column-gap: 46px;
  align-items: end;
}

.header__info_vidio {
  position: relative;
  width: 270px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__info_play {
  position: absolute;

}

.header__footer {
  display: flex;
  justify-content: space-between;
}

.header__pagination {
  display: flex;
  column-gap: 51px;
}

.header__pagination_btn {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(3px);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__pagination_numbers {
  padding-top: 10px;
  color: #F7F6FB;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 133.333% */
  letter-spacing: 1px;
}
</style>