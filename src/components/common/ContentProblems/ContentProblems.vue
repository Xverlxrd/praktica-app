<template>
    <div class="content__problems">
        <h3 class="content__problems_title">{{date.problems.title}}</h3>
        <div class="content__problems_body">
            <p class="content__problems_item" v-for="item in date.problems.body" :key="item">{{item}}</p>
        </div>
        <img class="content__problems_img" :src="imgUrl(date.problems.img)" alt="ProblemImg">
    </div>
</template>

<script>
export default {
    name: "ContentProblems",
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
.content__problems {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    .content__problems_title {
        color: #222E37;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
    }

    .content__problems_body {
        display: flex;
        column-gap: 20px;

        .content__problems_item {
            width: 367px;
            color: #222E37;
            font-size: 18px;
            font-weight: 500;
            line-height: 150%;
            opacity: 0.7;
        }
    }

    .content__problems_img {
        align-self: flex-end;
        border-radius: 10px;
    }
}

</style>