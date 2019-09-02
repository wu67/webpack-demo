<template>
    <div class="page-a bp da"
         ref="pa">page-a</div>
</template>

<script>
export default {
  name: 'PageA',
  mounted() {
    console.log(this.$refs.pa.className)
  },
}
</script>

<style lang="scss" scoped>
#app {
    color: #C03639;
}
.page-a {
    /*display: none;*/
}
</style>
