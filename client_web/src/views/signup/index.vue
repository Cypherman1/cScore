<template>
  <div class="signup-container">
    <el-form
      ref="signupForm"
      :model="signupForm"
      :rules="signupRules"
      class="signup-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Signup</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input
          ref="username"
          v-model="signupForm.username"
          placeholder="Name"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="email">
        <span class="svg-container">
          <i class="el-icon-message"></i>
        </span>
        <el-input
          ref="email"
          v-model="signupForm.email"
          placeholder="Email"
          name="email"
          type="text"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="signupForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="3"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          :key="passwordType"
          ref="confirmPassword"
          v-model="signupForm.confirmPassword"
          :type="passwordType"
          placeholder="Confirm password"
          name="password"
          tabindex="4"
          auto-complete="on"
          @keyup.enter.native="handleSignup"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:20px;"
        @click.native.prevent="handleSignup"
      >
        Signup
      </el-button>
      <div style="text-align:center;">
        <span style="margin-right: 10px; color: white">Or signup with</span>
        <el-button style="padding:5px; padding-right: 10px; padding-left: 10px">
          <img
            style="width: 20px;"
            :src="require(`../../assets/imgs/google-logo.png`)"
          />
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername, validEmail } from '@/utils/validate'

export default {
  name: 'Signup',
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter a valid email!'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.signupForm.password) {
        callback(new Error('The passwords do not match!'))
      } else {
        callback()
      }
    }
    return {
      signupForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      signupRules: {
        // username: [
        //   { required: true, trigger: 'blur', validator: validateUsername }
        // ],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        confirmPassword: [
          {
            required: true,
            trigger: 'blur',
            validator: validateConfirmPassword
          }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleSignup() {
      //   this.$refs.signupForm.validate((valid) => {
      //     if (valid) {
      //       this.loading = true
      //       this.login(this.loginForm)
      //         .then(() => {
      //           this.$router.push({ path: this.redirect || '/' })
      //           this.loading = false
      //         })
      //         .catch(() => {
      //           this.loading = false
      //         })
      //       // this.$store
      //       //   .dispatch('user/login', this.loginForm)
      //       //   .then(() => {
      //       //     this.$router.push({ path: this.redirect || '/' })
      //       //     this.loading = false
      //       //   })
      //       //   .catch(() => {
      //       //     this.loading = false
      //       //   })
      //     } else {
      //       console.log('error submit!!')
      //       return false
      //     }
      //   })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .signup-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.signup-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.signup-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .signup-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
