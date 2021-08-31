/**
 * 首页相关api管理
 */
import axios from '../../utils/axios'//相当于axios.create
import store from '../../store/index'


//  /**
//   * 修改默认请求配置文件
//   */
const axiosAPI = function (obj) {
    return axios({
        configURL: store.state.globalConfig.urlConfig,
        url: '/api/v1' + obj.url,
        method: obj.method,
        params: obj.params,
        data: obj.data,
        headers: obj.headers
    });
};

export const firstApi = (data) => {
    return axiosAPI({
        url: '/testApi',
        method: "get",
        data: {
            aaa: data
        }
    })
};