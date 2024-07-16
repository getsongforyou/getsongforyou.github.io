<template>
  <section>
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'QingMengAppMain',

  data() {
    return {
      
    };
  },
  computed: {
    key(){
      return this.$route.path
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>