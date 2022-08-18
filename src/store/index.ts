import { createStore } from "vuex";
import { RootState } from "./type";

// 创建一个新的 store 实例
const store = createStore<RootState>({
  state() {
    return {
      sid: "",
    };
  },
  mutations: {
    setSid(state: RootState, sid: string) {
      state.sid = sid;
    },
  },
});

export default store;
