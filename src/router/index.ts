import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'

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
    },
    {
      path: '/nyan2',
      alias: ['/nyan3'],
      component: Test2
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
