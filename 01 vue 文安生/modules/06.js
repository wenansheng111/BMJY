import  Vue from 'vue';

//构建应用 
let app = new Vue({
    //视图 
    el:'#app',
    data:{
        title:'<b>hello EveryBodys</b>'
    }
})
setTimeout(() => {
    app.title = '我爱你们！！！！！！！！！';
},2000)