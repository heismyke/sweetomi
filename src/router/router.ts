import { reactive } from "vue";
import type { ViewName } from "../types";

interface RouterState {
  currentView: ViewName;
  params: Record<string, string>;
}

const state = reactive<RouterState>({
  currentView: "home",
  params: {},
});

export const router = {
  state,

  navigate(view: ViewName, params: Record<string, string> = {}) {
    state.currentView = view;
    state.params = params;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  back() {
    window.history.back();
  },

  getCurrentView(): ViewName {
    return state.currentView;
  },

  getParams(): Record<string, string> {
    return state.params;
  },
};
