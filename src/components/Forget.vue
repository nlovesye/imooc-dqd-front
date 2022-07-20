<template>
  <div class="forget">
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
            <button class="layui-btn" lay-filter="formDemo">提交</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { useForm, Form, Field, ErrorMessage } from "vee-validate";

type FormField = "userName" | "code";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const captchaSvgCode = ref<string>("");

    const initialValues: Record<FormField, string> = {
      userName: "",
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
      axios.get("http://localhost:7000/public/getCaptcha").then((response) => {
        if (response.status === 200) {
          const { code, data } = response.data;
          if (code === 200) {
            captchaSvgCode.value = data.data;
          }
        }
      });
    }

    const onSubmit = async () => {
      console.log("onLogin", formValues);
    };

    onMounted(() => {
      getCaptchaCode();
    });

    return {
      captchaSvgCode,
      validationSchema,
      getCaptchaCode,
      formValues,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.forget {
  height: 100%;
  padding-top: 16px;

  .layui-container {
    background-color: #fff;
    padding: 2px 20px 12px;
  }

  input {
    width: 190px;
  }

  .captch-code-svg {
    cursor: pointer;
  }

  .error-text {
    color: red;
  }
}
</style>
