import { createRouter, createWebHistory } from 'vue-router'
import App from '../App'
import HomeView from '../views/HomeView.vue'
import Index from '../views/Index'
import Posts from "@/components/Posts";
import Inner from "@/views/Inner";
import SignIn from "@/views/SignIn";
import JumpMarkest from "@/views/JumpMarkest";

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
    }]
  },{
    path: '/inner',
        name: 'Inner',
        component: Inner,
        children: [{
            path: '/signin',
            component: SignIn
        }]

  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
