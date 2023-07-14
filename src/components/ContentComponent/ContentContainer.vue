<template>
    <div class="content__container" v-for="date in data" :key="date">
        <ContentTitle :date="date" :img-url="imgUrl"/>
        
    </div>
</template>

<script>
import axios from "axios";
import ContentTitle from "@/components/common/ContentTitle/ContentTitle.vue";
export default {
    name: "ContentContainer",
    components: {ContentTitle},
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
