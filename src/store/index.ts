import { createStore } from "vuex";
import { RootState } from "./type";
import { LocalStorage } from "./../utils/LocalStorage";

const createDefaultState = (): RootState => {
  const state = {
    sid: LocalStorage.get("sid") || "",
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
  },
});

export default store;
