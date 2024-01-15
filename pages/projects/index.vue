<template>
  <div id="projects-page" class="prod">
    <div class="type-selector">
      <div class="type-selector-inner container-projects">
        <template v-for="(element, index) in projectTypes">
          <div style="position: relative;">
            <button :class="{ active: currentType == element.attributes.type }" :title="element.attributes.name"  @click.prevent="SetType(element.attributes.type)">{{element.attributes.name}}</button>
            <div class="desc">
              <p>{{ element.attributes.desc }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- <div v-else class="dropdown container-projects">
      <div class="dropdown-type-selector">
        <button class="dropbtn">{{this.currentTypeName}} &#x2193;</button>
        <div class="dropdown-content">
          <template v-for="(element, index) in projectTypes">
            <button  @click.prevent="SetType(element.attributes.type)">{{element.attributes.name}}</button>
          </template>
        </div>
      </div>
      <p>{{ currentDesc }}</p>
    </div> -->
    <div v-if="projects.length > 0" class="projs container-projects">
      <div class="left">
        <div class="all-projects">
          <template v-for="(proj, index) in projects">
            <button :class="{active: currentProj.id !== undefined && proj.id == currentProj.id}" @click.prevent="SetProject(proj, proj.attributes.link)" class="project" :key="proj.id" v-if="index < paginations.currentPage * paginations.inPage && index >= paginations.prewPage * paginations.inPage">
              <div class="left">
                <img :src="proj.attributes.img !== null ? siteUrl + proj.attributes.img.data.attributes.url : null" alt="">
              </div>
              <div class="right">
                <div class="info">
                  <p class="title">
                    {{proj.attributes.title}}
                  </p>
                  <p class="address">
                    {{proj.attributes.address}}
                  </p>
                </div>
                <div class="date">
                  <p class="min-date">
                    {{GetMinDate(proj.attributes.date)}}
                  </p>
                  <p class="day-date">
                    {{GetDayDate(proj.attributes.date)}}
                  </p>
                </div>
              </div>
            </button>
          </template>
        </div>
      </div>
      <div class="right">
        <div class="project">
          <div class="top">
            <div class="date">
              <p class="min-date">
                {{GetMinDate(currentProj.attributes.date)}}
              </p>
            </div>
            <img :src="currentProj.attributes.img !== null ? siteUrl + currentProj.attributes.img.data.attributes.url : null" alt="">
          </div>
          <div class="informations">
            <p class="title">
              {{currentProj.attributes.title}}
            </p>
            <div class="desc" v-html="$md.render(currentProj.attributes.desc)"></div>
          </div>
          <div class="address">
            <p>
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17C7 17 0 11.9 0 6.8C0 2.55 3.5 0 7 0C10.5 0 14 2.55 14 6.8C14 11.9 7 17 7 17ZM7 9.35C7.69619 9.35 8.36387 9.08134 8.85616 8.60312C9.34844 8.1249 9.625 7.4763 9.625 6.8C9.625 6.1237 9.34844 5.4751 8.85616 4.99688C8.36387 4.51866 7.69619 4.25 7 4.25C6.30381 4.25 5.63613 4.51866 5.14384 4.99688C4.65156 5.4751 4.375 6.1237 4.375 6.8C4.375 7.4763 4.65156 8.1249 5.14384 8.60312C5.63613 9.08134 6.30381 9.35 7 9.35Z" fill="#C6569A"/>
              </svg>
              {{currentProj.attributes.address}}
              {{currentProj.attributes.link}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="projects.length > 0" class="paginations container-projects">
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
    <div v-if="projects.length <= 0" style="margin: 50px 0; text-align: center;">
      <h2>  {{ this.$t('projects.empty') }} </h2>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      currentProj: 
        {
          "id": 0,
          "attributes": {
            "createdAt": "2021-12-14T10:20:33.082Z",
            "updatedAt": "2021-12-19T21:44:27.043Z",
            "publishedAt": "2021-12-14T10:20:35.007Z",
            "title": "Юні поети",
            "desc": "Позитивний фактор занять дитячою йогою – відсутність змагань чи суперництва. Йога дає можливість дитині концентруватися на відчуттях у тілі, слідкувати за думками, помічати внутрішні стани, ставати спокійною. \n/\nДитинство – період постійних змін, часто пов’язаних зі стресом. Та й дитинство сучасних дітей сильно відрізняється від дитинства їх батьків, наповненого активними іграми на свіжому повітрі. Постійно увімкнений телевізор, комп’ютер, безкорисна їжа похапцем і неправильний режим дня роблять дітей хворобливими, агресивними, капризними і замкнутими.\n/\nНадалі це може посилитися проблемами підліткового періоду і, як наслідок, підлітковою депресією, коли дитина порівнює себе з «ідеальними» персонажами з журналів і кіно.",
            "address": "м. Луцьк, Центральний парк",
            "date": "2021-12-14",
            "link": "yong-poet-2",
            "img": {
              "data": {
                "id": 12,
                "attributes": {
                  "name": "d526d9f86559eab9db8d7972be59d895.jpg",
                  "alternativeText": "d526d9f86559eab9db8d7972be59d895.jpg",
                  "caption": "d526d9f86559eab9db8d7972be59d895.jpg",
                  "width": 746,
                  "height": 498,
                  "formats": {
                    "small": {
                      "ext": ".jpg",
                      "url": "/uploads/small_d526d9f86559eab9db8d7972be59d895_4df31c2b4f.jpg",
                      "hash": "small_d526d9f86559eab9db8d7972be59d895_4df31c2b4f",
                      "mime": "image/jpeg",
                      "name": "small_d526d9f86559eab9db8d7972be59d895.jpg",
                      "path": null,
                      "size": 19.18,
                      "width": 500,
                      "height": 334
                    },
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "/uploads/thumbnail_d526d9f86559eab9db8d7972be59d895_4df31c2b4f.jpg",
                      "hash": "thumbnail_d526d9f86559eab9db8d7972be59d895_4df31c2b4f",
                      "mime": "image/jpeg",
                      "name": "thumbnail_d526d9f86559eab9db8d7972be59d895.jpg",
                      "path": null,
                      "size": 6.46,
                      "width": 234,
                      "height": 156
                    }
                  },
                  "hash": "d526d9f86559eab9db8d7972be59d895_4df31c2b4f",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 34.04,
                  "url": "/uploads/d526d9f86559eab9db8d7972be59d895_4df31c2b4f.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "createdAt": "2021-12-14T10:19:01.517Z",
                  "updatedAt": "2021-12-14T10:19:01.517Z"
                }
              }
            }
          }
        },
      windowWidth: '',
      siteUrl: '',
      projects: [],
      projectTypes: [],
      currentType: "",
      currentTypeName: "",
      currentDesc: "",
      paginations: {
        inPage: 5,
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
      store.dispatch('projectsSeo/fetch'),
    ])
  },
  computed: {
    ...mapGetters({
      seo: 'projectsSeo/seo'
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
          content: this.siteUrl + this.seo.img.data.attributes.url
        },
        ...i18nSeo.meta
      ],
      title: this.seo.title
    }
  },
  methods: {
    SetProject(p, link) {
      if (document.documentElement.offsetWidth > 1100) {
        this.currentProj = p
      } else {
        this.$router.push(`projects/${link}`)
      }
    },
    GetMinDate(date) {
      return date.split('-')[2] + '.' + date.split('-')[1]
    },
    GetDayDate(date) {
      let day = new Date(date).getDay()
      let days_uk = [
        'неділя',
        'понеділок',
        'вівторок',
        'середа',
        'четвер',
        "п'ятниця",
        'субота',
      ]
      let days_en = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
      let days = null
      if(this.$i18n.locale == 'uk'){
        days = days_uk
      }
      else if(this.$i18n.locale == 'en'){
        days = days_en
      }

      let a = String
      days.forEach((d, index) => {
        if (index == day) {
          a = d
        }
      })
      return a
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
    SetType(type) {
      this.currentType = type;
      this.projectTypes.forEach(element => {
        if(element.attributes.type == this.currentType)
        {
          this.currentTypeName = element.attributes.name
          this.currentDesc = element.attributes.desc
        }
      });
      this.getProjects(this.currentType)
      console.log("type set to: " + this.currentType)
    },
    async getProjectTypes(){
      await this.$axios.get(`${process.env.apiUrl}/api/project-types?locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
      .then(data =>{
        this.projectTypes = data.data.data;
        this.currentType = this.projectTypes[0].attributes.type
        this.currentTypeName = this.projectTypes[0].attributes.name
        this.currentDesc = this.projectTypes[0].attributes.desc
      })
    },
    async getProjects(type) {
      await this.$axios.get(`${process.env.apiUrl}/api/proektis?populate=*&pagination[pageSize]=999&sort=date:desc&filters[types][type][$eq]=${type}&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
      .then(data => {
        let i = 1
        this.projects = data.data.data
        console.log("got " + this.projects.length + " projects")
        if (document.documentElement.offsetWidth > 1100) {
          if (this.$route.query.to) {
            data.data.data.forEach((p, index) => {
              if (p.attributes.link == this.$route.query.to) {
                this.currentProj = p
                i = index+1
              }
            })
            this.GotoPage(Math.ceil(i / this.paginations.inPage))
          } else {
            this.currentProj = data.data.data[0]
            this.paginations.allPage > 1 ? this.paginations.nextPage = 2 : this.paginations.nextPage = 0
          }
          this.paginations.allPage = Math.ceil(data.data.meta.pagination.total / this.paginations.inPage)
          this.paginations.prewPage = 0
        } else {
          this.paginations.allPage > 1 ? this.paginations.nextPage = 2 : this.paginations.nextPage = 0
          this.paginations.allPage = Math.ceil(data.data.meta.pagination.total / this.paginations.inPage)
          this.paginations.prewPage = 0
        }
      })
    }
  },
  async mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.windowWidth)
    })
    this.siteUrl = process.env.apiUrl
    await this.getProjectTypes()
    if(this.$route.query.type != null){
      this.currentType = this.$route.query.type;
    }
    this.getProjects(this.currentType)
  }
}
</script>

