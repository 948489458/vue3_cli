/**
 * 全局菜单管理
 */
const state = {
    urlConfig: {}, // 请求配置文件

};
const mutations = {
    SET_CONFIG(state, config) {
        state.urlConfig = config;
    }
};

export default {
    namespaced: true,
    state,
    mutations
}