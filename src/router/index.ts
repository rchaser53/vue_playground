import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'
import Scroll from '@/components/Scroll'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      // name is used for recursive calling
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'and-goodbye',
          component: Test
        }
      ]
    },
    {
      path: '/hello-without-test',
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
    {
      path: '/scroll',
      component: Scroll
    },
    // after winning
    { 
      path: '*',
      name: 'aaa',
      component: {
        template: '<div>hazure</div>'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    if (to.path === '/scroll') {
      // return {
      //   x: 0,
      //   y: 20
      // }
      /** Incredible Smart, right? */
      return {
        selector: '.poyo'
      }
    }
    return savedPosition
  }
})
