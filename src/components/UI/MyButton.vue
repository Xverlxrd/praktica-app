<script >
export default {

}
</script>

<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.my-btn{
  border-radius: 4px;
  border: 1px solid #0A7CFF;
  color: #0A7CFF;
  width: 255px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 1px;
  align-self: center;
}
</style>