//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//先把VueRouter原型对象的push，存一份下来
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push replace
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=> { }, ()=> { });
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=> { }, ()=> { });
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search",
            // props:true,
            // props:{a:1,b:2},
            props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        //重定向，项目跑起来的时候，访问/立马的让他定向到首页
        {
            path:"*",
            redirect:"/home"
        }
    ]
})
