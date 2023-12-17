
// vueのインスタンスを作成する
Vue.createApp({
    data() {
        return {
            kome: "※キャラのステータスはR9の値(データクロン、モッドなし)のときの値です"
        }
    },
}).mount("#komejirusi");
import router from "./script/router.js";
Vue.createApp({
    methods: {
        click(){
            console.log('gk is clicked');
        }
    },
}).use(router).mount("#general-kenobi");
