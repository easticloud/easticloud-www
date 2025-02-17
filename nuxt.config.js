import { Description, Title, API } from "./settings";
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: Title,
        htmlAttrs: {
            lang: "zh-CN",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" },
            { hid: "description", name: "description", content: Description },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["element-ui/lib/theme-chalk/index.css", "csslab/reset.css",'@/assets/css/main.less'],
    buildModules: ["@nuxtjs/style-resources", "@nuxtjs/svg"],
    styleResources: {
        less: ["csslab/base.less", "./assets/css/var.less"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/element-ui"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
    axios: {
        proxy: true,
    },
    proxy: {
        "/api/cms": {
            target: process.env["DEV_SERVER"] == "true" ? "http://localhost:9027" : API.cms,
            // pathRewrite: {
            //     "^/api": "/",
            // },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        transpile: [/^element-ui/],
    },
};
