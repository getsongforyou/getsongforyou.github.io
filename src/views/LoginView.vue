<template>
  <div class="login">
    <div class="login__card">
      <div class="login__card-title">青檬</div>
      <div class="login__card__form">
        <el-form
          :model="user"
          status-icon
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              type="text"
              v-model="user.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="user.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginEffect(user)"
              >Login</el-button
            >
          </el-form-item>
        </el-form>

        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "QingMengLoginView",

  data() {
    return {
      user: {
        username: "super admin",
        password: "666666",
      }
      
    };
  },

  mounted() {},
  created() {
    console.log(this.$router);
  },

  methods: {
    // check form
    checkForm() {
      if(this.user.username==''||this.user.password==''){
        this.$notify({message:'请输入用户名和密码'})
        return true
      }else{
        return false
      }
    },
    // sign in
    loginEffect() {
      if(this.checkForm())return
      this.$store.dispatch("login", this.user).then((s) => {
        if(s){
          this.$router.push("/");

        }else{
          this.$notify({
            title: 'error',
            message: '用户名或密码错误',
            duration: 3000
          })
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/qm.jfif");
  background-size: 100% 100%;
  &__card {
    width: 400px;
    background-color: rgba($color: #fff, $alpha: 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    &-title {
      color: #323;
      font-size: 24px;
      margin-bottom: 30px;
    }
    &__form {
      display: flex;
      flex-direction: column;
      &-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>