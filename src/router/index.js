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
import complaint from '@/pages/user/complaint'
import admin from '@/components/admin'
import adminuser from '@/pages/admin/admin-user'
import admindriver from '@/pages/admin/admin-driver'
import adminorder from '@/pages/admin/admin-order'
import orderlist from '@/pages/admin/orderlist'
import adminevaluation from '@/pages/admin/admin-evaluation'
import admincomplaint from '@/pages/admin/admin-complaint'

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
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: '/admin/adminuser',
      children: [
        {
          path: 'adminuser',
          component: adminuser
        },
        {
          path: 'admindriver',
          component: admindriver
        },
        {
          path: 'adminorder',
          component: adminorder
        },
        {
          path: 'orderlist',
          component: orderlist
        },
        {
          path: 'adminevaluation',
          component: adminevaluation
        },
        {
          path: 'admincomplaint',
          component: admincomplaint
        }
      ]
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
        },
        {
          path: 'complaint',
          component: complaint
        }
      ]
    }
  ]
})
