import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name is used for recursive calling
      name: 'Hello',
      component: Hello
    },
    {
      path: '/nyan',
      component: Test
      // component: Vue.component('Test', {
      //   template: '<div>{{message}}</div>',
      //   props: ['message']
      // })
    },
    // after winning
    { 
      path: '*',
      name: 'aaa',
      component: {
        template: '<div>hazure</div>'
      }
    }
  ]
})
