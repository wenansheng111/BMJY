//引入vue
import Vue from 'vue';
//构建应用 
let app = new Vue({
    //视图
    el:'#app',
    //模型
    data:{
        title:'hello',
        books:['这本书能够让你戒烟','三国演义','水浒传'],
        person:{
            name:'赵云',
            sex:'男'
        },
        xxoo:''
    }
})
//修改普通值
// app.title = 'i love you';
// // 1. 数组中的基础值类型
// app.books[1] = '道德经';
// // 更新整个数组
// app.books = ['这本书能够让你戒烟','道德经','论语'];
//2. 数组中新增的值 
// app.books.push('鬼谷子');//可以
// app.books[3] = "鬼谷子";
// 3. 对象新增的属性 
app._data.person.age = 18;
// // 更新整个对象 
// app.person = {
//     name:'张三',
//     sex:'nan',
//     age:11
// }

// // 4. 未初始化的数据 
// app.xxoo = 'ooxx';
// //使用set方法
// app.$set(app.books,3,'这本书能让你快乐')
// app.$set(app.person, 'age', 22);
// console.log(app);
