import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/HomePage.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/AboutPage.vue')
        },
        {
            path: '/experience',
            name: 'experience',
            component: () => import('../components/ExperiencePage.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../components/ProjectsPage.vue')
        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import('../components/WeatherPage.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../components/ContactPage.vue')
        }
    ]
})

router.beforeEach((to, from, next)=>{
    console.log('Navigating from', from.name, 'to', to.name)
    next()
})

export default router;
