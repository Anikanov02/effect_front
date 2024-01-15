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

      <li class="btn-menu">
        <button @click.prevent="" class="menu-btn" ref="about">
          <span>{{ $t('header.about') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 9" fill="none">
              <path d="M6.80584 7.90334C6.40623 8.44715 5.59376 8.44716 5.19416 7.90334L1.10774 2.34214C0.622459 1.68172 1.09404 0.75 1.91358 0.75L10.0864 0.750001C10.906 0.750001 11.3775 1.68172 10.8923 2.34214L6.80584 7.90334Z" fill="black"/>
            </svg>
          </span>
        </button>
        <div class="submenu">

          <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="nuxt-link">{{ $t('header.about_submenu.about_org') }}</nuxt-link>
          <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="nuxt-link">{{ $t('header.about_submenu.team') }}</nuxt-link>
          <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="nuxt-link">{{ $t('header.about_submenu.overwatch') }}</nuxt-link>
          <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="nuxt-link">{{ $t('header.about_submenu.children_overwatch') }}</nuxt-link>
        </div>
      </li>

      <template v-for="(m, index) in menu">
        <li class="btn-menu" :key="index">
          <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-if="m.toMain && m.to !== $route.path.split('/')[1]">
            {{$t(`${m.name}`)}}
          </nuxt-link>
          <nuxt-link :to="`/${m.to}`"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to == $route.path.split('/')[1]">
            {{$t(`${m.name}`)}}
          </nuxt-link>
          <button :ref="m.ref" @click.prevent="goTo(m.to)" class="menu-btn" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to !== $route.path.split('/')[1]"> 
            {{$t(`${m.name}`)}}
          </button>
          <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else>
            {{$t(`${m.name}`)}}
          </nuxt-link>
        </li>
      </template>
      <li class="btn-menu">
        <button @click.prevent="changeLocale()" class="menu-btn">
          {{this.$t('misc.change_lang')}}
        </button>
      </li>
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
          <li id="hamsubmenuOpener" class="btn-menu">
            <button  @click.prevent="openSubmenu()" class="menu-btn" ref="about">
              <span>{{ $t('header.about') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 9" fill="none">
                  <path d="M6.80584 7.90334C6.40623 8.44715 5.59376 8.44716 5.19416 7.90334L1.10774 2.34214C0.622459 1.68172 1.09404 0.75 1.91358 0.75L10.0864 0.750001C10.906 0.750001 11.3775 1.68172 10.8923 2.34214L6.80584 7.90334Z" fill="black"/>
                </svg>
              </span>
            </button>          
          </li>
          <li id="hamsubmenuCloser" class="btn-menu" style="display: none;">
            <button @click.prevent="openSubmenu()" class="menu-btn" ref="about">
              <span>{{ $t('header.about') }}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path d="M5.19416 1.09666C5.59377 0.552845 6.40624 0.552844 6.80584 1.09666L10.8923 6.65786C11.3775 7.31828 10.906 8.25 10.0864 8.25L1.91358 8.25C1.09404 8.25 0.622459 7.31828 1.10774 6.65786L5.19416 1.09666Z" fill="#52A785"/>
                </svg>
              </span>
            </button>          
          </li>
          

          <ul class="hamsubmenu">
            <li class="btn-menu">
              <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="menu-btn">{{ $t('header.about_submenu.about_org') }}</nuxt-link>
            </li>
            <li class="btn-menu">
              <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="menu-btn">{{ $t('header.about_submenu.team') }}</nuxt-link>
            </li>
            <li class="btn-menu">
              <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="menu-btn">{{ $t('header.about_submenu.overwatch') }}</nuxt-link>
            </li>
            <li class="btn-menu">
              <nuxt-link :to="{ path: localePath('/'), hash: `#about` }" class="menu-btn">{{ $t('header.about_submenu.children_overwatch') }}</nuxt-link>
            </li>

          </ul>

          <template v-for="(m, index) in menu">
            <li class="btn-menu" :key="index">
              <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-if="m.toMain && m.to !== $route.path.split('/')[1]">
                {{$t(`${m.name}`)}}
              </nuxt-link>
              <nuxt-link :to="`/${m.to}`" :ref="m.ref"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to == $route.path.split('/')[1]">
                {{$t(`${m.name}`)}}
              </nuxt-link>
              <button :ref="m.ref" @click.prevent="goTo(m.to)" class="menu-btn" :class="{disabled: m.disabled == true}" v-else-if="!m.toMain && m.to !== $route.path.split('/')[1]"> 
                {{$t(`${m.name}`)}}
              </button>
              <nuxt-link :to="{ path: localePath('/'), hash: `#${m.to}` }"  class="menu-btn" active-class="active" :class="{disabled: m.disabled == true}" v-else>
            {{$t(`${m.name}`)}}
          </nuxt-link>
            </li>
          </template>
          <li class="btn-menu">
            <button @click.prevent="changeLocale()" class="menu-btn">
              {{this.$t('misc.change_lang')}}
            </button>
          </li>
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
          name: 'header.projects',
          to: 'projects',
          ref: 'projects',
          disabled: false,
          toMain: true
        },
        {
          name: 'header.news',
          to: 'news',
          ref: 'news',
          disabled: false,
          toMain: true
        }, 
        {
          name: 'header.partners',
          to: 'partners',
          ref: 'partners',
          disabled: false,
          toMain: true
        }, 
        {
          name: 'header.documentation',
          to: 'documentations',
          ref: 'documentations',
          disabled: false,
          toMain: true
        },
        {
          name: 'header.contacts',
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
    openSubmenu() {
      var hamSubmenus = document.getElementsByClassName('hamsubmenu')

      const hamsubmenuOpener = document.getElementById('hamsubmenuOpener');
      const hamsubmenuCloser = document.getElementById('hamsubmenuCloser');
      for (var i = 0; i < hamSubmenus.length; i++) {
        if(this.hamsubmenuOn){
          hamSubmenus[i].style.display = 'none'
          this.hamsubmenuOn = false
          hamsubmenuOpener.style.display = 'block'
          hamsubmenuCloser.style.display = 'none'
        }
        else{
          hamSubmenus[i].style.display = 'block'
          this.hamsubmenuOn = true
          hamsubmenuOpener.style.display = 'none'
          hamsubmenuCloser.style.display = 'block'
        }
      }
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
    },
    changeLocale() {
      let lang = this.$i18n.locale === 'en'? 'uk' : 'en'
      

      const currentRoute = this.$route.path;

      // Check if the current route is '/news/{someid}'
      if (currentRoute.includes('/news/')) {
        // Navigate to '/news' route
        this.$router.push(lang === 'en'? '/en/news' : '/news');
      }
      else{
        this.$i18n.setLocale(lang)
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
        position: relative;
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
          &:hover {
            .menu-btn {
              &.disabled {
                color: lightgrey;
              }
              color: var(--green);
            }
          }
        }

        .submenu{
          display: none;
          position: absolute;
          top: 100%;
          left: -26px;
          width: max-content;

          background-color: #fff;
          padding: 26px;

          font-size: var(--fz3);
          font-weight: 600;
          border-radius: 13px;
          z-index: 1;

          .nuxt-link{
            color: var(--text-color, #202221);
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 40px;
            width: fit-content;

            &:hover{
              color: var(--green);
            }
          }
        }

        &:hover {
          .menu-btn {
            &.disabled {
              color: lightgrey;
            }
            color: var(--green);

            span{
              color: var(--green);

              svg{
                path{
                  fill:var(--green)
                }
              }
            }

            
          }

          .submenu{
            display: flex;
            flex-direction: column;
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
          margin-bottom: 20px;
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

      .submenu{
        display: flex;
        flex-direction: column;

      }

      .hamsubmenu{
        display: none;
        margin-bottom: 20px;
        .btn-menu{
          .menu-btn{
            color: var(--text-color, #202221);
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>