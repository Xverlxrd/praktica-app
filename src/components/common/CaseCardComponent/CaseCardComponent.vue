<template>
    <div class="case__card_item">
        <img class="case__card_img" :src="cardImg" alt="img">
        <div class="card__item_categories">
            <div class="card__item_num">0{{ item.id }}</div>
            <a-space>
                <div class="card__catigories_item" v-for="cat in item.catigories" :key="cat">
                    <div>{{ cat }}</div>
                </div>
            </a-space>
        </div>

        <div class="card__item_text">
            <h2 class="card__item_name">{{ item.name }}</h2>
            <p class="card__item_body">{{ item.body }}</p>
        </div>

        <a-button class="card__item_btn" @click="openModal">
            Подробнее
        </a-button>

        <CustomModalComponent @click="closeModal" :cardImg="cardImg"  v-if="modalVisible" @close="closeModal">

        </CustomModalComponent>
    </div>
</template>

<script>
import CustomModalComponent from "@/components/common/CustomModalComponent/CustomModalComponent.vue";

export default {
    props: {
        item: {
            type: Object,
        },
    },
    name: "CaseCardComponent",
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
        },
    },
    components: {
        CustomModalComponent,
    },
    computed: {
        cardImg() {
            switch (this.item.id) {
                case 1:
                    return require('@/assets/01.svg');
                case 2:
                    return require('@/assets/02.svg');
                case 3:
                    return require('@/assets/03.svg');
                case 4:
                    return require('@/assets/04.svg');
                case 5:
                    return require('@/assets/05.svg');
                case 6:
                    return require('@/assets/01.svg');
                case 7:
                    return require('@/assets/02.svg');
                case 8:
                    return require('@/assets/03.svg');
                case 9:
                    return require('@/assets/04.svg');
                case 10:
                    return require('@/assets/05.svg');
                default:
                    return null;
            }
        },
    },
};
</script>


<style scoped>
.case__card_item:hover .card__item_num {
    background-color: rgba(10, 124, 255, 1);
    color: white;
}

.case__card_item:hover .card__item_btn {
    background-color: rgba(10, 124, 255, 1);
    color: white;
}

.case__card_item:hover .card__item_num:hover {
    background-color: initial;
    color: initial;
}
.case__card_item{
    border: 1px solid black;
    border-radius: 10px;
    padding: 45px;
    display: flex;
    flex-direction: column;
    row-gap: 34px;
    position: relative;
    height: 100%;
}
.case__card_img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    filter: brightness(0.5);
    object-fit: cover;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;
}
.card__item_num{
    z-index: 1;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(10, 124, 255, 1);
}
.card__item_categories{
    display: flex;
    column-gap: 30px;
    z-index: 1;
}
.card__catigories_item{
    width: 100%;
    padding: 0 12px;
    border-radius: 100px;
    border: 1px solid #A4A6B5;
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.6);
}
.card__item_text{
    display: flex;
    flex-direction: column;
    z-index: 1;
}
.card__item_name{
    color: white;
    font-size: 32px;
    font-weight: 600;
    line-height: 130%;
}
.card__item_body{
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
}
.card__item_btn{
    background-color: initial;
    width: 177px;
    height: 50px;
    color: rgba(10, 124, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(10, 124, 255, 1);
    z-index: 1;
}
</style>