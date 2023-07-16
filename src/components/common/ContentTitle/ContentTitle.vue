<template>
    <div class="content__title">
        <a-space size="small" class="content__categories">
            <div v-for="catigories in date.name.categories" :key="catigories" class="content__categories_item">{{catigories}}</div>
        </a-space>
        <h1 class="content__title_text">{{date.name.title}}</h1>
        <p class="content__title_body">{{date.name.body}}</p>
    </div>
</template>

<script>
export default {
    name: "ContentTitle",
    props: {
        date:{
            type: Array,
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
.content__title {
    width: 100%;
    padding-top: 66px;
    border-bottom: 1px solid rgba(164, 166, 181, 1);
}

.content__categories_item {
    border-radius: 100px;
    border: 1px solid #A4A6B5;
    color: #222E37;
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    opacity: 0.7;
    width: 105px;
    height: 25px;
    text-align: center;
}

.content__title_text {
    padding-top: 16px;
    width: 691px;
    font-size: 52px;
    font-weight: 700;
    line-height: 120%;
    color: #222E37;
    text-transform: uppercase;
}

.content__title_body {
    color:  #222E37;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
}

</style>