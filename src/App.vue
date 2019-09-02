<template>
    <div id="app">vue app
        <page-a></page-a>
        <page-b></page-b>
    </div>
</template>

<script>
import PageA from '@/pages/PageA'
import PageB from '@/pages/PageB'

export default {
  components: {
    PageA,
    PageB,
  },
  name: 'App',
  created() {
    console.log('vue created')
    let oa = { a: 1 }
    let ob = { b: 2 }
    console.log(Object.assign(oa, ob))
  },
}
</script>

<style lang="scss">
@import './style/base';
</style>

<style lang="scss" scoped>
@import './style/style1.css';
@import './style/style2.css';
</style>
