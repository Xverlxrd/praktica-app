<template>
    <div class="content__gallery">
        <img
                v-for="(card, index) in date.cards.img"
                :key="card"
                :src="imgUrl(card)"
                alt="CardsImg"
                :class="getImageClass(index)"
                @click="openModal(index)"
        >
        <div class="modal" v-if="selectedImageIndex !== null">
            <div class="modal__content">
                <img
                        :src="imgUrl(date.cards.img[selectedImageIndex])"
                        alt="ModalImage"
                >
                <button class="modal__close" @click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentGallery",
    props: {
        date: {
            type: Object,
            required: true
        },
        imgUrl: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            selectedImageIndex: null
        };
    },
    methods: {
        openModal(index) {
            this.selectedImageIndex = index;
        },
        closeModal() {
            this.selectedImageIndex = null;
        },
        getImageClass(index) {
            if (index === 0) {
                return "content__gallery_img--large";
            } else if (index === 1) {
                return "content__gallery_img--wide";
            } else if (index === 2 || index === 3) {
                return "content__gallery_img--small";
            } else if (index === 4) {
                return "content__gallery_img--wide content__gallery_img--double-height";
            } else if (index === 5) {
                return "content__gallery_img--small";
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.content__gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    .content__gallery_img {
        object-fit: cover;
        cursor: pointer;
    }

    .content__gallery_img--large {
        grid-row-end: span 2;
        grid-column-end: span 1;
        border-radius: 10px;
    }

    .content__gallery_img--wide {
        grid-row-end: span 1;
        grid-column-end: span 2;
        border-radius: 10px;
    }

    .content__gallery_img--small {
        grid-row-end: span 1;
        grid-column-end: span 1;
        border-radius: 10px;
    }

    .content__gallery_img--double-height {
        grid-row-end: span 2;
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal__content {
        position: relative;

        img {
            max-width: 100%;
            max-height: 100%;
        }

        .modal__close {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
</style>