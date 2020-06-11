<template>
  <div class="login-wrap">
    <div class="user-login">
      <div class="login-title">后台管理系统</div>
      <el-form
        :model="loginParams"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="login-content"
      >
        <el-form-item prop="username">
          <el-input v-model="loginParams.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="loginParams.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="el-icon-view"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 管理员账户admin，普通账户user，密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { login } from '@/api/user'

export default {
  name: 'Login',
  data: function() {
    return {
      loginParams: {
        username: 'admin',
        password: '123456'
      },
      redirect: undefined,
      otherQuery: {},
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      updateToken: 'user/updateToken'
    }),
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          const params = {
            username: this.loginParams.username,
            password: this.loginParams.password
          }
          login(params).then(res => {
            if (res.code === 200) {
              this.updateToken(res.data.token)
              //   this.updateUserInfo()
              this.$message.success('登录成功')
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
            } else {
              this.$message.error('登录失败')
            }
          })
        } else {
          this.$message.error('请完善您的信息')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #092443;
}
.user-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 420px;
  margin: -180px 0 0 -210px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
  .login-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .login-content {
    padding: 30px 30px;
  }
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