<style lang="scss">
  #projects-page {
    border-bottom: 1px solid #BDBDBD;
    margin-top: 21px;
    .type-selector {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 50px;

      position: relative;

      margin: 20px 0;

      border-bottom: 1px solid #BDBDBD;
      .type-selector-inner{
        display: flex;
        justify-content: space-between;
        width: 100%;
        div:first-child > .desc {
          left: 0;
          transform: translateX(0);
        }

        div:last-child > .desc {
          left: unset;
          right: 0;
          transform: translateX(0);
        }
      

        button {
          position: relative;
          margin-bottom: 40px;
          padding: 0 5px;
          width: fit-content;

          color: var(--text-color, #202221);
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: normal;
          line-height: normal;
          
          &:hover {
            font-weight: 600;
          }

          &:hover+.desc{
            opacity: 1;
          }
          
          &::before {
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }

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
          background-color: var(--pink);
          border-radius: 6px;
        }

        .desc{
          position: absolute;
          width: 500px;
          
          padding: 15px;

          opacity: 0;
          transition: all .3s;

          background: #FFF9F6;
          border-radius: 6px;

          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
      }

    }

    .type-selector.type-selector-inner>div:first-child > .desc {
      left: 0;
      transform: translateX(0);
    }

    .type-selector.type-selector-inner>div:nth-child(2) > .desc {
      transform: translateX(-30%);
    }

    .type-selector.type-selector-inner>div:nth-child(5) > .desc {
      transform: translateX(-70%);
    }

    .type-selector.type-selector-inner>div:last-child > .desc {
      left: unset;
      right: 0;
      transform: translateX(0);
    }

    .dropdown{
      .dropdown-type-selector{
        width: fit-content;
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
        .dropbtn{
          padding: 8px 15px 10px 15px;
          background-color: #C6569A;
          background-color: var(--pink);
          color: #ffffff;
          color: var(--white);
          display: flex;
          align-items: center;
          max-width: 200px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 18px;
          font-size: var(--fz3);
        }
        
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 200px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;

          button{
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: center;
          }
        }

        &:hover .dropdown-content {
          display: block;
        }

        
      }

      p{
          margin-bottom: 20px;
        }
    }

    

    .projs {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-column-gap: 150px;
      .left {
        .all-projects {
          display: grid;
          grid-template-rows: repeat(5, 1fr);
          grid-row-gap: 10px;
          .project {
            padding: 20px;
            display: flex;
            transition: .3s;
            box-sizing: border-box;
            border: 1px solid transparent;
            border-radius: 6px;
            &.active {
              border: 1px solid #BDBDBD;
            }
            &:hover {
              border: 1px solid #BDBDBD;
            }
            .left {
              width: 150px;
              height: 150px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 6px;
              }
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 100%;
              align-items: flex-start;
              margin-left: 40px;
              p {
                text-align: left;
              }
              .info {
                .title {
                  font-size: var(--fz3);
                  font-weight: 600;
                  font-family: 'Montserrat Alternates', sans-serif;
                }
                .address {
                  font-weight: 400;
                  color: var(--grey);
                }
              }
              .date {
                .min-date {
                  font-size: var(--fz1);
                  font-weight: 600;
                  font-family: 'Montserrat Alternates', sans-serif;
                }
                .day-date {
                  font-weight: 400;
                  font-family: 'Montserrat Alternates', sans-serif;
                  color: var(--grey);
                }
              }
            }
          }
        }
      }
      .right {
        .project {
          .top {
            position: relative;
            border-radius: 6px;
            margin-bottom: 50px;
            .date {
              position: absolute;
              top: 0;
              left: 0;
              width: 180px;
              height: 195px;
              display: flex;
              p {
                padding-top: 45px;
                padding-left: 25px;
                font-size: var(--fz1);
                font-weight: 600;
                font-family: 'Montserrat Alternates', sans-serif;
                z-index: 1;
                height: 100%;
                box-sizing: border-box;
              }
              &::after {
                content: '';
                width: 180px;
                height: 195px;
                display: inline-block;
                background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk1IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE5NSAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTUgMC4xMDk3OTZMNi4wMDMzNiAwLjAwMzM4MjVDMi42ODgzNCAwLjAwMTUxNTk5IDMuMjA1ODNlLTA4IDIuNjg4MzUgNy4xNTg5NmUtMDggNi4wMDMzOEwyLjE0NjQ4ZS0wNiAxODBDMTA3LjcyNiAxODAgMTk1IDk5LjQ4ODIgMTk1IDAuMTA5Nzk2WiIgZmlsbD0iI0VGREMwMCIvPgo8L3N2Zz4');
                background-repeat: no-repeat;
                background-position: top;
                background-size: contain;
                position: absolute;
                left: 0;
                top: 0;
              }
            }
            img {
              width: 100%;
              height: 580px;
              object-fit: cover;
              border-radius: 6px;
            }
          }
          .informations {
            margin-bottom: 30px;
            .title {
              font-size: var(--fz1);
              font-weight: 600;
              font-family: 'Montserrat Alternates', sans-serif;
              margin-bottom: 20px;
            }
            .desc {
              p {
                font-weight: 400;
                font-size: var(--fz3);
              }
            }
          }
          .address {
            p {
              display: flex;
              align-items: center;
              svg {
                margin-right: 10px;
              }
              color: var(--grey);
              font-weight: 400;
              font-size: var(--fz3);
            }
          }
        }
      }
    }
    .paginations {
      display: flex;
      position: relative;
      padding-left: 42px;
      width: calc(100vw - 42px);
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

  @media screen and (max-width: 1490px) {
    #projects-page {
      .projs {
        grid-column-gap: 50px;
        grid-template-columns: 425px 1fr;
      }

      
    }
  }

  @media screen and (max-width: 1100px) {
    #projects-page {
      margin-top: 10px;
      .projs {
        grid-template-columns: 1fr;
        .left {
          .all-projects {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: unset;
            grid-column-gap: 20px;
            .project {
              border: 1px solid #BDBDBD;
              .left {
                width: 140px;
                min-width: 140px;
                height: 140px;
                min-height: 140px;
              }
              .right {
                margin-left: 20px;
                .info {
                  .title {
                    margin-bottom: 5px;
                  }
                }
                .date {
                  .min-date {
                    margin-bottom: 17px;
                  }
                }
              }
            }
          }
        }
        .right {
          display: none;
        }
      }
    }
    .paginations {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 790px) {
    #projects-page {
      margin-top: 10px;
      .projs {
        grid-template-columns: 1fr;
        .left {
          .all-projects {
            grid-template-columns: 1fr;
            grid-template-rows: unset;
            grid-column-gap: 20px;
          }
        }
        .right {
          display: none;
        }
      }
    }
  }

@media screen and (max-width: 1100px) {
  #projects-page{
    .type-selector{
      border-bottom: none;
      .type-selector-inner{
        overflow-x: scroll;
        overflow-y: hidden;
        gap: 20px;
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; 

        &::-webkit-scrollbar {
          display: none; /* for Chrome, Safari, and Opera */
        }

        div{
          white-space: nowrap;
          height: auto;
          
          button{
            padding: 4px 19px 8px;
            border-radius: 6px;
            background: #F4F4F4;
            margin-bottom: 0;
            color: #000;
          }

          button.active{
            background: var(--dark-pink, #A62585);
            color: #fff;
          }

          button.active::after{
          display: none;
          }

          .desc{
            display: none;
          }
        }
      }
    }
  }
}
</style>