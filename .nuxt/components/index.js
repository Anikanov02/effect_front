export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FormSendMail = () => import('../..\\components\\FormSendMail.vue' /* webpackChunkName: "components/form-send-mail" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderElse = () => import('../..\\components\\HeaderElse.vue' /* webpackChunkName: "components/header-else" */).then(c => wrapFunctional(c.default || c))
export const Loader = () => import('../..\\components\\loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const ShowPartner = () => import('../..\\components\\showPartner.vue' /* webpackChunkName: "components/show-partner" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
