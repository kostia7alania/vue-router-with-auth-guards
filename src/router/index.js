import Vue from 'vue'
import VueRouter from 'vue-router'
import testRoutes from './testRoutes'

const HelloWorld = () => import('@/components/HelloWorld')
const failed = () => import('@/components/failed')
const p404 = () => import('@/components/404')

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    ...testRoutes,
    {
        path: '/',
        component: HelloWorld,
        name: 'main',
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/pageNotFound', // чтобы с другого компонента могли перейти!
        alias: '*',
        component: p404
    },
    {
        path: '/failed',
        component: failed
    }
]


window.router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (isAuthed()) {
            next()
        } else {
            next('/failed')
        }
    } else {
        next()
    }
})

function isAuthed() {
    return window.vueInstance.$root.isAuth
}

export default router