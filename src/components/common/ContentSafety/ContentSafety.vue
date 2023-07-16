<template>
  <div class="content__safety">
      <div class="content__safety_text">
          <h3 class="content__safety_title">{{date.safety.title}}</h3>
          <p class="content__safety_body">{{date.safety.body}}</p>
      </div>
      <img class="content__safety_img" :src="imgUrl(date.safety.img)" alt="SafetyImg">
  </div>
</template>

<script>
export default {
    name: "ContentSafety",
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
.content__safety {
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    .content__safety_text {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .content__safety_title {
            color: #222E37;
            font-size: 32px;
            font-weight: 500;
            line-height: 150%;
        }
    }

    .content__safety_body {
        width: 560px;
        color: #222E37;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        opacity: 0.7;
    }

    .content__safety_img {
        align-self: flex-end;
        border-radius: 10px;
    }
}

</style>