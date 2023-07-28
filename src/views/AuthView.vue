<template>
  <div class="auth__container">
    <div class="auth__header">
      <router-link to="/">
        <div class="auth__header_logo">
          <img class="header__logo_img" src="../assets/Cases/logo.svg" alt="logo">
          <img class="header__logo_text" src="../assets/Cases/logo_text.svg" alt="logo_text">
        </div>
      </router-link>
      <router-link to="/registration">
        <p class="auth__header_link">{{ $t('registrationLink') }}</p>
      </router-link>
    </div>

    <div class="auth__form">
      <h1 class="auth__form_title">{{ $t('loginTitle') }}</h1>
      <input type="text" :placeholder="$t('emailOrUsernamePlaceholder')" class="auth__form_input">
      <input type="password" :placeholder="$t('passwordPlaceholder')" class="auth__form_input">
      <MyButton
          class="auth__form_btn"
          style="border-radius: 100px"
      >
        <p class="auth__form_slot">{{ $t('loginButton') }}</p>
      </MyButton>
      <router-link to="/registration">
        <p class="auth__form_text">{{ $t('noAccountText') }}</p>
      </router-link>
    </div>

    <div class="auth__footer">
      <MyButton
          style="width: 50px;"
          @click="toggleLanguage"
      >
        {{ currentLanguage.toUpperCase() }}
      </MyButton>
    </div>
  </div>
</template>

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
};
</script>

<style>
.auth__container {
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 144px;
  padding: 60px 150px;
}
.auth__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.auth__header_link{
  margin: 0;
  color: black;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 1px;
}
.auth__header_link:hover{
  color: red;
}
.auth__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
}
.auth__form_title{
  color: black;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 1px;
}
.auth__form_input{
  border: 1px solid black;
  border-radius: 3px;
  width: 40%;
  height: 40px;
  font-size: 20px;
  padding-left: 15px;
}
.auth__form_text{
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.auth__form_text:hover{
  color: red;
}
.auth__form_btn{
  background: rgba(10, 124, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth__form_btn:hover{
  background-color: red;
}
.auth__form_slot{
  color: white;
  margin: 0;
}
</style>