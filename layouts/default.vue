<template>
  <div>
    <Header ref="headerMain" v-if="mainHeader && !elseHeader" />
    <HeaderElse ref="headerMain" v-if="!mainHeader && elseHeader" />
    <Nuxt />
    <Footer ref="footer" />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  data () {
    return {
      mainHeader: true,
      elseHeader: false
    }
  },
  components: { Footer },
  mounted () {
    if (this.$route.path === '/' || this.$route.path === '/en') {
      this.mainHeader = true
      this.elseHeader = false
    } else {
      this.mainHeader = false
      this.elseHeader = true
    }
  },
  watch: {
    $route(to, from) {
      document.documentElement.style.overflow = "auto"
      if (to.path === '/' || to.path === '/en') {
        this.mainHeader = true
        this.elseHeader = false
      } else {
        this.mainHeader = false
        this.elseHeader = true
      }
    }
  }
}
</script>

<style>

</style>