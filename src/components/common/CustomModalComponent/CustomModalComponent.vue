<template>
    <div class="modal">
        <div class="modal-content">
            <img class="modal-img" :src="cardImg" alt="img">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardImg: {
            type: Function,
            required: true
        }
    }
};
</script>

<style scoped>

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
}

.modal-content {
    background-color: white;
    padding: 5px;
    width: 70%;
}

.modal-img{
    width: 100%;
}
</style>