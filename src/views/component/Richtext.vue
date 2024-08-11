<template>
  <div
  v-loading = loading>
    <tinymec-vue></tinymec-vue>
</div>
</template>

<script>
import tinymecVue from '@/components/tinymec.vue';

export default {
  name: 'QingMengRichtext',

  components: { tinymecVue },

  data() {
    return {
      loading: true
    };
  },

  mounted() {
    
    this.loading = false
  },
  created() {
    setTimeout(() => {
      
    }, 1000);
  },
  
  methods: {
    
  },
};
</script>