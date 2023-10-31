<template>
  <div class="root">
    <header>Header page {{ count }}</header>
    <button @click="onChangeCount">Count</button>
    <ul>
      <li v-for="(item, index) in listPost" :key="index">{{ item }}</li>
    </ul>
    <button @click="onAddItem">Add item</button>
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
      listPost: state => state.posts.list,
    }),
  },
  methods: {
    // ...mapActions([
    //   'increment'
    // ]),
    ...mapActions({
      'increment':  'increment',
      'actAddPost':  'posts/actAddPost',
      
    }),
    onChangeCount(){
      this.increment();
    },
    onAddItem(){
      this.$store.dispatch('posts/actAddPost', 'Item 3');
      // console.log('onAddItem');
      // this.actAddPost('Item 3');
    }
  }
}
</script>

<style></style>
