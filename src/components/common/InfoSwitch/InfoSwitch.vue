<template>
    <div class="info-switch">
        <h1 class="info-switch-title">Что мы предлагаем</h1>
        <ul class="info-switch-list">
            <li :class="{'info-switch-item': true, 'active': activeTab === 'about'}" @click="setActiveTab('about')">
                <div class="indicator" v-show="activeTab === 'about'"></div>
                О нас
            </li>
            <li :class="{'info-switch-item': true, 'active': activeTab === 'services'}" @click="setActiveTab('services')">
                <div class="indicator" v-show="activeTab === 'services'"></div>
                Услуги
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'about'
        }
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab
            this.$emit('showAbout', tab === 'about')
            this.$emit('showServices', tab === 'services')
        }
    }
}
</script>

<style lang="scss" scoped>
.info-switch {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    .info-switch-title {
        color: #222E37;
        font-size: 36px;
        line-height: 44px;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
    }

    .info-switch-list {
        display: flex;
        flex-direction: column;
        row-gap: 16px;

        .info-switch-item {
            max-width: 310px;
            border-bottom: 1px solid #A4A6B5;
            padding-bottom: 16px;
            padding-left: 18px;
            font-size: 18px;
            font-weight: 400;
            line-height: 23px;
            color: #222E37;
            cursor: pointer;


            &.active {
                color: #0A7CFF;
            }
            &.active {
                position: relative;

                .indicator {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(0, -80%);
                    width: 2px;
                    height: 70%;
                    background-color: #0A7CFF;
                }
            }
        }
    }
}
</style>