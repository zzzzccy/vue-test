import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import main from '@/components/user/main'
import first from '@/pages/user/first'
import user from '@/pages/user/user'
import edit from '@/pages/user/edit'
import addOrder from '@/pages/user/addOrder'
import order from '@/pages/user/order'
import evaluation from '@/pages/user/evaluation'

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
      path: '/user/main',
      name: '/user/main',
      component: main,
      redirect: '/user/main/first',
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
        },
        {
          path: 'addOrder',
          component: addOrder
        },
        {
          path: 'order',
          component: order
        },
        {
          path: 'evaluation',
          component: evaluation
        }
      ]
    }
  ]
})
