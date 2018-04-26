<template>
  <div id="app" class="container">
    <Form class="login-form" action="javascript:;" ref="loginForm" :model="data" :rules="rules">
      <FormItem prop="username">
        <Input type="text" placeholder="账号" size="large" v-model.trim="data.username">
        <Icon type="ios-person" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" placeholder="密码" size="large" v-model="data.password">
        <Icon type="ios-locked" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button html-type="submit" type="primary" size="large" long :loading="isLoading" @click="handleSubmit">登录
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.redirectedFrom)
    },
    data() {
      return {
        data: {
          username: '',
          password: '',
          token: ''
        },
        isLoading: false,
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (!valid) {
            return
          }

          this.login()
        })
      },
      login() {
        const data = JSON.parse(JSON.stringify(this.data))

        this.isLoading = true
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container {
    height: 100vh;

    @media screen and (max-width: 980px) {
      background-size: contain;
    }
  }

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
  }
</style>
