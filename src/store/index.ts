import { createStore } from "vuex";
import { RootState, UserInfo, UserType } from "./type";
import { LocalStorage } from "@/utils/LocalStorage";

const createDefaultState = (): RootState => {
  const state = {
    sid: LocalStorage.get("sid") || "",
    userInfo: LocalStorage.get<UserInfo>("userInfo", true) || {
      type: UserType.unknow,
    },
  };
  return state;
};

// 创建一个新的 store 实例
const store = createStore<RootState>({
  state() {
    return createDefaultState();
  },
  mutations: {
    setSid(state: RootState, sid: string) {
      LocalStorage.set({ sid });
      state.sid = sid;
    },
    setUserInfo(state: RootState, userInfo: UserInfo) {
      LocalStorage.set({ userInfo });
      state.userInfo = userInfo;
    },
  },
});

export default store;
