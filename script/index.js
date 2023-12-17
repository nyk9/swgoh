// vueのインスタンスを作成する
Vue.createApp({
    data() {
        return {
            kome: "※キャラのステータスはR9の値(データクロン、モッドなし)のときの値です"
        }
    },
}).mount("#komejirusi");
Vue.createApp({
    methods: {
        click(){
            console.log('gk is clicked');
        }
    },
}).mount("#general-kenobi");
