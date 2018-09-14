<template>
  <section>
    <mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="tab1">
    <img slot="icon" src="./assets/logo.png">
    tab1
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="./assets/logo.png">
    tab2
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="./assets/logo.png">
    tab3
  </mt-tab-item>
  <mt-tab-item id="tab4">
    <img slot="icon" src="./assets/logo.png">
    tab4
  </mt-tab-item>
</mt-tabbar>
  </section>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      selected: '1'
    }
  }
}
</script>