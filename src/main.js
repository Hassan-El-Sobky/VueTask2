import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import homeComp from './components/home.vue';
import aboutComp from './components/about.vue';
import contactComp from './components/contact.vue';
import specificUserComp from './components/userByid.vue';
import addUserComp from './components/addUser.vue';
import updateuserComp from './components/userupdate.vue'
const routes=[
    {path:'/home' , component:homeComp},
    {path:'/about' , component:aboutComp},
    {path:'/contact' , component:contactComp},
    {path:'/user/:id',component:specificUserComp,name:'user'},
    {path:'/userupdate/:id',component:updateuserComp,name:'userupdate'},
    {path:'/addUser',component:addUserComp}
    
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
