<template>
    <div class="content__headset">
        <h3 class="content__headset_title">{{ date.headset.title }}</h3>
        <div class="content__headset_body">
            <div class="content__headset_images">
                <div class="content__headset_img-wrapper"
                     v-for="(image, index) in date.headset.img"
                     :key="image"
                >
                    <img class="content__headset_img"
                         :src="imgUrl(image)"
                         alt="HeadsetImg"
                    >
                    <p class="content__headset_text">
                        {{ date.headset.body[index] }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentHeadset",
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
.content__headset {
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    .content__headset_title {
        color: #222E37;
        font-size: 32px;
        font-weight: 500;
        line-height: 150%;
    }

    .content__headset_body {
    }

    .content__headset_images {
        display: flex;
        gap: 10px;

        .content__headset_img-wrapper {
            position: relative;
            width: 560px;
            height: 430px;
            background-color: #F7F6FB;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            .content__headset_img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }

            .content__headset_text {
                position: absolute;
                bottom: 33px;
                color: #0A7CFF;
                font-size: 24px;
                font-weight: 600;
                line-height: 44px;
                letter-spacing: 0.02px;
            }
        }
    }
}
</style>