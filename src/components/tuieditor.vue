<template>
  <div id="editor"></div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn';
import Editor from '@toast-ui/editor';

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
  language: 'zh-CN',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});
editor.setLanguage('zh_CN')

editor.getMarkdown();
  },

  methods: {
    
  },
};
</script>