<template>
  <header id="header" class="container">
    <nuxt-link :to="localePath('/')">
      <span class="logo-header"></span>
    </nuxt-link>
    <button class="burger-btn" @click="openBurg()">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#C6569A"/>
        <rect x="7" y="7" width="18" height="2.84211" rx="1.42105" fill="white"/>
        <rect x="7" y="14.5791" width="18" height="2.84211" rx="1.42105" fill="white"/>
        <rect x="7" y="22.1577" width="18" height="2.84211" rx="1.42105" fill="white"/>
      </svg>
    </button>
    <ul class="menu">
      <template v-for="(m, index) in menu">
        <li class="btn-menu" :key="index">
          <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-if="m.toMain && m.to !== $route.path.split('/')[1]">
            {{m.name}}
          </nuxt-link>
          <nuxt-link :to="`/${m.to}`"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to == $route.path.split('/')[1]">
            {{m.name}}
          </nuxt-link>
          <button :ref="m.ref" @click.prevent="goTo(m.to)" class="menu-btn" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to !== $route.path.split('/')[1]"> 
            {{m.name}}
          </button>
        </li>
      </template>
      <li class="btn-menu">
        <nuxt-link to="/" class="btn-donate">
          {{this.$t('misc.support')}}
          <span class="svg-donate"></span>
        </nuxt-link>
      </li>
    </ul>
    <transition name="showHam">
      <div class="humburger" v-if="burgerOn">
        <div class="top">
          <button @click="closeBurg()" class="close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11 11" stroke="#202221" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 1L1 11" stroke="#202221" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="bg"></div>
        <ul class="menu">
          <template v-for="(m, index) in menu">
            <li class="btn-menu" :key="index">
              <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-if="m.toMain && m.to !== $route.path.split('/')[1]">
                {{m.name}}
              </nuxt-link>
              <nuxt-link :to="`/${m.to}`" :ref="m.ref"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to == $route.path.split('/')[1]">
                {{m.name}}
              </nuxt-link>
              <button :ref="m.ref" @click.prevent="goTo(m.to)" class="menu-btn" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to !== $route.path.split('/')[1]"> 
                {{m.name}}
              </button>
            </li>
          </template>
          <li class="btn-menu">
            <nuxt-link to="/" class="btn-donate">
              {{this.$t('misc.support')}}
              <span class="svg-donate"></span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burgerOn: false,
      menu: [
        {
          name: this.$t('header.about'),
          to: 'about',
          ref: 'about',
          disabled: false,
          toMain: true
        }, 
        {
          name: this.$t('header.projects'),
          to: 'projects',
          ref: 'projects',
          disabled: false,
          toMain: this.$route.path.split('/')[1] !== 'projects' ? true : false
        },
        {
          name: this.$t('header.news'),
          to: 'news',
          ref: 'news',
          disabled: false
        }, 
        {
          name: this.$t('header.partners'),
          to: 'partners',
          ref: 'partners',
          disabled: false,
          toMain: true
        }, 
        {
          name: this.$t('header.documentation'),
          to: 'documentations',
          ref: 'documentations',
          disabled: false,
          toMain: this.$route.path.split('/')[1] !== 'documentations' ? true : false
        },
        {
          name: this.$t('header.contacts'),
          to: 'footer',
          ref: 'footer',
          disabled: false,
          toMain: false
        }
      ]
    }
  },
  methods: {
    openBurg() {
      document.documentElement.style.overflow = 'hidden'
      this.burgerOn = true
    },
    closeBurg() {
      document.documentElement.style.overflow = "auto"
      this.burgerOn = false
    },
    goTo(link) {
      if (link !== null) {
        if (document.documentElement.offsetWidth > 1100) {
          let a = document.getElementById(link).offsetTop - 35
          window.scrollTo({
            top: a,
            behavior: "smooth"
          });
        } else {
          let a = document.getElementById(link).offsetTop - 18
          window.scrollTo({
            top: a,
            behavior: "smooth"
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  },
  mounted() {
    console.log(this.$route.path.split('/')[1])
  },
  watch: {
    $route(to, from) {
      this.closeBurg()
    }
  }
}
</script>

<style lang="scss">
  @keyframes showHam {
    0% {
      -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
  }

  .showHam-enter-active {
    animation: showHam .5s;
  }
  .showHam-leave-active {
    animation: showHam .5s reverse;
  }
  #header {
    width: calc(100% - 120px);
    padding: 25px 60px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background-color: var(--white);
    transition: .3s;
    .burger-btn {
      display: none;
    }
    .menu {
      display: flex;
      align-items: center;
      .btn-menu {
        margin-right: 50px;
        &:nth-last-child(-n+1) {
          margin-right: 0;
        }
        .menu-btn {
          transition: .3s;
          &.active {
            color: var(--green);
          }
          &.nuxt-link-active {
            color: var(--green);
          }
          &.disabled {
            color: lightgrey;
            pointer-events: none
          }
        }
        &:hover {
          .menu-btn {
            &.disabled {
              color: lightgrey;
            }
            color: var(--green);
          }
        }
      }
    }
    .humburger {
      display: none;
      transition: .3s ease;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--white);
        z-index: 0;
      }
      .top {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
      .menu {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        .btn-menu {
          margin-bottom: 35px;
          margin-right: 0;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          .menu-btn {
            margin-right: 0;
            font-size: var(--fz7);
          }
        }
      }
      .menu {
        z-index: 1;
        position: relative;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    #header {
      .menu {
        .btn-menu {
          margin-right: 25px;
          &:nth-last-child(-n+1) {
            margin-right: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1210px) {
    #header {
      padding: 15px;
      width: calc(100vw - 30px);
      .logo-header {
        width: 106px;
        height: 32px;
      }
      .burger-btn {
        display: flex;
      }
      .menu {
        display: none;
      }
      .humburger {
        display: flex;
      }
    }
  }
</style>