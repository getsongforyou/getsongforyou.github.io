<template>
  <div class="tree">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :filter-node-method="filterNode"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>
import { getTree } from "@/api/treeapi";

export default {
  name: "QingMengTreeView",

  data() {
    return {
      data: null,
      filterText: ''
    };
  },
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

  created() {
    getTree().then((res) => {
      this.data = res.data.tree;
    });
  },

  mounted() {},

  methods: {
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
  },
};
</script>