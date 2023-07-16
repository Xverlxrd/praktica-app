<template>
  <div class="content__methodists">
      <h3 class="content__methodists_title">{{date.methodists.title}}</h3>
      <div class="content__methodists_body">
          <div class="content__methodists_images">
              <div class="content__methodists_img-wrapper"
                   v-for="(image, index) in date.methodists.img"
                   :key="image"
              >
                  <img class="content__methodists_img"
                       :src="imgUrl(image)"
                       alt="HeadsetImg"
                  >
                  <p class="content__methodists_text">
                      {{ date.methodists.body[index] }}
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ContentMethodists",
    props: {
        date: {
            type: Object,
            required: true
        },
        imgUrl: {
            type: Function,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.content__methodists {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    .content__methodists_title {
        color: #222E37;
        font-size: 32px;
        font-weight: 500;
        line-height: 150%;
    }

    .content__methodists_body {
    }

    .content__methodists_images {
        display: flex;
        gap: 10px;

        .content__methodists_img-wrapper {
            position: relative;
            width: 366px;
            height: 371px;
            background-color: #F7F6FB;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            .content__methodists_img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }

            .content__methodists_text {
                position: absolute;
                bottom: 14px;
                left: 20px;
                color: #222E37;
                font-size: 18px;
                font-weight: 600;
                line-height: 130%;
                text-transform: uppercase;
            }
        }
    }
}
</style>