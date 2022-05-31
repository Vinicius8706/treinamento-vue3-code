import { createRouter, createWebHistory } from 'vue-router'

const Feedbacks = () => import('')
const Home = () => import('')
const Credencials = () => import('')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: { hasAuth: true }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,

    meta: { 
      hasAuth: true
     } //metadado para o usuario estar autenticado
  }, 
  { path: '/:pathMatch(.*)*'  ,redirect: {name: 'Home'}}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
