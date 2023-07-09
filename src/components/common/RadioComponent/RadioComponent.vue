<template>
    <div class="radio__container">
        <a-radio-group v-model:value="value1" button-style="solid" class="radio__items">
            <a-radio-button value="1" @click="updateCategoriesName('Все')" class="radio__item">Все</a-radio-button>
            <a-radio-button value="2" @click="updateCategoriesName('Энергетика')" class="radio__item">Энергетика</a-radio-button>
            <a-radio-button value="3" @click="updateCategoriesName('Нефтегазовое дело')" class="radio__item">Нефтегазовое дело</a-radio-button>
        </a-radio-group>

        <a-space class="radio__icons">
            <Icon class="radio__icon" icon="bi:arrow-left" color="#A4A6B5" />
            <Icon class="radio__icon" icon="bi:arrow-right" color="black" />
        </a-space>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
    name: "RadioComponent",
    components: {
        Icon
    },
    props: {
        updateCategoriesName: {
            type: Function,
            required: true
        }
    },
    setup() {
        const value1 = ref('1');

        return {
            value1
        };
    }
});
</script>

<style scoped>
.radio__container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EBEBEB;
}
.radio__items{
    display: flex;
    padding: 30px 0;
    column-gap: 10px;
}
.radio__item {
    text-align: center;
    color: rgba(34, 46, 55, 0.6);
    font-size: 18px;
    font-weight: 700;
}
.radio__item:checked {
    color: rgba(255, 255, 255, 1);
    opacity: 900;
}


.radio__icon{
    width: 42px;
    height: 42px;
}
</style>