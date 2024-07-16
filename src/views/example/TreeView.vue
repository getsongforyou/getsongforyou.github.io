<template>
  <div class="tree">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    >
    </el-tree>
  </div>
</template>

<script>
import { getTree } from '@/api/treeapi';

export default {
  name: "QingMengTreeView",

  data() {
    return {
        data: null
    };
  },

  created(){
    getTree().then(
        res=>{
            this.data = res.data.data.tree
        }
    )
  },

  mounted() {},

  methods: {},
};
</script>