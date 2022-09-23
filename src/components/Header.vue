<template>
  <header class="app-header">
    <div class="layui-container header_con">
      header
      <Dropdown
        trigger="click"
        placement="bottom-end"
        @on-click="onDropdownClick"
        v-if="store.state.userInfo.type !== UserType.unknow"
      >
        <span>
          <Avatar
            class="avatar"
            src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          />
          <Icon type="ios-arrow-down"></Icon>
        </span>
        <template #list>
          <DropdownMenu>
            <DropdownItem name="editProfile">编辑资料</DropdownItem>
            <DropdownItem name="exit">退出</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <div v-else>
        <Space>
          <Button ghost type="text" :to="{ name: 'login' }">登入</Button>
          <Button ghost type="default" :to="{ name: 'reg' }">注册</Button>
        </Space>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { UserType } from "@/store/type";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

console.log("store", store);

const onDropdownClick = (name: "editProfile" | "exit") => {
  if (name === "exit") {
    store.commit("setUserInfo", { type: UserType.unknow });
    router.push({ name: "home" });
  }
};
</script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: $headerHeight;
  background-color: $headerBackgroundColor;
}
.header_con {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  cursor: pointer;
}
</style>
