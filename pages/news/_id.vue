<template>
  <div id="news-piece" class="container-main">
    <div class="news-content">
      <div class="top">
        <h2>{{ news.attributes.title }}</h2>
      </div>
      <img  class="main-image"
                :src="news.attributes.previewPicture.data !== null ? siteUrl + news.attributes.previewPicture.data.attributes.url : null"
                alt="">
      <div class="meta">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
          <path
            d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
            fill="#BDBDBD" />
        </svg>
        <p class="date">{{GetDate(news.attributes.date)}}</p>
      </div>
      <div class="news-block">
        <template v-for="paragraph in news.attributes.paragraph">
          <div class="paragraph-container">
          <span>{{ paragraph.text }}</span>
            <template v-for="media in paragraph.media.data">
              <div class="image-holder">
                <img :src="media.attributes.url !== '' ? siteUrl + media.attributes.url : null" />
              </div>
            </template>
          </div>
        </template>
      </div>
      <div v-if=" news.attributes.quote !== null" class="quote">
        <p class="quote-text">{{ news.attributes.quote }}</p>
      </div>
      <img  v-if="news.attributes.endImage != null" class="main-image"
                :src="news.attributes.endImage != null ? siteUrl + news.attributes.endImage.data.attributes.url : null"
                alt="">
                <div class="more-news">
      </div>
    </div>
    <div class="news-grid" >
      <template v-for="(element, index) in this.more_news"  >
        <div :class="`box`">
          <div class="category" :style="GetColorByNewsType(element.attributes.type)">
            <p>{{ GetNewsType(element.attributes.type) }}</p>
          </div>
          <img @click.prevent="GotoNewsPiece(element.id)"
            :src="element.attributes.previewPicture.data !== null ? siteUrl + element.attributes.previewPicture.data.attributes.url : null" />
          <div class="desc">
            <p class="title-main">{{element.attributes.main_title}}</p>
            <p class="title-remain">{{ element.attributes.title_remain }}</p>
            <p class="text">{{ element.attributes.text }}</p>
            
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
    </div>
  
  </div>
  
