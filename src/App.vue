<script setup lang="ts">
// // This starter template is using Vue 3 <script setup> SFCs
// // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="user">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">手机/邮箱</label>
          <div class="layui-input-block">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入手机/邮箱" autocomplete="off"
              class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
              class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入验证码" autocomplete="off"
              class="layui-input">
          </div>
        </div>
        <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
        <a type="reset" class="forgot-pwd">忘记密码?</a>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user {
  background-color: #f2f2f2;

  .layui-container {
    background-color: #fff;
  }

  input {
    width: 190px;
  }

  .forgot-pwd {
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color: #009688;
    }
  }
}
</style>
