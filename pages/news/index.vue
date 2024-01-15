<template>
    <div id="news" class="news">
      <div class="top container-projects">
        <h2>{{this.$t('home.news.title')}}</h2>
        <div class="search">
          <input type="text" @keypress="InputSearch($event)" @keyup="InputSearch($event)" v-model="search" />
          <button class="btn-search" @click.prevent="searchNewsItem()">
            <span class="ico-search"></span>
          </button>
        </div>
      </div>
  
      <div class="type-selector">
        <button :class="{ active: currentType == 'all' }" @click.prevent="SetType('all')"> {{ this.$t('news.types.all') }} </button>
        <button :class="{ active: currentType == 'blog' }" @click.prevent="SetType('blog')"> {{ this.$t('news.types.blog') }} </button>
        <button :class="{ active: currentType == 'massMedia' }" @click.prevent="SetType('massMedia')"> {{ this.$t('news.types.massMedia') }} </button>
      </div>
  
      <div class="all-news container-projects">
        <template v-if="ifSearch">
          <template v-for="(element, index) in searchNews">
            <div class="news-item"
              v-if="index < paginations.currentPage * paginations.inPage && index >= paginations.prewPage * paginations.inPage">
              <div class="category" :style="GetColorByNewsType(element.attributes.type)">
                <p>{{ GetNewsType(element.attributes.type) }}</p>
              </div>
              <img @click.prevent="GotoNewsPiece(element.id)"
                :src="element.attributes.previewPicture.data !== null ? siteUrl + element.attributes.previewPicture.data.attributes.url : null" />
              <div class="desc">
                <p class="title-main">{{element.attributes.main_title}}</p>
                <p class="title-remain">{{ element.attributes.title_remain }}</p>
                <p class="text">{{ element.attributes.shortParagraph }}</p>
                
                <div class="meta">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                    <path
                      d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
                      fill="#828282" />
                  </svg>
                  <p class="date">{{ GetDate(element.attributes.date) }}</p>
                </div>
              </div>
            </div>
          </template>
        </template>
        <template v-else>
            <template v-for="(element, index) in news">
              <div class="news-item"
              v-if="index < paginations.currentPage * paginations.inPage && index >= paginations.prewPage * paginations.inPage">
                <div class="category" :style="GetColorByNewsType(element.attributes.type)">
                  <p>{{ GetNewsType(element.attributes.type) }}</p>
                </div>
                <img @click.prevent="GotoNewsPiece(element.id)"
                  :src="element.attributes.previewPicture.data !== null ? siteUrl + element.attributes.previewPicture.data.attributes.url : null" />
                <div class="desc">
                  <p class="title-main">{{element.attributes.main_title}}</p>
                  <p class="title-remain">{{ element.attributes.title_remain }}</p>
                  <p class="text">{{ element.attributes.shortParagraph }}</p>
                  
                  <div class="meta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                      <path
                        d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
                        fill="#828282" />
                    </svg>
                    <p class="date">{{ GetDate(element.attributes.date) }}</p>
                  </div>
                </div>
              </div>
            </template>
        </template>
      </div>
      
      <div v-if="this.paginations.allPage > 0" class="paginations container-projects">
        <button class="prew-page" @click.prevent="GotoPage(paginations.currentPage - 1)">
          <span class="prew-arrow2"></span>
        </button>
        <div class="all-page">
          <template v-for="p in paginations.allPage">
            <button class="btn-to" :key="p" @click.prevent="GotoPage(p)" :class="{ active: p == paginations.currentPage }">
              <span>
                {{ p }}
              </span>
            </button>
          </template>
        </div>
        <button class="next-page" @click.prevent="GotoPage(paginations.currentPage + 1)">
          <span class="next-arrow2"></span>
        </button>
      </div>
      <div v-else>
        <H2 style="margin: 100px 0; text-align: center;">За цим запитом нічого не знайдено</H2>
      </div>
  
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    data() {
      return {
        search: "",
        ifSearch: false,
        searchNews: [],
        siteUrl: "",
        news: [],
        currentType: "all",
        paginations: {
          inPage: 9,
          allPage: 0,
          currentPage: 1,
          nextPage: 0,
          prewPage: 0,
        },
      };
    },
    async fetch({ store }) {
      await Promise.all([store.dispatch("default/fetch")]);
      await Promise.all([store.dispatch("newsSeo/fetch")]);
    },
    computed: {
      ...mapGetters({
        seo: 'newsSeo/seo',
      }),
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo();
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
            content: this.siteUrl + this.seo.img.data.attributes.url
          },
          ...i18nSeo.meta
        ],
        title: this.seo.title
      };
    },
    methods: {
      async getNews(type) {
        var filterString = "&filters[type][$eq]=";
        if (type == "all") {
          filterString = "";
        }
        else {
          filterString = filterString + type;
        }
        await this.$axios.get(`${process.env.apiUrl}/api/news?populate[paragraph]=*&populate[previewPicture]=*&pagination[pageSize]=999&sort=date:desc&locale=${this.$i18n.locale}${filterString}`, {
          headers: {
            Authorization: `Bearer ${process.env.tokken}`
          }
        })
        .then(data => {
          this.news = data.data.data;
          this.news.forEach((element) => {
            var main_title = element.attributes.title;
            if (main_title !== null) {
              var words = main_title.split(" ");
              element.attributes.main_title = words.shift();
              element.attributes.title_remain = words.join(' ');
            }
            var text = element.attributes.paragraph[0].text;
            if (text !== null) {
              element.attributes.shortParagraph = text.slice(0, 70) + " ...";
            }
          })
          this.calculatePaginations(this.news.length);
        })
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
      GotoNewsPiece(id){
        this.$router.push(`news/${id}`)
      },
      calculatePaginations(elementsCount) {
        window.addEventListener('resize', () => {
          this.paginations.inPage = 9
        if(window.innerWidth < 1300){
          this.paginations.inPage = 6
        }
      })

        this.paginations.allPage > 1 ? this.paginations.nextPage = 2 : this.paginations.nextPage = 0
        this.paginations.allPage = Math.ceil(elementsCount / this.paginations.inPage)
        this.paginations.prewPage = 0
      },
      GetDate(date) {
        let month = new Date(date).getMonth();
        let months_uk = [
          'січня',
          'лютого',
          'квітня',
          'березня',
          'травня',
          'червня',
          'липня',
          'серпня',
          'вересня',
          'жовтня',
          'листопада',
          'грудня'
        ]

        let months_en = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
        let months = null
        if(this.$i18n.locale == 'uk'){
          months = months_uk
        }
        else if(this.$i18n.locale == 'en'){
          months = months_en
        }

        let a = String
        months.forEach((d, index) => {
          if (index == month) {
            a = d
          }
        })
        return new Date(date).getDate() + " " + a + " " + new Date(date).getFullYear();
      },
      SetType(type) {
        this.currentType = type;
        this.getNews(this.currentType)
        // this.search = "";
        this.ifSearch = false;
      },
      InputSearch(e) {
        if (e.code == "Enter") {
          if (this.search !== "") {
            this.searchNewsItem();
          } else {
          }
        }
        if (this.search == "") {
          this.ifSearch = false;
          this.calculatePaginations(this.news.length)
        }
      },
      searchNewsItem() {
        this.searchNews = [];
        if (this.search !== "") {
          this.news.forEach((d) => {
            if (JSON.stringify(d.attributes.title).toUpperCase().indexOf(this.search.toUpperCase()) !== -1) {
              this.searchNews.push(d);
            }
            this.calculatePaginations(this.searchNews.length)
          });
          this.ifSearch = true;
        }
      },
      GetNewsType(t){
        if(this.$i18n.locale == 'uk'){
          if(t == 'blog'){
            return 'Блог Команди'
          }
          else if(t == 'massMedia'){
            return 'Ми у ЗМІ'
          }
          else if(t == 'all'){
            return 'Всі'
          }
        }
        else if(this.$i18n.locale == 'en'){
          if(t == 'blog'){
            return 'Blog'
          }
          else if(t == 'massMedia'){
            return 'Mass Media'
          }
          else if(t == 'all'){
            return 'All'
          }
        }
      },
      GetColorByNewsType(t){
        if(t == 'blog'){
            return 'background-color: #A62585;'
          }
          else if(t == 'massMedia'){
            return 'background-color: #52A785;'
          }
          else if(t == 'all'){
            return 'background-color: #52A785;'
          }
      },
    },
    mounted() {
      this.siteUrl = process.env.apiUrl;
      this.getNews(this.currentType);
    },
  };
  </script>
  
  <style lang="scss">
  .news {
    border-bottom: 1px solid #bdbdbd;
    margin-top: 21px;
  
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
      max-width: 1800px;
  
      h2 {
        font-size: var(--fz1);
        font-weight: 600;
        font-family: "Montserrat Alternates", sans-serif;
      }
  
      .search {
        display: flex;
  
        input {
          margin-right: 50px;
          width: 640px;
          border: 1px solid #bdbdbd;
          border-radius: 6px;
          padding: 0px 15px;
        }
      }
    }
  
    .type-selector {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
  
      position: relative;
  
      margin: 20px 0 100px;
  
      border-bottom: 1px solid #BDBDBD;
  
      button {
        position: relative;
        margin-bottom: 40px;
        padding: 0 5px;
  
        color: var(--text-color, #202221);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
      }
  
      button.active {
        font-weight: 700;
      }
  
      button.active::after {
        position: absolute;
        content: " ";
        bottom: -44px;
        left: 0;
        width: 100%;
        height: 8px;
        background: var(--dark-pink, #A62585);
        border-radius: 6px;
      }
    }
  
    .all-news {
      display: grid;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      grid-column-gap: 35px;
      grid-row-gap: 70px;
      max-width: 1800px;
  
      .news-item{
        position: relative;
        border-radius: 6px;

        .category{
          top: 0;
          margin-top: -13px;
          margin-left: 10px;
          padding: 0 14px;
          position: absolute;
          border-radius: 20px;
          height: 26px;
          background-color: #A62585;

          p{
            color: #FFF;
            font-family: Montserrat Alternates;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
          }
        }

        img{
          width: 100%;
          height: 250px;
          opacity: 1;
          object-fit: cover;
          border-radius: 6px;
          transition: .3s;
          cursor: pointer;
        }

        .desc{
          position: relative;
          width: calc(100% - 100px);
          margin: 0 auto;
          margin-top: -40px;
          border-radius: 10px;
          background: #FFFEFE;
          box-sizing: border-box;
          padding: 27px 24px;
          box-shadow: 2px 2px 24px 0px rgba(0, 0, 0, 0.08);

          p{
            color: var(--text-color, #202221);
            font-family: Montserrat Alternates;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px
          }
          .title-main{
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px;
          }

          .title-remain{
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .text{
            font-family: Montserrat Alternates;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;

            margin-top: 8px;

            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .meta {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: auto;
            margin-top: 24px;
  
            svg {
              fill: var(--Gray-3, #828282);
              margin-right: 12px;
            }
  
            .date {
              color: var(--Gray-3, #828282);
              font-family: Montserrat Alternates;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 26px;
            }
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
          transition: 0.3s;
  
          &:hover {
            span {
              font-weight: 600;
            }
          }
  
          &:nth-last-child(-n + 1) {
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
              content: "";
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
  
  @media screen and (max-width: 1760px) {
    .news {
      .top {
        .search {
          input {
            width: 320px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .news {
      .all-news{
        grid-template-columns: repeat(2, minmax(100px, 1fr));
      }
    }
  }
  
  @media screen and (max-width: 1210px) {
    .news {
      .all-news {
        .news-item {
          img {
            height: 200px;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 1100px) {
    .news {
      margin-top: 20px;
  
      .top {
        align-items: center;
        margin-bottom: 20px;
  
        .search {
          width: calc(100% - 300px);
  
          input {
            width: calc(100% - 20px - 32px);
            margin-right: 20px;
          }
        }
      }
  
      .paginations {
        margin-top: 20px;
      }
    }
  }
  

  @media screen and (max-width: 750px) {
    .news {
      .type-selector{
        width: calc(100vw - 40px);
        border-bottom: none;
        margin: 0 auto 50px;

        button{
          margin-bottom: 0;
          border-radius: 6px;
          background: #F4F4F4;
          padding: 4px 20px 8px;
          flex-grow: 1;
        }

        button.active{
          font-weight: normal;
          background: #A62585;
          color: #fff;
        }

        button.active::after{
          display: none;
        }
      }

      .all-news {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
        grid-row-gap: 50px;

        .news-item{
          .desc{
            width: calc(100% - 48px);
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 600px) {
    .news {
      .top {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
  
        .search {
          width: 100%;
          margin-top: 10px;
  
          input {
            width: calc(100% - 20px - 32px);
            margin-right: 20px;
          }
        }
      }
  
      .all-news {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
      }
  
      .paginations {
        justify-content: start;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .news{
      .type-selector{
        gap: 15px;
        button{
          
          font-size: 14px;
        }
      }

      .all-news{
        .news-item{
          .desc{
            .meta{
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  </style>
  