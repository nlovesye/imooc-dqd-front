<template>
  <div class="reg">
    <div class="layui-container">
      <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
          <router-link :to="{ name: 'login' }">
            <li>登录</li>
          </router-link>
          <li class="layui-this">找回密码</li>
        </ul>

        <div class="layui-tab-content">
          <Form
            class="layui-form layui-form-pane"
            @submit="onSubmit"
            :validation-schema="validationSchema"
          >
            <div class="layui-form-item">
              <label class="layui-form-label">手机/邮箱</label>
              <div class="layui-input-block">
                <Field
                  type="text"
                  name="userName"
                  placeholder="请输入手机/邮箱"
                  autocomplete="off"
                  class="layui-input"
                  v-model="formValues.userName"
                />
                <ErrorMessage class="error-text" name="userName" />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">昵称</label>
              <div class="layui-input-block">
                <Field
                  type="text"
                  name="nickName"
                  placeholder="请输入昵称"
                  autocomplete="off"
                  class="layui-input"
                  v-model="formValues.nickName"
                />
                <ErrorMessage class="error-text" name="nickName" />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">密码</label>
              <div class="layui-input-block">
                <Field
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  autocomplete="off"
                  class="layui-input"
                  v-model="formValues.password"
                />
                <ErrorMessage class="error-text" name="password" />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">确认密码</label>
              <div class="layui-input-block">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="请输入密码"
                  autocomplete="off"
                  class="layui-input"
                  v-model="formValues.confirmPassword"
                />
                <ErrorMessage class="error-text" name="confirmPassword" />
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">验证码</label>
              <div class="layui-input-inline">
                <Field
                  type="text"
                  name="code"
                  placeholder="请输入验证码"
                  autocomplete="off"
                  class="layui-input"
                  v-model="formValues.code"
                />
                <ErrorMessage class="error-text" name="code" />
              </div>
              <div
                class="layui-form-mid layui-word-aux captch-code-svg"
                v-html="captchaSvgCode"
                @click="getCaptchaCode"
                title="点击刷新验证码"
              ></div>
            </div>
            <button class="layui-btn" lay-filter="formDemo">立即注册</button>

            <div class="third-platform">或者直接使用社交账号快捷注册</div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useForm, Form, Field, ErrorMessage } from "vee-validate";
import { v4 as uuidv4 } from "uuid";
import { Message } from "view-ui-plus";
import { useRouter } from "vue-router";

import { getCaptcha } from "@/api/public";
import { useStore } from "vuex";
import { RootState } from "@/store/type";
import { reg } from "@/api/user";

type FormField =
  | "userName"
  | "password"
  | "code"
  | "nickName"
  | "confirmPassword";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const store = useStore<RootState>();
    const router = useRouter();

    const captchaSvgCode = ref<string>("");

    const initialValues: Record<FormField, string> = {
      userName: "",
      nickName: "",
      password: "",
      confirmPassword: "",
      code: "",
    };

    const validationSchema = {
      userName: validLength,
      password: validLength,
      code: (value: unknown) => {
        const val = value as string;
        if (!val || !val.trim()) {
          return "不能为空!";
        }
        if (val.length !== 4) {
          return "请输入4位验证码!";
        }
        return true;
      },
      nickName: validLength,
      confirmPassword: validLength,
    };

    const { values: formValues } = useForm({
      initialValues,
      validationSchema,
    });

    function validLength(value: unknown) {
      const val = value as string;
      if (!val || !val.trim()) {
        return "不能为空!";
      }
      if (val.length < 6 || val.length > 20) {
        return "请输入6-20位字符!";
      }
      return true;
    }

    function getCaptchaCode() {
      let sid = store.state.sid;
      if (!sid) {
        store.commit("setSid", uuidv4());
        sid = store.state.sid;
      }
      getCaptcha({ sid }).then((response) => {
        captchaSvgCode.value = response.data.data;
      });
    }

    const onSubmit = async () => {
      if (formValues.password !== formValues.confirmPassword) {
        Message.error("两次输入的密码不相同");
        return;
      }
      const ret = await reg({
        username: formValues.userName,
        password: formValues.password,
        code: formValues.code,
        sid: store.state.sid,
        nickName: formValues.nickName,
      });
      if (ret.code === 200) {
        Message.success(ret.msg);
        setTimeout(() => {
          router.push({ name: "login" });
        }, 1000);
      }
    };

    onMounted(() => {
      getCaptchaCode();
    });

    return {
      captchaSvgCode,
      getCaptchaCode,
      validationSchema,
      formValues,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.reg {
  height: 100%;
  padding-top: 16px;

  .layui-container {
    background-color: #fff;
    padding: 2px 20px 12px;
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

  .captch-code-svg {
    cursor: pointer;
    padding: 0 !important;
  }

  .third-platform {
    margin-top: 28px;
    height: 26px;
    line-height: 26px;
  }

  .error-text {
    color: red;
  }
}
</style>
