import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

Vue.use(VueRouter)

var router = new VueRouter({
   history: false,
   root: '/'
})

router.map({
    '/foo': {
        component: function (resolve) {
	      require(['./components/Foo.vue'], resolve)
	    }
    },
    '/bar': {
        component: function (resolve) {
	      require(['./components/Bar.vue'], resolve)
	    }
    }
});
router.start(App, '#app')