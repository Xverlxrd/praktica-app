<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<template>
  <div class="feedback__container">
    <div class="feedback__info">
      <h1 class="feedback__info_title">Заинтересованы в работе вместе с нами?</h1>
      <div class="feedback__info_data">
        <h3 class="feedback__data_city">г. Томск</h3>
        <ul class="feedback__data_contact">
          <li class="feedback__contact_item">
            <p class="feedback__contact_title">Позвоните нам:</p>
            <p class="feedback__contact_text">8 923 422 - 22 - 22</p>
          </li>
          <li class="feedback__contact_item">
            <p class="feedback__contact_title">Напишите нам:</p>
            <p class="feedback__contact_text">email@gmail.com</p>
          </li>
          <li class="feedback__contact_item">
            <p class="feedback__contact_title">Мы в соц. сетях:</p>
            <div class="feedback__contact_sotial">
              <img class="feedback__sotial_img" src="@/assets/Home/Vk.svg" alt="Vk">
              <img class="feedback__sotial_img" src="@/assets/Home/Tg.svg" alt="Tg">
              <img class="feedback__sotial_img" src="@/assets/Home/YT.svg" alt="YouTube">
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="feedback__form">
      <h1 class="feedback__form_title">Свяжитесь с нами или заполните форму подачи заявки.</h1>
      <div class="feedback__form_inputs">
        <input class="feedback__form_input" placeholder="Ваш номер телефона" type="tel">
        <input class="feedback__form_input" placeholder="Ваш E-mail адрес" type="email">
        <input class="feedback__form_input" placeholder="Сообщение" type="text">
      </div>
      <div class="feedback__form_checkbox">
        <ACheckbox class="form__checkbox"/>
        <div class="form__checkbox_container">
          <p class="form__checkbox_text">Я согласен на обработку</p>
          <p class="form__checkbox_underline">персональных данных</p>
        </div>
      </div>
      <MyButton style="align-self: start; width: 220px;">Оставить заявку</MyButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback__container{
  display: flex;
  column-gap: 193px;
  align-items: center;
  padding-bottom: 140px;
}
.feedback__info{
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}
.feedback__info_title{
  width: 387px;
  color: #222E37;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 46.8px */
  letter-spacing: 0.02px;
}
.feedback__info_data{
  display: flex;
  column-gap: 113px;
}
.feedback__data_city{
  color: #222E37;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 112.5% */
  letter-spacing: 1px;
  opacity: 0.7;
}
.feedback__data_contact{
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.feedback__contact_item{
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
.feedback__contact_title{
  color: #222E37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px; /* 192.857% */
  letter-spacing: 1px;
  text-transform: uppercase;
}
.feedback__contact_text{
  color: #0A7CFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
.feedback__contact_sotial{
  display: flex;
  column-gap: 18px;
}

.feedback__form{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.feedback__form_title{
  width: 393px;
  color: #222E37;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  padding-bottom: 52px;
}
.feedback__form_inputs{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-bottom: 33px;
  width: 100%;
}
.feedback__form_input{
  border-bottom: 1px solid #222E37;
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.feedback__form_checkbox{
  padding-bottom: 53px;
  display: flex;
  column-gap: 25px;
}
.form__checkbox_container{
  display: flex;
  column-gap: 2px;
}
.form__checkbox_text{
  color: #222E37;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.form__checkbox_underline{
  color: #222E37;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
}
</style>