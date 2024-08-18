<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in"> 
      <keep-alive>
        <router-view :key="key" >
        </router-view>
        
      </keep-alive>

    </transition>
   
  </section>
</template>

<script>
export default {
  name: "QingMengAppMain",

  data() {
    return {};
  },
  computed: {
    key() {
      console.log('key', this.$route.path)
      return this.$route.path;
    }
  },

  mounted() {},

  methods: {},
};
</script>
<style>
.app-main {
  /*50 = navbar  */
  height: calc(100vh - 66px);
  width: 100%;
  position: relative;
  /* overflow-x: hidden; */
  overflow-x: hidden;
  overflow-y: auto;
}
.fixed-header+.app-main {
  padding-top: 50px;
}</style>