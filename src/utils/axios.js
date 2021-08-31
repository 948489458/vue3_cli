import axios from 'axios'

const AXIOS = {
    /**
     * 封装请求方法
     * @params obj {Object} 请求体
     *  obj.method {String} 请求方式  GET POST  默认 GET
     *  obj.configURL {String} 请求的ip http:// 默认使用 config中的 url
     *  obj.url {String} 请求的接口  /aaa
     *  obj.params {JSON} get请求参数  {aa: 1, bb: 2}
     *  obj.data {JSON} post以及其他方式的请求参数
     *  obj.header 请求头设置  默认 application/json;charset=utf-8
     */
    server: (obj) => {
        return new Promise((resolve, reject) => {
            obj.method = obj.method || 'GET';
            // obj.configURL = obj.configURL;
            // obj.url = obj.url || config.url;
            obj.params = obj.params || {};
            obj.data = obj.data || {};
            obj.headers = obj.headers || {
                // 'Content-Type': 'application/json',
                'token':'1231241324'
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'application/x-www-form-urlencoded'
            };
            axios({
                    url: obj.configURL + obj.url,
                    method: obj.method,
                    headers: obj.headers,
                    params: obj.params,
                    data: obj.data
                })
                .then(res => {
                    if (res.status === 200) {
                        resolve(res.data);
                    }
                    // 后期看一下他们的服务有没有其他状态码
                })
                .catch(err => {
                    // 服务器繁忙，请稍后再试
                    reject({
                        status: 500,
                        data: err
                    });
                })
        })
    },
};

export default AXIOS.server;