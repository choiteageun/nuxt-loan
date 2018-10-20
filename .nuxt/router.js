import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _65523c89 = () => import('../pages/worker.vue' /* webpackChunkName: "pages/worker" */).then(m => m.default || m)
const _3f0d5694 = () => import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */).then(m => m.default || m)
const _2433b05c = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _65b7c9b8 = () => import('../pages/firststudy.vue' /* webpackChunkName: "pages/firststudy" */).then(m => m.default || m)
const _24ac7294 = () => import('../pages/stafflogin.vue' /* webpackChunkName: "pages/stafflogin" */).then(m => m.default || m)
const _0d9e0297 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/worker",
			component: _65523c89,
			name: "worker"
		},
		{
			path: "/admin",
			component: _3f0d5694,
			name: "admin"
		},
		{
			path: "/about",
			component: _2433b05c,
			name: "about"
		},
		{
			path: "/firststudy",
			component: _65b7c9b8,
			name: "firststudy"
		},
		{
			path: "/stafflogin",
			component: _24ac7294,
			name: "stafflogin"
		},
		{
			path: "/",
			component: _0d9e0297,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
