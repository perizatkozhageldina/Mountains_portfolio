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
  z-index: 100;
  background: $error-color;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
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
    left: 0;
  }
}
</style>