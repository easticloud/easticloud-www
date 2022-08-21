import axios from "axios";
const __cms = "https://cms.easticloud.iruxu.com/";

// cms通用请求接口
function $cms(options) {
    let domain = (options && options.domain) || __cms;
    let config = {
        // 同时发送cookie和basic auth
        withCredentials: true,
        auth: {
            username: (localStorage && localStorage.getItem("token")) || "",
            password: "cms common request",
        },
        baseURL: process.env.NODE_ENV === "production" ? domain : "/",
        headers: {},
    };

    // 创建实例
    const ins = axios.create(config);

    // 指定拦截器

    return ins;
}

export { $cms };
