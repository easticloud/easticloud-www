<template>
    <div ref="mapContainer" class="u-map"></div>
</template>

<script>
let amapLoadPromise = null;

const AMAP_SCRIPT_ID = "amap-jsapi-script";
const AMAP_SCRIPT_BASE_URL = "https://pass-api.ibtmap.com/a/webapi/maps";

export default {
    name: "ContactMap",
    data() {
        return {
            amapKey: process.env.VITE_AMAP_KEY || "",
            amap: null,
            map: null,
            groupMarker: null,
            // 原百度地图 BD-09 坐标转换后的高德 GCJ-02 坐标。
            targetLocation: { lng: 118.720341, lat: 31.992163 },
            center: { lng: 118.720341, lat: 31.992163 },
            zoom: 16,
            isMobile: false,
        };
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth < 768;
        },
        getLabelHtml() {
            const width = this.isMobile ? 300 : 350;
            return `
                <div class="m-address" style="width:${width}px">
                    <div class="u-logo">
                        <img src="/images/index/contact/logo.svg" alt="江苏东云互联网络科技有限公司" />
                    </div>
                    <div class="u-info">
                        <span class="u-title">江苏东云互联网络科技有限公司</span>
                        <span>江苏省南京市建邺区江东中路359号国睿大厦1号楼B座16层</span>
                    </div>
                </div>
            `;
        },
        getMarkerHtml() {
            // 地址框背景自带定位尖角，按尖角在背景图中的位置对齐地图坐标。
            const labelLeft = this.isMobile ? -106 : -124;
            return `
                <div class="m-map-marker">
                    <div class="u-address" style="left:${labelLeft}px">${this.getLabelHtml()}</div>
                </div>
            `;
        },
        loadAmapScript() {
            if (window.AMap) return Promise.resolve(window.AMap);
            if (amapLoadPromise) return amapLoadPromise;

            amapLoadPromise = new Promise((resolve, reject) => {
                const existingScript = document.getElementById(AMAP_SCRIPT_ID);
                const handleLoad = () => {
                    if (window.AMap) {
                        resolve(window.AMap);
                    } else {
                        amapLoadPromise = null;
                        reject(new Error("高德地图 JS API 加载完成，但 window.AMap 不存在"));
                    }
                };
                const handleError = () => {
                    amapLoadPromise = null;
                    reject(new Error("高德地图 JS API 加载失败"));
                };

                if (existingScript) {
                    existingScript.addEventListener("load", handleLoad, { once: true });
                    existingScript.addEventListener("error", handleError, { once: true });
                    return;
                }

                const script = document.createElement("script");
                script.id = AMAP_SCRIPT_ID;
                script.type = "text/javascript";
                script.src = `${AMAP_SCRIPT_BASE_URL}?key=${encodeURIComponent(this.amapKey)}`;
                script.async = true;
                script.onload = handleLoad;
                script.onerror = handleError;
                document.head.appendChild(script);
            });

            return amapLoadPromise;
        },
        createMarker() {
            this.groupMarker = new this.amap.Marker({
                position: [this.targetLocation.lng, this.targetLocation.lat],
                anchor: "bottom-center",
                content: this.getMarkerHtml(),
                zIndex: 120,
            });
            this.map.add(this.groupMarker);
        },
        async initMap() {
            if (!this.amapKey) {
                console.error("缺少 VITE_AMAP_KEY，无法加载高德地图");
                return;
            }

            try {
                this.amap = await this.loadAmapScript();
                this.map = new this.amap.Map(this.$refs.mapContainer, {
                    viewMode: "2D",
                    center: [this.center.lng, this.center.lat],
                    zoom: this.zoom,
                    resizeEnable: true,
                    scrollWheel: true,
                });
                this.createMarker();
            } catch (error) {
                console.error(error);
            }
        },
        handleResize() {
            this.checkMobile();
            if (this.groupMarker) this.groupMarker.setContent(this.getMarkerHtml());
        },
    },
    async mounted() {
        this.checkMobile();
        await this.initMap();
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
        if (this.map) {
            this.map.destroy();
            this.map = null;
        }
    },
};
</script>
