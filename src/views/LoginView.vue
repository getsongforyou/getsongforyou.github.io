<template>
  <div class="login">
    <div class="login__card">
      <div class="login__card-title">青檬</div>
      <div class="login__card__form">
        <el-input
          v-model="user"
          style="max-width: 300px"
          placeholder="Please input"
          class="login__card__form-item"
          type="text"
          maxlength="12"
          minlength="2"
        >
          <template #prepend>&nbsp;&nbsp;&nbsp;&nbsp;user:&nbsp;&nbsp;&nbsp;&nbsp;</template> </el-input
        ><el-input
          v-model="password"
          style="max-width: 300px"
          placeholder="Please input"
          class="login__card__form-item"
          type="password"
          maxlength="18"
          minlength="8"
        >
          <template #prepend>password:</template>
        </el-input>
        <el-button @click="loginEffect" type="primary" class="login__card__form-item" plain>Login</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { postLogin } from '@/api/loginapi';

export default {
  name: "QingMengLoginView",

  data() {
    return {
      user: "",
      password: "",
    };
  },

  mounted() {},
  created(){
    console.log(this.$router)
    console.log(1)
  },

  methods: {
    // check form
    checkForm(){
    },
    // sign in
    loginEffect(){
      this.checkForm()
      postLogin({
        user: this.user,
        password: this.password}).then(res=>{
          console.log(res)
          console.log(typeof res.data.code)
          if(res.data.code=='200'){
            this.$router.push({path: '/home'})
          }else{
            this.user = ''
            this.password = ''
            // this.$notify({
            //   title: 'error',
            //   message: 'error',
            //   type: 'error',
            //   duration: 3000,
            // })
            this.$message({
              title: 'error',
              message: '用户名或密码错误',
              type: 'error',
              duration: 3000
            })
            
            console.log('alert')
          }
        })
    }
  },
};
</script>

<style lang="scss">
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/img/qm.jfif');
    background-size: 100% 100%;
    &__card{
        width: 400px;
        background-color: rgba($color: #fff, $alpha: 0.5);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 30px;
        align-items: center;
        &-title{
            color: #323;
            font-size: 24px;
            margin-bottom: 30px;
        }
        &__form{
            display: flex;
            flex-direction: column;
            &-item{
                margin-bottom: 10px;
            }
        }
    }
}
</style>