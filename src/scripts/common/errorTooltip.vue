<template lang="pug">
  .error-tooltip {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>

<style lang="postcss" scoped>
.error-tooltip {
    position: absolute;
    z-index: 100;
    background: $error-color;
    color: #fff;
    text-align: center;
    padding: 12px 20px;
    font-size: 14px;
    white-space: nowrap;
    width: 200px;
    max-width: 70%;
    left: 10%;
    border-radius: 3px;

    &::before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top: 0;
        border-bottom-color: $error-color;
        border-bottom-width: 7px;
        position: absolute;
        bottom: 99%;
        z-index: 1000;
        left: 45%;
    }
}
</style>