<template>
  <div class="content__result">
      <div class="content__result_text">
          <h3 class="content__result_title">{{date.result.title}}</h3>
          <p class="content__result_body">{{date.result.body}}</p>
      </div>
      <div class="content__result_values">
          <div v-for="value in date.result.values" :key="value.text" class="content__result_value">
              <p class="result__value">{{value.value}}</p>
              <p class="result__size">{{value.size}}</p>
              <p class="result__text">{{value.text}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ContentResult",
    props: {
        date: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.content__result {
    display: flex;
    flex-direction: column;
    row-gap: 70px;

    .content__result_text {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content__result_title {
            color: #222E37;
            font-size: 32px;
            font-weight: 500;
            line-height: 150%;
        }

        .content__result_body {
            opacity: 0.7;
            width: 655px;
            color: #222E37;
            font-size: 24px;
            font-weight: 500;
            line-height: 150%;
        }
    }

    .content__result_values {
        align-self: flex-end;
        column-gap: 150px;
        align-items: center;
        width: 658px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 60px;

        .content__result_value {
            width: 150px;
            display: flex;
            flex-direction: column;
            position: relative;

            .result__value {
                color: #0A7CFF;
                font-size: 50px;
                font-weight: 600;
                line-height: 150%;
            }

            .result__size {
                color: #0A7CFF;
                font-size: 30px;
                font-weight: 600;
                line-height: 150%;
                position: absolute;
                top: 1px;
                right: 1px;
            }

            .result__text {
                opacity: 0.7;
                color: #222E37;
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%;
            }
        }
    }
}
</style>