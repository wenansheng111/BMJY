import Vue from 'vue';
let app = new Vue({
    el:'#app',
    data:{
       msg:'hellow'
    },
    //定义方法 
    methods:{
        say(){
            console.log('this is say')
        },
        demo(){
            console.log('this is demo');
            this.say();
        },
        xxoo(...arg){
            console.log(arg)
        }
    }
})
console.log(app);