</template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    data() {
      return {
        siteUrl: "",
        news: {
          "attributes": {
              "createdAt": "0",
              "updatedAt": "0",
              "title": "",
              "type": "",
              "date": "",
              "quote": "",
              "paragraph": [
              ],
              "previewPicture": {
                  "data": {
                      "id": 38,
                      "attributes": {
                          "name": "изображение_2023-10-30_220308779.png",
                          "alternativeText": "изображение_2023-10-30_220308779.png",
                          "caption": "изображение_2023-10-30_220308779.png",
                          "width": 800,
                          "height": 451,
                          "formats": {
                              "small": {
                                  "ext": ".png",
                                  "url": "/uploads/small_izobrazhenie_2023_10_30_220308779_ba7404e895.png",
                                  "hash": "small_izobrazhenie_2023_10_30_220308779_ba7404e895",
                                  "mime": "image/png",
                                  "name": "small_изображение_2023-10-30_220308779.png",
                                  "path": null,
                                  "size": 413.05,
                                  "width": 500,
                                  "height": 282
                              },
                              "medium": {
                                  "ext": ".png",
                                  "url": "/uploads/medium_izobrazhenie_2023_10_30_220308779_ba7404e895.png",
                                  "hash": "medium_izobrazhenie_2023_10_30_220308779_ba7404e895",
                                  "mime": "image/png",
                                  "name": "medium_изображение_2023-10-30_220308779.png",
                                  "path": null,
                                  "size": 926.12,
                                  "width": 750,
                                  "height": 423
                              },
                              "thumbnail": {
                                  "ext": ".png",
                                  "url": "/uploads/thumbnail_izobrazhenie_2023_10_30_220308779_ba7404e895.png",
                                  "hash": "thumbnail_izobrazhenie_2023_10_30_220308779_ba7404e895",
                                  "mime": "image/png",
                                  "name": "thumbnail_изображение_2023-10-30_220308779.png",
                                  "path": null,
                                  "size": 99.26,
                                  "width": 245,
                                  "height": 138
                              }
                          },
                          "hash": "izobrazhenie_2023_10_30_220308779_ba7404e895",
                          "ext": ".png",
                          "mime": "image/png",
                          "size": 817.44,
                          "url": "/uploads/izobrazhenie_2023_10_30_220308779_ba7404e895.png",
                          "previewUrl": null,
                          "provider": "local",
                          "provider_metadata": null,
                          "createdAt": "2023-10-30T20:03:10.760Z",
                          "updatedAt": "2023-10-30T20:03:10.760Z"
                      }
                  }
              },
              "endImage": {
                  "data": {
                      "id": 28,
                      "attributes": {
                          "name": "Frame-3.png",
                          "alternativeText": "Frame-3.png",
                          "caption": "Frame-3.png",
                          "width": 191,
                          "height": 62,
                          "formats": null,
                          "hash": "Frame_3_b1cc832a6e",
                          "ext": ".png",
                          "mime": "image/png",
                          "size": 2.88,
                          "url": "/uploads/Frame_3_b1cc832a6e.png",
                          "previewUrl": null,
                          "provider": "local",
                          "provider_metadata": null,
                          "createdAt": "2021-12-15T13:26:33.607Z",
                          "updatedAt": "2021-12-15T13:26:33.607Z"
                      }
                  }
              }
          }
        },
      };
    },
    async fetch({ store }) {
      await Promise.all([
        store.dispatch("default/fetch"),
        store.dispatch('news/fetch'),
      ]);
    },
    computed: {
      ...mapGetters({
        more_news: 'news/news',
      }),
    },
    head() { },
    methods: {
      async getNewsPiece(){
        await this.$axios.get(`${process.env.apiUrl}/api/news/` + this.$route.params.id + `?populate[paragraph][populate][media]=*&populate[previewPicture]=*&populate[endImage]=*&locale=${this.$i18n.locale}`, {
          headers: {
            Authorization: `Bearer ${process.env.tokken}`
          }
        }).then(data => {
          this.news = data.data.data;
          console.log(this.news)
        })
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
      GotoNewsPiece(id){
        if(this.$i18n.locale == 'uk'){
          this.$router.push(`${id}`)
        }
        else if(this.$i18n.locale == 'en'){
          this.$router.push(`${id}`)
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
    },
    mounted() {
      this.siteUrl = process.env.apiUrl;
      console.log("getnewspiece")
      this.getNewsPiece();
    },
  };
  </script>
  
  <style lang="scss">
  #news-piece {
    margin-top: 30px;
    width: 100%;
    .news-content{
      margin: 0 auto;
      .top {
        h2 {
          font-size: var(--fz1);
          font-weight: 600;
          font-family: "Montserrat Alternates", sans-serif;
        }
      }
    
      .main-image {
        margin-top: 50px;
        width: 100%;
        height: 620px;
        object-fit: cover;
        border-radius: 6px;
      }
    
      .meta {
        margin-top: 33px;
        display: flex;
        align-items: center;
    
        .date {
          margin-left: 12px;
    
          color: var(--Gray-4, #bdbdbd);
          font-family: Montserrat Alternates;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          /* 185.714% */
        }
      }
    
      .news-block {
        margin-bottom: 35px;
    
        //display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 75px;
        grid-row-gap: 50px;
        .paragraph-container{
          margin-top: 40px;
          white-space: pre-line;
          .image-holder {
            width: 100%;
            margin-top: 40px;
            img {
              width: 100%;
              max-height: 30vw;
              object-fit: cover;
              object-position: center center;
              border-radius: 6px;
              
            }
          }
      
          span {
            color: var(--text-color, #202221);
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    
      .quote {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 80px 20% 0;
    
        .quote-text {
          color: var(--text-color, #202221);
          font-family: Montserrat Alternates;
          font-size: 40px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          z-index: 0;
    
          &::before {
            position: absolute;
            margin-left: -56px;
            margin-top: -27px;
            width: min-content;
            height: 100px;
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='54' viewBox='0 0 70 54' fill='none'%3E%3Cpath d='M6.21446 49.064C2.17094 44.7692 0 39.9523 0 32.144C0 18.4039 9.64556 6.08883 23.6723 0L27.1779 5.40968C14.0856 12.4917 11.526 21.6819 10.5053 27.4763C12.6134 26.3849 15.3732 26.0042 18.0781 26.2554C25.1601 26.911 30.7425 32.725 30.7425 39.9523C30.7425 43.5964 29.2949 47.0913 26.7181 49.6681C24.1414 52.2448 20.6465 53.6924 17.0024 53.6924C14.9872 53.6748 12.9955 53.2566 11.1435 52.4619C9.29141 51.6673 7.6159 50.5123 6.21446 49.064ZM45.4719 49.064C41.4284 44.7692 39.2575 39.9523 39.2575 32.144C39.2575 18.4039 48.903 6.08883 62.9297 0L66.4354 5.40968C53.3431 12.4917 50.7835 21.6819 49.7628 27.4763C51.8709 26.3849 54.6307 26.0042 57.3355 26.2554C64.4176 26.911 70 32.725 70 39.9523C70 43.5964 68.5524 47.0913 65.9756 49.6681C63.3988 52.2448 59.904 53.6924 56.2599 53.6924C54.2446 53.6748 52.253 53.2566 50.4009 52.4619C48.5489 51.6673 46.8734 50.5123 45.4719 49.064Z' fill='%23EFDC00'/%3E%3C/svg%3E");
            z-index: -1;
          }
        }
      }
    }
    .news-grid{ 
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 35px;
      margin-top: 100px;
  
      .box{
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
          width: 355px;
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
  }
  
  @media screen and (max-width: 1000px) {
    #news-piece {
      max-width: calc(100% - 200px) !important;
      .news-content{
        .top{
          h2{
            margin-bottom: 20px;
          }
        }
        .main-image {
          height: 350px;
        }
        .meta{
          margin-top: 10px;
        }
        .news-block {
          grid-template-columns: 2fr;
          grid-row-gap: 20px;
          
          .paragraph-container{
            margin-top: 20px;
            span{
              font-size: 14px;
            }
          }

          .image-holder {
            img {
              max-height: 265px;
            }
          }
        }
    
        .quote {
          margin: 40px 0px 40px !important;
    
          .quote-text {
            font-size: 20px;
            margin-left: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
    
            &::before {
              position: relative;
              width: min-content;
              height: 100%;
              margin-top: -13px;
              margin-left: 0;
              margin-right: 5px;
              content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='30' viewBox='0 0 40 30' fill='none'%3E%3Cpath d='M3.55112 27.4139C1.24054 25.0143 0 22.3229 0 17.9601C0 10.283 5.51175 3.40206 13.527 0L15.5303 3.02259C8.0489 6.9796 6.58628 12.1145 6.00303 15.3521C7.20767 14.7423 8.7847 14.5295 10.3303 14.6699C14.3772 15.0362 17.5672 18.2847 17.5672 22.3229C17.5672 24.359 16.74 26.3117 15.2675 27.7514C13.7951 29.1912 11.798 30 9.71566 30C8.56409 29.9902 7.42602 29.7565 6.3677 29.3125C5.30938 28.8685 4.35194 28.2231 3.55112 27.4139ZM25.984 27.4139C23.6734 25.0143 22.4328 22.3229 22.4328 17.9601C22.4328 10.283 27.9446 3.40206 35.9598 0L37.9631 3.02259C30.4817 6.9796 29.0191 12.1145 28.4359 15.3521C29.6405 14.7423 31.2175 14.5295 32.7632 14.6699C36.8101 15.0362 40 18.2847 40 22.3229C40 24.359 39.1728 26.3117 37.7004 27.7514C36.2279 29.1912 34.2309 30 32.1485 30C30.9969 29.9902 29.8589 29.7565 28.8005 29.3125C27.7422 28.8685 26.7848 28.2231 25.984 27.4139Z' fill='%23EFDC00'/%3E%3C/svg%3E");
            }
    
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 1600px) {
    #news-piece {
      max-width: calc(100% - 500px);
      .news-content{
        .news-block {
          p{
            font-size: 24px;
          }
        }

        .quote{
          margin: 80px 10% 0;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    #news-piece {
      max-width: calc(100% - 50px) !important;
      margin-top: 20px;
      .news-content{
        .main-image{
          max-height: 435px;
          margin-top: 0;
        }
        .news-block{
          .paragraph-container{
            .image-holder {
              margin-top: 20px;
              margin-bottom: 20px;
              img {
                max-height: fit-content;
                object-fit: contain;
              }
            }
          }
        }
      }
      .news-grid{
        grid-template-columns: 1fr 1fr;
        .box{
          &:nth-child(n + 3){
            display: none;
          }

          .desc{
            display: block;
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    #news-piece{
      .news-grid{
        display: block;
        .box{
          &:nth-child(n + 2){
            display: none;
          }
          .desc{
            width: unset;
            margin-left: 40px;
            margin-right: 40px;
            .title-main{
              font-size: 20px;
            }
            .title-remain{
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    #news-piece{
      .main-image{
        height: 300px;
      }
    }
  }
  </style>
  