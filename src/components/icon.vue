<template>
    <svg class="icon">
      <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
  },
  computed:{
     iconName(){
      return `#icon-${this.name}`
     }
  }
}
</script>

<style type="text/css">
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>