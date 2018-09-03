<template>
  <div id="app"></div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'demo',
  data() {
    return {

    }
  }
}

if (process.BROWSER_BUILD) {
  require('~/assets/js/demo/index')
}
</script>
