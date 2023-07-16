<template>
    <div class="content__target">
        <p class="content__target_title">{{date.target.title}}</p>
        <p class="content__target_body">{{date.target.body}}</p>
    </div>
</template>

<script>
export default {
    name: "ContentTarget",
    props: {
        date:{
            type: Array,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
.content__target {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content__target_title {
        color: #222E37;
        font-size: 32px;
        font-weight: 500;
        line-height: 150%;
    }

    .content__target_body {
        width: 560px;
        color: #222E37;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        opacity: 0.7;
    }
}
</style>