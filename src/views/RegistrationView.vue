<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: 'RegistrationView',
  components: { MyButton },
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
  <div class="reg__container">
    <div class="reg__header">
      <router-link to="/">
        <div class="reg__header_logo">
          <img class="header__logo_img" src="../assets/Cases/logo.svg" alt="logo">
          <img class="header__logo_text" src="../assets/Cases/logo_text.svg" alt="logo_text">
        </div>
      </router-link>
      <router-link to="/auth">
        <p class="reg__header_link">{{ $t('headerLink') }}</p>
      </router-link>
    </div>

    <div class="reg__form">
      <h1 class="reg__form_title">{{ $t('formTitle') }}</h1>
      <input type="email" :placeholder="$t('emailPlaceholder')" class="reg__form_input">
      <input type="text" :placeholder="$t('usernamePlaceholder')" class="reg__form_input">
      <input type="password" :placeholder="$t('passwordPlaceholder')" class="reg__form_input">
      <input type="password" :placeholder="$t('confirmPasswordPlaceholder')" class="reg__form_input">
      <MyButton
          class="reg__form_btn"
          style="border-radius: 100px"
      >
        <p class="reg__form_slot">{{ $t('registerButton') }}</p>
      </MyButton>
      <router-link to="/auth">
        <p class="reg__form_text">{{ $t('alreadyHaveAccount') }}</p>
      </router-link>
    </div>

    <div class="reg__footer">
      <MyButton
          style="width: 50px;"
          @click="toggleLanguage"
      >
        {{ currentLanguage.toUpperCase() }}
      </MyButton>
    </div>
  </div>
</template>



<style scoped lang="scss">
.reg__container {
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 144px;
  padding: 60px 150px;
}
.reg__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.reg__header_link{
  margin: 0;
  color: black;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 1px;
}
.reg__header_link:hover{
  color: red;
}
.reg__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
}
.reg__form_title{
  color: black;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 1px;
}
.reg__form_input{
  border: 1px solid black;
  border-radius: 3px;
  width: 40%;
  height: 40px;
  font-size: 20px;
  padding-left: 15px;
}
.reg__form_text{
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.reg__form_text:hover{
  color: red;
}
.reg__form_btn{
  background: rgba(10, 124, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.reg__form_btn:hover{
  background-color: red;
}
.reg__form_slot{
  color: white;
  margin: 0;
}
</style>