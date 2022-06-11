export default [
    {
        path: '/',
        name: "Home",
        component: () => import('../views/Home.vue')
    },
    {
        path: '/search',
        name: "Search",
        component: () => import('../views/Search.vue')
    },
]
