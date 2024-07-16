<template>
  <aside class="sidebar">
    <!-- 子路由仅有一个或没有时，作为选项，多个时，作为下拉菜单 -->
    <template v-if="isMenuItem(routeItem)">
      <el-menu-item :index="onlyChild.path">
        {{ onlyChild.meta.title }}
      </el-menu-item>
    </template>
    <el-submenu v-else :index="routeItem.path">
      <template slot="title">
        <div v-if="routeItem.meta">{{ routeItem.meta.title }}</div>
      </template>
      <qing-meng-sidebar v-for="child in routeItem.children"
      :key="child.path"
      :routeItem="child">
    </qing-meng-sidebar>
    </el-submenu>
  </aside>
</template>

<script>
export default {
  name: 'QingMengSidebar',
  props: {
    routeItem: {
      type: Object,
      required: true
    }
  },

  data() {
    this.onlyChild = null
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    isMenuItem(route){
      // if((route.hasOwnProperty('children')&&route.children.length<2)||!route.hasOwnproperty('children')){
      //   return true
      // }else{
      //   return false
      // }
      let children = route.children || []
      const showChildren = children.filter(item=>{
        if(item.hidden){
          return false
        }else{
          this.onlyChild = item;
          return true
        }
      })
      if(showChildren.length ===1){
        return true
      }
      if(showChildren.length===0){
        this.onlyChild = {...route,path: ''}
        return true
      }
      return false
    }
  },
};
</script>