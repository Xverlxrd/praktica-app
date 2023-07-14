<template>
  <div class="content__task">
      <p class="content__task_title">{{date.task.title}}</p>
      <div class="content__task_text">
          <p v-for="body in date.task.body" :key="body" class="content__task_body">{{body}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "ContentTask",
    props: {
        date:{
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>
.content__task{
    display: flex;
    justify-content: space-between;
}
.content__task_title{
    color: #222E37;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}
.content__task_text{
    width: 560px;
}
.content__task_body{
    color: #222E37;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    opacity: 0.699999988079071;
}
</style>