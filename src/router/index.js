import { createRouter, createWebHistory } from 'vue-router'
import App from '../App'
import Index from '../views/Index'
import Posts from "@/components/Posts";
import Inner from "@/views/Inner";
import SignIn from "@/views/SignIn";
import JumpMarkest from "@/views/JumpMarkest";
import PostDeatil from "@/views/PostDeatil";
import TeamMatch from "@/views/TeamMatch";
import UserCenter from "@/components/UserCenter";
import UserMessage from "@/views/UserMessage";
import MyPosts from "@/components/MyPosts";
import MyGoods from "@/components/MyGoods";
import MyTeams from "@/components/MyTeams";

const routes = [
  {
    path: '/',
    name: 'app',
    component: Index,
    children:[{
        path: '/',
        name: 'posts',
        component: Posts
    },{
        path: '/jumpmarkest',
        name: 'jumpmarkest',
        component: JumpMarkest
    },{
        path: '/teammatch',
        name: 'teammatch',
        component: TeamMatch
    }]
  },{
    path: '/inner',
        name: 'Inner',
        component: Inner,
        children: [{
            path: '/signin',
            component: SignIn
        },{
            path: '/postdeatil',
            component: PostDeatil
        },{
            path: '/usercenter',
            component: UserCenter,
            children:[{
                path: '/usercenter',
                component: UserMessage
            },{
                path: '/myposts',
                component: MyPosts
            },{
                path: '/mygoods',
                component: MyGoods
            },{
                path: '/myteams',
                component: MyTeams
            }]
        }]

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
