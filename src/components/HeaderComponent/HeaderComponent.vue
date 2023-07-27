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
                      <img class="header__nav_img" src="../../assets/Cases/user.svg" alt="user">
                  </li>
                  <li class="header__nav_item">
                      <p class="header__nav_ru">Ru</p>
                      <p class="header__nav_slash">/</p>
                      <p class="header__nav_eng">Eng</p>
                  </li>
                  <li class="header__nav_item">
                      <img class="header__nav_img" src="../../assets/Cases/menu.png" alt="menu">
                  </li>
              </ul>
          </nav>

          <div class="header__social_container">
              <img class="header__social_img" src="../../assets/Cases/vk.svg" alt="social img">
              <img class="header__social_img" src="../../assets/Cases/tg.svg" alt="social img">
              <img class="header__social_img" src="../../assets/Cases/youtube.svg" alt="social img">
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
   .header__wrapper{
       width: 100%;
       background-size: cover;
       background-image: url("@/assets/Cases/background_header.svg");
       background-repeat: no-repeat;
       background-position: center;
   }
   .header__container{
       display: flex;
       margin: 0 auto;
       flex-direction: column;
       max-width: 1140px;
       row-gap: 404px;
   }
   .header__nav{
       padding-top: 27px;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   .header__logo{
       display: flex;
       align-items: center;
       column-gap: 13px;
   }

   .header__nav_items{
       display: flex;
       column-gap: 24px;
       align-items: center;
   }
   .header__nav_item{
       display: flex;
       align-items: center;
   }
   .header__nav_img{

   }
   .header__nav_ru{

   }
   .header__nav_slash{

   }
   .header__nav_eng{

   }
   .header__social_container{
       padding-bottom: 79px;
       display: flex;
       column-gap: 30px;
   }
   .header__social_img{

   }
</style>