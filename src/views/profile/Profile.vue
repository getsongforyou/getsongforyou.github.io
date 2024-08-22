<template>
  <div class="container">
    <div class="about">
      <div class="title">
        <h2>About me</h2>
      </div>
      <div class="avatar">
        <img src="../../assets/img/avator.jpg" alt="avatar.jpg" srcset="">
        <div class="username">
          {{ username }}
        </div>
      </div>
      <div class="skill">
        <div class="skill-item">
          <span class="skill-item-name">vue</span>
          <el-progress :percentage="proVue"></el-progress>
        </div>
        <div class="skill-item">
          <span class="skill-item-name">javascript</span>
          <el-progress :percentage="proJs"></el-progress>
        </div>
        <div class="skill-item">
          <span class="skill-item-name">css</span>
          <el-progress :percentage="proCss"></el-progress>
        </div>
      </div>
    </div>

    <div class="content">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="activity" name="first">
      <activity></activity>
    </el-tab-pane>
    <el-tab-pane label="timeline" name="second">
      <timeline></timeline>
    </el-tab-pane>
    <el-tab-pane label="account" name="third">
      <account></account>
    </el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>

<script>
import Account from './components/account.vue';
import activity from './components/activity.vue';
import Timeline from './components/timeline.vue';
export default {
    components: { activity, Timeline, Account },
  name: 'QingMengProfile',

  data() {
    return {
      proVue: 70,
      proJs:60,
      proCss: 50,
      username: this.$store.state.username,
      activeName: 'first'
    };
  },

  mounted() {
    
  },

  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
};
</script>

<style >
.container{
  padding: 20px 10px;
  display: flex;
  align-items: flex-start;
}
.about{
  width: 350px;
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
}
.title{
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
.username{
  margin-top: 10px;
}
.avatar{
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  
}
.skill{
  margin-bottom: 10px;
  padding: 10px;

}
.skill-item{
  margin-bottom: 10px;
}
.content{
  flex: 1;
}
</style>