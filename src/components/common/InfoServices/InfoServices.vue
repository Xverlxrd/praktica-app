<template>
    <ul class="info-services-list">
        <li v-for="(item, index) in items" :key="index" class="info-services-item" :class="{ 'active': item.showBody }" @click="toggleBody(index)">
            <h3 class="info-services-title">{{ item.title }}</h3>
            <div class="info-services-body" :ref="`body${index}`" v-show="item.showBody">
                {{ item.body }}
            </div>
            <img class="info-services-img" :src="getImageSource(item)" alt="Img services" />
        </li>
    </ul>
</template>

<script>
import { gsap } from 'gsap';

export default {
    data() {
        return {
            items: [
                {
                    title: 'Полный цикл разработки',
                    body: 'Разработка образовательных тренажеров под ключ разной сложности 1',
                    showBody: false,
                },
                {
                    title: 'Интеграция готовых решений',
                    body: 'Разработка образовательных тренажеров под ключ разной сложности 2',
                    showBody: false,
                },
                {
                    title: 'Подключение тренажеров по API',
                    body: 'Разработка образовательных тренажеров под ключ разной сложности 3',
                    showBody: false,
                },
            ],
            plusImage: require('@/assets/Home/Plus.svg'),
            closeImage: require('@/assets/Home/Close.svg'),
        };
    },
    methods: {
        toggleBody(index) {
            const item = this.items[index];
            const bodyElement = this.$refs[`body${index}`];

            if (item.showBody) {
                gsap.to(bodyElement, { height: 0, opacity: 0, duration: 0.3, onComplete: () => (item.showBody = false) });
            } else {
                item.showBody = true;
                gsap.set(bodyElement, { height: 'auto', opacity: 0 });
                gsap.to(bodyElement, { height: 'auto', opacity: 1, duration: 0.3 });
            }
        },
        getImageSource(item) {
            return item.showBody ? this.closeImage : this.plusImage;
        },
    },
};
</script>

<style lang="scss" scoped>
.info-services-list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    .info-services-item {
        background-color: #f0f1f5;
        border-radius: 10px;
        display: flex;
        position: relative;
        flex-direction: column;
        min-width: 400px;
        cursor: pointer;

        .info-services-title {
            padding: 20px;
            letter-spacing: 1px;
            line-height: 19px;
            font-size: 16px;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
        }

        .info-services-body {
            border-top: 1px solid #a4a6b5;
            padding: 20px;
            color: #222e37;
            font-size: 14px;
            line-height: 22px;
            font-weight: 500;
            overflow: hidden;
            height: 0;
            opacity: 0;
            transition: height 0.3s ease, opacity 0.3s ease;
        }

        .info-services-img {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
        }


    }
}
</style>
