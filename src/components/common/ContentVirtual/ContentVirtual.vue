<template>
  <div class="content__virtual">
      <h3 class="content__virtual_title">{{date.virtual.title}}</h3>
      <div class="content__virtual_body">
          <img :src="imgUrl(date.virtual.img)" class="content__virtual_img" alt="Virtual Img">
          <ul class="content__virtual_list">
              <li v-for="item in date.virtual.body" :key="item" class="content__virtual_item">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "ContentVirtual",
    props: {
        date: {
            type: Object,
            required: true
        },
        imgUrl: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.content__virtual {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  .content__virtual_title {
    color: #222E37;
    font-size: 32px;
    font-weight: 500;
    line-height: 150%;
  }

  .content__virtual_body {
    display: flex;
    justify-content: space-between;

    .content__virtual_img {
    }

    .content__virtual_list {
      display: flex;
      flex-direction: column;
      row-gap: 24px;

      .content__virtual_item {
        width: 280px;
        padding-bottom: 8px;
        border-bottom: 1px solid #A4A6B5;
        color: #222E37;
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        opacity: 0.7;
      }
    }
  }
}

</style>