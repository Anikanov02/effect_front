<template>
    <div id="founders" class="container-main">
      <div class="top">
        <h2>
          {{ this.$t('founders.title') }}
        </h2>
      </div>
      <div class="founders-list">
        <div class="founders">
          <template v-for="(m, index) in members">
            <div class="user" :key="m.attributes.id" v-if="index < paginations.currentPage * paginations.inPage && index >= paginations.prewPage * paginations.inPage">
              <div class="top">
                <img :src="siteUrl + m.attributes.image.data.attributes.url" alt="">
              </div>
              <div class="bottom">
                <p class="name">
                  {{ m.attributes.name }}
                </p>
                <p class="post">
                  {{ m.attributes.position }}
                </p>
                <p class="desc">
                  {{ m.attributes.desc }}
                </p>
              </div>
            </div>
          </template>
        </div>
        <div class="paginations container-projects">
          <button class="prew-page" @click.prevent="GotoPage(paginations.currentPage-1)">
            <span class="prew-arrow2"></span>
          </button>
          <div class="all-page">
            <template v-for="p in paginations.allPage">
              <button class="btn-to" :key="p" @click.prevent="GotoPage(p)" :class="{active: p==paginations.currentPage}">
                <span>
                  {{p}}
                </span>
              </button>
            </template>
          </div>
          <button class="next-page" @click.prevent="GotoPage(paginations.currentPage+1)">
            <span class="next-arrow2"></span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mapGetters} from 'vuex'
  
  export default {
    data() {
      return {
        members: [],
        siteUrl: '',
        paginations: {
          inPage: 4,
          allPage: 0,
          currentPage: 1,
          nextPage: 0,
          prewPage: 0
        }
      }
    },
    async fetch({store}) {
      await Promise.all([
        store.dispatch('default/fetch'),
        store.dispatch('founders/fetch'),
        store.dispatch('zasnovnikSeo/fetch')
      ])
    },
    computed: {
      ...mapGetters({
        seo: 'zasnovnikSeo/seo'
      })
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        htmlAttrs: {
          site: 'Ефект дитини',
          created_by: 'hoba.digital',
          ...i18nSeo.htmlAttrs
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            property: 'og:description',
            content: this.seo.desc
          },
          {
            hid: 'title',
            name: 'title',
            property: 'og:title',
            content: this.seo.title
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.siteUrl
          },
          ...i18nSeo.meta
        ],
        title: this.seo.title
      }
    },
    methods: {
      async getFounders() {
        await this.$axios.get(`${process.env.apiUrl}/api/founders?populate=*&pagination[pageSize]=999&locale=${this.$i18n.locale}`, {
          headers: {
            Authorization: `Bearer ${process.env.tokken}`
          }
        })
          .then(data => {
            this.members = data.data.data;
            this.calculatePaginations(this.members.length);
          })
      },
        calculatePaginations(elementsCount) {
        this.paginations.allPage > 1 ? this.paginations.nextPage = 2 : this.paginations.nextPage = 0
        this.paginations.allPage = Math.ceil(elementsCount / this.paginations.inPage)
        this.paginations.prewPage = 0
      },
      GotoPage(p) {
        if (p !== 0 && p <= this.paginations.allPage) {
          p < this.paginations.allPage ? this.paginations.currentPage = p : this.paginations.currentPage = this.paginations.allPage
          p + 1 < this.paginations.allPage ? this.paginations.nextPage = p + 1 : this.paginations.nextPage = this.paginations.allPage - 1
          p !== 0 ? this.paginations.prewPage = p - 1 : this.paginations.prewPage = p
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      },
    },
    mounted() {
      this.siteUrl = process.env.apiUrl
      this.getFounders();
    }
  }
  </script>
  
  <style lang="scss">
    #founders{
      margin-top: 65px;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        margin-right: 35px;
        h2 {
          font-size: var(--fz1);
          font-weight: 600;
          font-family: 'Montserrat Alternates', sans-serif;
        }
      }

      .founders-list{
        .founders {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 115px;

          .user {
            .top {
              margin-bottom: 45px;
            }

            .bottom {
              .name {
                font-size: var(--fz1);
                font-weight: 600;
                font-family: 'Montserrat Alternates', sans-serif;
              }

              .post {
                font-size: var(--fz3);
                font-weight: 600;
                margin-bottom: 35px;
              }

              .desc {
                font-size: var(--fz3);
                font-weight: 400;
              }
            }
          }
        }

        .paginations {
          margin-top: 50px;
          display: flex;
          position: relative;
          width: calc(100vw - 42px);
          justify-content: end;
          margin-right: 0;

          .prew-page {
            margin-right: 11px;
            padding-bottom: 18px;
          }
          .next-page {
            margin-left: 11px;
            padding-bottom: 18px;
          }
          .all-page {
            display: flex;
            .btn-to {
              margin-right: 11px;
              padding-bottom: 18px;
              width: 26px;
              transition: .3s;
              &:hover {
                span {
                  font-weight: 600;
                }
              }
              &:nth-last-child(-n+1) {
                margin-right: 0;
              }
              span {
                font-size: 14px;
                font-weight: 400;
                
              }
              &.active {
                span {
                  font-weight: 600;
                }
                &::after {
                  content: '';
                  display: block;
                  width: 26px;
                  height: 6px;
                  background-color: var(--pink);
                  border-radius: 6px;
                  position: absolute;
                  bottom: -3px;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1760px) {

    }
  
    @media screen and (max-width: 1100px) {

    }
  
    @media screen and (max-width: 860px) {
      #founders{
        .founders-list{
          .founders {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
    
    @media screen and (max-width: 600px) {
      
      
    }
  </style>