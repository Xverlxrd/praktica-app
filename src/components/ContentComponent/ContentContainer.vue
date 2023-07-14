<template>
    <div class="content__container" v-for="date in data" :key="date">
        <ContentTitle :date="date" :img-url="imgUrl"/>
        <ContentTarget :date="date"/>
        <ContentTask :date="date"/>
        <ContentHeadset :img-url="imgUrl" :date="date"/>
        <ContentVirtual :img-url="imgUrl" :date="date"/>
        <ContentSafety :img-url="imgUrl" :date="date"/>
        <ContentProblems :img-url="imgUrl" :date="date"/>
        <ContentGallery :img-url="imgUrl" :date="date"/>
        <ContentMethodists :img-url="imgUrl" :date="date"/>
        <ContentResult :date="date"/>
    </div>
</template>

<script>
import axios from "axios";
import ContentTitle from "@/components/common/ContentTitle/ContentTitle.vue";
import ContentTarget from "@/components/common/ContentTarget/ContentTarget.vue";
import ContentTask from "@/components/common/ContentTask/ContentTask.vue";
import ContentHeadset from "@/components/common/ContentHeadset/ContentHeadset.vue";
import ContentVirtual from "@/components/common/ContentVirtual/ContentVirtual.vue";
import ContentSafety from "@/components/common/ContentSafety/ContentSafety.vue";
import ContentProblems from "@/components/common/ContentProblems/ContentProblems.vue";
import ContentGallery from "@/components/common/ContentGallery/ContentGallery.vue";
import ContentMethodists from "@/components/common/ContentMethodists/ContentMethodists.vue";
import ContentResult from "@/components/common/ContentResult/ContentResult.vue";
export default {
    name: "ContentContainer",
    components: {
        ContentResult,
        ContentMethodists,
        ContentGallery,
        ContentTitle,
        ContentTarget,
        ContentTask,
        ContentHeadset,
        ContentVirtual,
        ContentSafety,
        ContentProblems,
    },
    data() {
        return {
            data: null
        }
    },
    mounted() {
        this.fetchCase();
    },
    methods: {
        async fetchCase() {
            try {
                const response = await axios.get("http://localhost:3000/case");
                this.data = response.data;
            } catch (error) {
                console.error("Ошибка:", error);
            }
        },
        imgUrl(img) {
            return require('@/assets' + img); // Обновляем путь к изображениям
        }
    },
}
</script>

<style scoped>
.content__container{
    max-width: 1140px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 144px;
}


</style>
