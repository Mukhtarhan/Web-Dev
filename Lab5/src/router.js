import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue'
import ProductList from './views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/productsbycategory/:id',
      name: 'ProductList',
      component: ProductList,
    },
  ],
})

export default router
 