import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'



const router = createRouter({
	scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
	history: createWebHistory(),
	routes
})

export default router