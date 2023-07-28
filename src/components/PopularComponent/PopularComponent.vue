<script >
import MyButton from "@/components/UI/MyButton.vue";
import jsonData from "@/json/populars.json";

export default {
  components: { MyButton },
  data() {
    return {
      jsonData: jsonData
    };
  },
}
</script>

<template>
  <div class="popular__container">
    <p class="popular__text">{{ $t('projects') }}</p>
    <h1 class="popular__title">{{ $t('popularSimulators') }}</h1>
    <ul class="popular__list">
      <li v-for="item in jsonData" :key="item.id" class="popular__item">
        <img class="popular__img" :src="require(`@/assets/Home/${item.img}.svg`)" :alt="item.name">
        <div class="popular__categories">
          <div v-for="category in item.categories" :key="category" class="popular__categories_item">{{ category }}</div>
        </div>
        <h1 class="popular__name">{{ item.name }}</h1>
      </li>
    </ul>
    <MyButton>{{ $t('moreSimulators') }}</MyButton>
  </div>
</template>


<style scoped lang="scss">
.popular__container{
  display: flex;
  flex-direction: column;
}
.popular__text{
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0A7CFF;
}
.popular__title{
  color: #222E37;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0.02px;
  padding-bottom: 20px;
}
.popular__list{
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  gap: 20px;
}
.popular__item{
  width: 560px;
  height: 587px;
  border-radius: 4px;
  position: relative;

}
.popular__categories{
  display: flex;
  column-gap: 10px;
  position: absolute;
  top: 40px;
  left: 40px;
}
.popular__categories_item{
  border-radius: 100px;
  border: 1px solid  #A4A6B5;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: #FFF;
  padding: 2px 12px;
}
.popular__name{
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 1px;
  color: white;
  width: 337px;
  position: absolute;
  bottom: 40px;
  left: 40px;
}
.popular__img{
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
</style>