<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in"> 

        <router-view :key="key" >
        </router-view>
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
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}</style>