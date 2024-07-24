<template>
  <div id="editor"></div>
</template>

<script>
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn';

export default {
  name: 'QingMengTuieditor',

  data() {
    return {
    };
  },

  mounted() {
    const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  language: 'zh_CN',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});

editor.getMarkdown();
  },

  methods: {
    
  },
};
</script>