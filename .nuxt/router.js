import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _393b2a26 = () => interopDefault(import('..\\pages\\documentations\\index.vue' /* webpackChunkName: "pages/documentations/index" */))
const _785b3c68 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _670e6064 = () => interopDefault(import('..\\pages\\projects\\_name.vue' /* webpackChunkName: "pages/projects/_name" */))
const _2f9b5906 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/documentations",
    component: _393b2a26,
    name: "documentations___uk"
  }, {
    path: "/projects",
    component: _785b3c68,
    name: "projects___uk"
  }, {
    path: "/projects/:name",
    component: _670e6064,
    name: "projects-name___uk"
  }, {
    path: "/",
    component: _2f9b5906,
    name: "index___uk"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
