<template>
  <div>
    Hello {{  username }}!
  </div>
</template>

<script>
export default {
  name: 'QingMengDashBoard',

  data() {
    return {
      
    };
  },
  computed: {
    username(){
      return this.$store.state.username
    }
  },


  mounted() {
    
  },
  created(){
    // console.dir('dir route',this.$route)
  },

  methods: {
    
  },
};
</script>

<style  scoped>

div{
  font-size: 40px;
}
</style>