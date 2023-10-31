<template>
  <div class="root">
    <header>Header page {{ count }}</header>
    <button @click="onChangeCount">Count</button>
    <br>
    <NuxtLink to="/scroll/long-page">Long page</NuxtLink>
    <Nuxt />
    <notifications group="foo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  scrollToTop: true,
  computed: {
    ...mapState({
      // count: function(state){
      //   return state.counter
      // }
      count: state => state.counter,
    }),
  },
  methods: {
    ...mapActions([
      'increment'
    ]),
    onChangeCount(){
      this.increment();
    }
  }
}
</script>

<style></style>
