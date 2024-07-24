<template>
  <div id="container">
    <Editor
      api-key="hcfpvwt52sevcmkg234e20q5c6y92ep8qhs8lxqv0r2d6qgs"
      :init="{
        plugins: 'lists link image table code help wordcount',
        language: 'zh_CN',
        // language_url: '/src/tinymce/langs/zh_CN.js'
      }"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'QingMengTinymec',

  components: {Editor},

  data() {
    return {
       
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>