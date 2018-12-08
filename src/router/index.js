import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import main from '@/components/main'
import first from '@/pages/main/first'
import user from '@/pages/main/user'
import edit from '@/pages/main/edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      redirect: '/main/first',
      children: [
        {
          path: 'first',
          component: first
        },
        {
          path: 'user',
          component: user
        },
        {
          path: 'edit',
          component: edit
        }
      ]
    }
  ]
})
