import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import Scroll from '../components/Scroll.vue'
import Animation from '../components/Animation.vue'
import VueTableApp from '../components/VueTable2/VueTable2App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vuetable2',
      component: VueTableApp
    },
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
    {
      path: '/animation',
      component: Animation
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
