<template>
  <main id="homePage">
    <showPartner ref="showPartner" />
    <div class="main-gallery">
      <figure>
        <template v-for="(gal, index) in gallery">
          <div @mouseenter="onMous($event)" class="blocks-img" :class="`gallery${index}`" :key="gal.id" ref="gallery">
            <button @touchend.prevent="onMousClick($event, index)" class="btn-gal">
              <template v-for="img in gal.images.data">
                <img :src="siteUrl + img.attributes.url" alt="" :key="img.id">
              </template>
            </button>
          </div>
        </template>
      </figure>
    </div>
    <div class="about container-main margin-main" id="about" ref="about">
      <div class="informations">
        <div class="left">
          <img :src="siteUrl + about.img.data.attributes.url" alt="">
        </div>
        <div class="right">
          <p class="title">
            {{ about.title }}
          </p>
          <p class="desc" v-html="$md.render(about.desc)"></p>
          <nuxt-link to="/" class="btn-donate">
            підтримати
            <span class="svg-donate"></span>
          </nuxt-link>
        </div>
      </div>
      <div class="founders">
        <template v-for="m in members">
          <div class="user" :key="m.id">
            <div class="top">
              <img :src="siteUrl + m.img.data.attributes.url" alt="">
            </div>
            <div class="bottom">
              <p class="name">
                {{ m.name }}
              </p>
              <p class="post">
                {{ m.post }}
              </p>
              <p class="desc">
                {{ m.desc }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div id="projects" class="projects margin-main" ref="projects">
      <h2>
        Проекти
      </h2>
      <div class="gal" ref="gal_prod">
        <div class="gallery-projects" @touchstart="onScrollProkects($event)">
          <template v-for="(p, index) in projects">
            <button class="project" :data_element="`project${index}`" :key="p.id"
              @click.prevent="setActiveProjectMouse2($event, `project${index}`, p.attributes.link)" ref="project">
              <div class="date" @mouseenter="setActiveProjectMouse(`project${index}`)">
                <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M151 0.0921069L0 1.80066e-06L1.80066e-06 151C83.4183 151 151 83.4595 151 0.0921069Z" />
                </svg>
                <p>
                  {{ getDate(p.attributes.date) }}
                </p>
              </div>
              <div class="desc" @mouseenter="setActiveProjectMouse(`project${index}`)">
                <p class="name">
                  {{ p.attributes.title }}
                </p>
                <p class="address">
                  {{ p.attributes.address }}
                </p>
              </div>
              <div class="img">
                <img :src="siteUrl + p.attributes.img.data.attributes.url" alt="">
                <span class="bg" @mouseenter="setActiveProjectMouse(`project${index}`)"></span>
              </div>
            </button>
          </template>
        </div>
      </div>
      <div class="pagintaion">
        <button class="prew" @click.prevent="prewProject()" ref="prewProject">
          <div class="svg">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5712 0.0849695C11.4418 0.021861 11.2965 -0.00701434 11.1509 0.00144188C11.0053 0.00989905 10.8649 0.0553683 10.7448 0.132972L0.344421 6.88333C0.238147 6.95235 0.1513 7.0445 0.0913169 7.15187C0.0313327 7.25925 6.6628e-07 7.37865 6.55683e-07 7.49986C6.45087e-07 7.62107 0.0313327 7.74047 0.0913168 7.84784C0.1513 7.95522 0.238146 8.04736 0.344421 8.11639L10.7448 14.8667C10.8648 14.9446 11.0052 14.9902 11.1509 14.9986C11.2966 15.007 11.442 14.9778 11.5712 14.9143C11.7005 14.8508 11.8088 14.7554 11.8844 14.6383C11.96 14.5213 12 14.387 12 14.2502L12 0.749505C12 0.612595 11.9601 0.47829 11.8845 0.361148C11.8089 0.244006 11.7005 0.148497 11.5712 0.0849695Z" />
            </svg>
          </div>
        </button>
        <div class="points">
          <template v-for="(p, index) in projects">
            <button class="point" :key="p.id" @click.prevent="setActiveProject(`project${index}`)"
              :data_element="`project${index}`" ref="projectBtn">
              <div class="svg">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" />
                </svg>
              </div>
            </button>
          </template>
        </div>
        <button class="next" @click.prevent="nextProject()" ref="nextProject">
          <div class="svg">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.428812 14.915C0.558228 14.9781 0.703534 15.007 0.849131 14.9986C0.994729 14.9901 1.13512 14.9446 1.25524 14.867L11.6556 8.11667C11.7619 8.04765 11.8487 7.9555 11.9087 7.84813C11.9687 7.74075 12 7.62135 12 7.50014C12 7.37893 11.9687 7.25953 11.9087 7.15216C11.8487 7.04478 11.7619 6.95264 11.6556 6.88361L1.25524 0.133254C1.13522 0.0553947 0.994759 0.00980153 0.849079 0.00141157C0.703398 -0.00697839 0.558045 0.0221546 0.428758 0.085656C0.299471 0.149157 0.191177 0.244608 0.115601 0.361671C0.0400259 0.478735 4.91733e-05 0.612951 -1.05295e-07 0.749786L-2.19691e-06 14.2505C-2.62837e-05 14.3874 0.0399215 14.5217 0.115511 14.6389C0.191101 14.756 0.299449 14.8515 0.428812 14.915Z"
                fill="#E0E0E0" />
            </svg>
          </div>
        </button>
      </div>
      <div class="all-projects">
        <nuxt-link to="projects" class="btn-all">
          переглянути всі
        </nuxt-link>
      </div>
    </div>
    <div id="partners" class="partners container-main margin-main" ref="partners">
      <h2>
        Наші партнери
      </h2>
      <div class="all-partners">
        <template v-for="par in partners">
          <button @click.prevent="showParnerIn(par.attributes)" class="partner" :key="par.id">
            <img :src="siteUrl + par.attributes.img.data.attributes.url" alt="">
          </button>
        </template>
      </div>
    </div>
    <div id="youtube" class="youtube container-main margin-main">
      <div class="videos">
        <div class="left">
          <YouTubeEmbed id="static-video" :video-id="yourVideoId"></YouTubeEmbed>
        </div>
        <div class="right">
          <div class="video-link-container" @click.prevent="redirectToAnotherPage()">
            <img
              src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY=">
            <div class="desc">
              <span class="name">Your video description</span>
              <span class="added-ago">1 місяць тому</span>
              <span class="duration">5:34</span>
            </div>
          </div>
          <div class="video-link-container" @click.prevent="redirectToAnotherPage()">
            <img
              src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY=">
            <div class="desc">
              <span class="name">Your video description</span>
              <span class="added-ago">1 місяць тому</span>
              <span class="duration">5:34</span>
            </div>
          </div>
          <div class="video-link-container" @click.prevent="redirectToAnotherPage()">
            <img
              src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY=">
            <div class="desc">
              <span class="name">Your video description</span>
              <span class="added-ago">1 місяць тому</span>
              <span class="duration">5:34</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div id="documentations" class="documentations container-main margin-main" ref="documentations">
      <h2>
        Документація
      </h2>
      <div class="all-docs">
        <template v-for="(doc, index) in docs">
          <a target="_blank" rel="noopener noreferrer" :href="siteUrl + doc.doc.data.attributes.url" class="btn-docs"
            :key="doc.id" v-if="index < 5">
            <div class="ico-download">
              <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.6384 29.3474L23.2913 31.6049V21.4999C23.2913 21.0247 23.1026 20.569 22.7666 20.233C22.4306 19.897 21.9749 19.7083 21.4997 19.7083C21.0245 19.7083 20.5688 19.897 20.2328 20.233C19.8968 20.569 19.708 21.0247 19.708 21.4999V31.5153L17.3968 29.1862C17.2297 29.0191 17.0314 28.8866 16.8131 28.7962C16.5949 28.7058 16.3609 28.6593 16.1247 28.6593C15.8884 28.6593 15.6545 28.7058 15.4362 28.7962C15.218 28.8866 15.0197 29.0191 14.8526 29.1862C14.6855 29.3532 14.553 29.5515 14.4626 29.7698C14.3722 29.9881 14.3257 30.222 14.3257 30.4583C14.3257 30.6945 14.3722 30.9284 14.4626 31.1467C14.553 31.365 14.6855 31.5633 14.8526 31.7303L20.2276 37.1053C20.395 37.2714 20.5936 37.4028 20.8118 37.4919C21.0301 37.5811 21.2639 37.6263 21.4997 37.6249C21.961 37.6231 22.4038 37.4434 22.7359 37.1233L28.1109 31.9274C28.301 31.7705 28.4567 31.5761 28.5683 31.3563C28.6798 31.1365 28.7448 30.8961 28.7592 30.65C28.7736 30.404 28.7371 30.1576 28.6519 29.9263C28.5667 29.695 28.4347 29.4838 28.2642 29.3058C28.0936 29.1279 27.8882 28.987 27.6607 28.8921C27.4333 28.7971 27.1887 28.7501 26.9422 28.754C26.6958 28.7579 26.4528 28.8127 26.2284 28.9148C26.0041 29.0169 25.8032 29.1641 25.6384 29.3474Z"
                  fill="#BDBDBD" />
                <path
                  d="M31.6586 12.5416C30.9275 10.4293 29.5562 8.59747 27.7355 7.30092C25.9147 6.00437 23.7351 5.30762 21.4999 5.30762C19.2647 5.30762 17.085 6.00437 15.2643 7.30092C13.4435 8.59747 12.0722 10.4293 11.3411 12.5416C9.7314 12.7572 8.21058 13.4064 6.94133 14.4196C5.67208 15.4329 4.70217 16.7721 4.13534 18.2941C3.56851 19.8161 3.4261 21.4635 3.72333 23.0602C4.02056 24.6568 4.74626 26.1427 5.82279 27.3587C5.95283 27.5877 6.13177 27.7853 6.34687 27.9373C6.56197 28.0893 6.80794 28.192 7.06726 28.2381C7.32658 28.2842 7.59288 28.2726 7.8472 28.2041C8.10151 28.1355 8.33758 28.0117 8.5386 27.8415C8.73961 27.6713 8.90064 27.4589 9.01019 27.2194C9.11975 26.9799 9.17515 26.7191 9.17245 26.4558C9.16974 26.1924 9.10901 25.9328 8.99456 25.6956C8.88011 25.4584 8.71476 25.2493 8.51029 25.0833C7.81712 24.3083 7.3636 23.3489 7.20468 22.3214C7.04576 21.2939 7.18828 20.2423 7.61495 19.2942C8.04162 18.346 8.73413 17.542 9.60857 16.9794C10.483 16.4169 11.5018 16.1201 12.5415 16.1249H12.7207C13.1399 16.1334 13.5487 15.9946 13.8761 15.7327C14.2034 15.4708 14.4286 15.1024 14.5124 14.6916C14.8413 13.0715 15.7203 11.615 17.0003 10.5688C18.2803 9.52261 19.8826 8.95109 21.5357 8.95109C23.1888 8.95109 24.7912 9.52261 26.0711 10.5688C27.3511 11.615 28.2301 13.0715 28.559 14.6916C28.6428 15.1024 28.868 15.4708 29.1953 15.7327C29.5227 15.9946 29.9316 16.1334 30.3507 16.1249H30.4582C31.4979 16.1201 32.5167 16.4169 33.3912 16.9794C34.2656 17.542 34.9581 18.346 35.3848 19.2942C35.8115 20.2423 35.954 21.2939 35.7951 22.3214C35.6361 23.3489 35.1826 24.3083 34.4895 25.0833C34.3316 25.2603 34.2105 25.4668 34.1331 25.691C34.0557 25.9151 34.0236 26.1524 34.0386 26.389C34.0536 26.6257 34.1154 26.857 34.2205 27.0696C34.3256 27.2822 34.4718 27.4718 34.6507 27.6274C34.9773 27.9155 35.3977 28.0747 35.8332 28.0754C36.0876 28.075 36.339 28.0205 36.5707 27.9155C36.8024 27.8105 37.0091 27.6573 37.177 27.4662C38.2833 26.2522 39.0347 24.7575 39.3489 23.1453C39.663 21.5331 39.5279 19.8656 38.9583 18.3251C38.3887 16.7845 37.4065 15.4302 36.1191 14.4102C34.8317 13.3902 33.2886 12.7438 31.6586 12.5416Z"
                  fill="#BDBDBD" />
              </svg>
            </div>
            <div class="info">
              <p class="name">
                {{ doc.doc.data.attributes.name.split('.')[0] }}
              </p>
            </div>
          </a>
        </template>
        <div class="div">
          <nuxt-link to="documentations" class="btn-all">
            переглянути всі
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import YouTubeEmbed from '../components/YouTubeEmbed.vue'

export default {
  data() {
    return {
      siteUrl: '',
      projects: [],
      currentPage: 1,
      count: 5,
      prewPage: 0,
      nextPage: 0,
      maxPage: 0,
      nextPage: 0,
      slideProjects: {
        initPoint: 0,
        startPoint: 0,
        endPoint: 0,
      },
      yourVideoId: '8Eu3jmEUlzc', //TODO: create backend dependency

    };
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('default/fetch'),
      store.dispatch('about/fetch'),
      store.dispatch('about-members/fetch'),
      store.dispatch('mainGallery/fetch'),
      store.dispatch('partners/fetch'),
      store.dispatch('documents/fetch'),
      store.dispatch('homePage/fetch')
    ]);
  },
  computed: {
    ...mapGetters({
      about: 'about/about',
      members: 'about-members/members',
      partners: 'partners/partners',
      gallery: 'mainGallery/gallery',
      docs: 'documents/docs',
      seo: 'homePage/seo'
    })
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
    endTouch(event) {
      // event.preventDefault()
      this.slideProjects.endPoint = event.changedTouches[0].clientX;
      let is = null;
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].classList.contains('active')) {
          is = parseInt(i);
        }
      }
      if (this.slideProjects.initPoint < this.slideProjects.startPoint) {
        is -= 1;
        if (is > -1) {
          this.setActiveProject(`project${is}`);
        }
        this.$refs.gal_prod.removeEventListener('touchend', this.endTouch);
        this.$refs.gal_prod.removeEventListener('touchmove', this.moveTouch);
      }
      else if (this.slideProjects.initPoint > this.slideProjects.startPoint) {
        is += 1;
        if (is < 4) {
          this.setActiveProject(`project${is}`);
          this.$refs.gal_prod.removeEventListener('touchend', this.endTouch);
          this.$refs.gal_prod.removeEventListener('touchmove', this.moveTouch);
        }
      }
    },
    moveTouch(event) {
      this.slideProjects.startPoint = event.touches[0].clientX;
    },
    onScrollProkects(start) {
      this.slideProjects.startPoint = this.slideProjects.initPoint = start.touches[0].clientX;
      this.$refs.gal_prod.addEventListener('touchend', this.endTouch);
      this.$refs.gal_prod.addEventListener('touchmove', this.moveTouch);
      this.$refs.gal_prod.removeEventListener('click', this.moveTouch);
    },
    showParnerIn(p) {
      this.$refs.showPartner.on = true;
      this.$refs.showPartner.parner = p;
      this.$refs.showPartner.pageUrl = this.siteUrl;
      document.documentElement.style.overflow = 'hidden';
    },
    setActiveProjectMouse(pr) {
      let is = null;
      if (document.documentElement.offsetWidth > 1100) {
        for (let i in this.$refs.project) {
          if (this.$refs.project[i].attributes.data_element.value === pr) {
            this.$refs.project[i].classList.add('active');
            this.$refs.projectBtn[i].classList.add('active');
            this.$refs.project[i].classList.remove('isCliced');
            is = this.$refs.project[i];
          }
          else {
            this.$refs.project[i].classList.remove('active');
            this.$refs.project[i].classList.remove('isCliced');
            this.$refs.projectBtn[i].classList.remove('active');
          }
        }
        if (!is.classList.contains('isCliced')) {
          let numberActiveProj = parseInt(pr.split('project')[1]);
          if (numberActiveProj == 3) {
            this.$refs.nextProject.classList.remove('active');
          }
          else {
            this.$refs.nextProject.classList.add('active');
          }
          if (numberActiveProj == 0) {
            this.$refs.prewProject.classList.remove('active');
          }
          else {
            this.$refs.prewProject.classList.add('active');
          }
          is.classList.add('isCliced');
        }
      }
    },
    setActiveProject(pr) {
      let w = 0;
      let is = null;
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].attributes.data_element.value === pr) {
          is = this.$refs.project[i];
        }
      }
      if (!is.classList.contains('isCliced')) {
        for (let i in this.$refs.project) {
          if (this.$refs.project[i].attributes.data_element.value === pr) {
            this.$refs.project[i].classList.add('active');
            this.$refs.projectBtn[i].classList.add('active');
            w = this.$refs.project[i].offsetWidth;
          }
          else {
            this.$refs.project[i].classList.remove('active');
            this.$refs.project[i].classList.remove('isCliced');
            this.$refs.projectBtn[i].classList.remove('active');
          }
        }
        let numberActiveProj = parseInt(pr.split('project')[1]);
        if (document.documentElement.offsetWidth > 600) {
          this.$refs.gal_prod.scrollTo({
            left: numberActiveProj * w,
            behavior: "smooth"
          });
        }
        else {
          this.$refs.gal_prod.scrollTo({
            left: numberActiveProj * w,
            behavior: "smooth"
          });
        }
        if (numberActiveProj == 3) {
          this.$refs.nextProject.classList.remove('active');
        }
        else {
          this.$refs.nextProject.classList.add('active');
        }
        if (numberActiveProj == 0) {
          this.$refs.prewProject.classList.remove('active');
        }
        else {
          this.$refs.prewProject.classList.add('active');
        }
        is.classList.add('isCliced');
      }
    },
    setActiveProjectMouse2(e, pr, link) {
      e.preventDefault();
      let w = 0;
      let is = null;
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].attributes.data_element.value === pr) {
          is = this.$refs.project[i];
        }
      }
      if (!is.classList.contains('isCliced')) {
        for (let i in this.$refs.project) {
          if (this.$refs.project[i].attributes.data_element.value === pr) {
            this.$refs.project[i].classList.add('active');
            this.$refs.projectBtn[i].classList.add('active');
            w = this.$refs.project[i].offsetWidth;
          }
          else {
            this.$refs.project[i].classList.remove('active');
            this.$refs.project[i].classList.remove('isCliced');
            this.$refs.projectBtn[i].classList.remove('active');
          }
        }
        let numberActiveProj = parseInt(pr.split('project')[1]);
        this.$refs.gal_prod.scrollTo({
          left: numberActiveProj * w,
          behavior: "smooth"
        });
        if (numberActiveProj == 3) {
          this.$refs.nextProject.classList.remove('active');
        }
        else {
          this.$refs.nextProject.classList.add('active');
        }
        if (numberActiveProj == 0) {
          this.$refs.prewProject.classList.remove('active');
        }
        else {
          this.$refs.prewProject.classList.add('active');
        }
        is.classList.add('isCliced');
      }
      else {
        if (document.documentElement.offsetWidth > 1100) {
          this.$router.push(`projects?to=${link}`);
        }
        else {
          this.$router.push(`projects/${link}`);
        }
      }
    },
    nextProject() {
      let value = '';
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].classList.contains('active') === true) {
          value = this.$refs.project[i].attributes.data_element.value;
        }
      }
      if (value !== '') {
        let numberActiveProj = parseInt(value.split('project')[1]);
        if (numberActiveProj < 3) {
          numberActiveProj++;
          this.setActiveProject(`project${numberActiveProj}`);
        }
        if (numberActiveProj == 3) {
          this.$refs.nextProject.classList.remove('active');
        }
        else {
          this.$refs.nextProject.classList.add('active');
        }
      }
    },
    prewProject() {
      let value = '';
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].classList.contains('active') === true) {
          value = this.$refs.project[i].attributes.data_element.value;
        }
      }
      if (value !== '') {
        let numberActiveProj = parseInt(value.split('project')[1]);
        if (numberActiveProj > 0) {
          numberActiveProj--;
          this.setActiveProject(`project${numberActiveProj}`);
        }
        if (numberActiveProj == 0) {
          this.$refs.prewProject.classList.remove('active');
        }
        else {
          this.$refs.prewProject.classList.add('active');
        }
      }
    },
    getActivePosition() {
      let value = '';
      let bool = false;
      for (let i in this.$refs.project) {
        if (this.$refs.project[i].classList.contains('active') === true) {
          value = this.$refs.project[i].attributes.data_element.value;
          let numberActiveProj = parseInt(value.split('project')[1]);
          if (numberActiveProj !== 0) {
            bool = true;
          }
          else {
            bool = false;
          }
        }
      }
      return bool;
    },
    getDate(d) {
      let day = d.split('-')[2];
      let month = d.split('-')[1];
      return day + '.' + month;
    },
    onMousClick(el, index) {
      if (!this.$refs.gallery[index].classList.contains('in')) {
        this.$refs.gallery[index].classList.add('in');
      }
      else {
        this.$refs.gallery[index].classList.remove('in');
      }
    },
    onMous(el) {
      el.preventDefault();
      el.target.classList.toggle('in');
    },
    onScroll(e) {
      if (document.documentElement.offsetWidth > 1101) {
        for (let key in this.$refs) {
          if (key == 'about') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about[0].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about[0].classList.remove('active');
            }
          }
          if (key == 'projects') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.projects[0].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.projects[0].classList.remove('active');
            }
          }
          if (key == 'partners') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.partners[0].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.partners[0].classList.remove('active');
            }
          }
          if (key == 'documentations') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.documentations[0].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.documentations[0].classList.remove('active');
            }
          }
          if (key == 'news') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.news[0].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.news[0].classList.remove('active');
            }
          }
        }
        if (window.pageYOffset >= this.$parent.$parent.$refs.footer.$el.offsetTop - 35 && window.pageYOffset <= this.$parent.$parent.$refs.footer.$el.offsetTop + this.$parent.$parent.$refs.footer.$el.offsetHeight) {
          this.$parent.$parent.$refs.headerMain.$refs.footer[0].classList.add('active');
        }
        else if (window.pageYOffset < this.$parent.$parent.$refs.footer.$el.offsetTop - 35 || window.pageYOffset > this.$parent.$parent.$refs.footer.$el.offsetTop + this.$parent.$parent.$refs.footer.$el.offsetHeight) {
          this.$parent.$parent.$refs.headerMain.$refs.footer[0].classList.remove('active');
        }
        let top = window.pageYOffset;
        if (top < this.lastScroll) {
          try {
            this.$parent.$parent.$refs.headerMain.$el.style.top = '0px';
          }
          catch { }
        }
        else {
          if (window.pageYOffset >= 300) {
            try {
              this.$parent.$parent.$refs.headerMain.$el.style.top = '-150px';
            }
            catch { }
          }
        }
        this.lastScroll = top;
      }
      else {
        for (let key in this.$refs) {
          if (key == 'about') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about[1].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about[1].classList.remove('active');
            }
          }
          if (key == 'projects') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.projects[1].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.projects[1].classList.remove('active');
            }
          }
          if (key == 'partners') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.partners[1].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.partners[1].classList.remove('active');
            }
          }
          if (key == 'documentations') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.documentations[1].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.documentations[1].classList.remove('active');
            }
          }
          if (key == 'news') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.news[1].classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.news[1].classList.remove('active');
            }
          }
        }
        if (window.pageYOffset >= this.$parent.$parent.$refs.footer.$el.offsetTop - 18 && window.pageYOffset <= this.$parent.$parent.$refs.footer.$el.offsetTop + this.$parent.$parent.$refs.footer.$el.offsetHeight) {
          this.$parent.$parent.$refs.headerMain.$refs.footer[1].classList.add('active');
        }
        else if (window.pageYOffset < this.$parent.$parent.$refs.footer.$el.offsetTop - 18 || window.pageYOffset > this.$parent.$parent.$refs.footer.$el.offsetTop + this.$parent.$parent.$refs.footer.$el.offsetHeight) {
          this.$parent.$parent.$refs.headerMain.$refs.footer[1].classList.remove('active');
        }
        let top = window.pageYOffset;
        if (top < this.lastScroll) {
          try {
            this.$parent.$parent.$refs.headerMain.$el.style.top = '-1px';
          }
          catch { }
        }
        else {
          if (window.pageYOffset >= 300) {
            try {
              this.$parent.$parent.$refs.headerMain.$el.style.top = '-150px';
            }
            catch { }
          }
        }
        this.lastScroll = top;
      }
    },
    async getProjects() {
      await this.$axios.get(`${process.env.apiUrl}/api/proektis?populate=*&pagination[pageSize]=4&sort=date:desc`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
        .then(data => {
          this.projects = data.data.data;
          setTimeout(() => {
            for (let i in this.$refs.project) {
              if (i == 0 || i == 4) {
                this.$refs.project[i].classList.add('active');
                this.$refs.project[i].classList.add('isCliced');
                this.$refs.projectBtn[i].classList.add('active');
                let numberActiveProj = parseInt(this.$refs.project[i].attributes.data_element.value.split('project')[1]);
                if (numberActiveProj == 3) {
                  this.$refs.nextProject.classList.remove('active');
                }
                else {
                  this.$refs.nextProject.classList.add('active');
                }
                if (numberActiveProj == 0) {
                  this.$refs.prewProject.classList.remove('active');
                }
                else {
                  this.$refs.prewProject.classList.add('active');
                }
              }
            }
          });
        });
    },
    redirectToAnotherPage() {
      // Change the URL to the page you want to redirect to
      window.open('https://google.com', '_blank')
    }
  },
  mounted() {
    this.siteUrl = process.env.apiUrl;
    this.getProjects();
    setTimeout(() => {
      window.addEventListener('scroll', this.onScroll);
    });
    this.$nextTick(() => {
      try {
        if (document.documentElement.offsetWidth > 601) {
          this.$refs.gallery.forEach((g, index) => {
            setTimeout(() => {
              setTimeout(() => {
                g.classList.add('in');
              }, index * 1000);
            }, 1000);
            setTimeout(() => {
              setTimeout(() => {
                g.classList.remove('in');
              }, index * 1000);
            }, 3000);
          });
        }
        else {
          this.$refs.gallery.forEach((g, index) => {
            setTimeout(() => {
              setTimeout(() => {
                g.classList.add('in');
              }, index * 500);
            }, 1000);
            setTimeout(() => {
              setTimeout(() => {
                g.classList.remove('in');
              }, index * 500);
            }, 2000);
          });
        }
      }
      catch { }
      console.log(this.$refs);
      console.log('after mounted');
    });
  },
  components: { YouTubeEmbed }
}
</script>

<style lang="scss">
#homePage {
  max-width: 1920px;
  margin: 0 auto;

  .main-gallery {
    height: calc(100vh - 50px - 59px);
    max-height: 870px;
    margin-bottom: 140px;

    figure {
      display: flex;
      overflow: hidden;
      height: 100%;
      max-width: 1920px;

      .blocks-img {
        width: 25%;
        height: 100%;
        max-height: 870px;
        display: flex;
        flex-direction: column-reverse;

        .btn-gal {
          height: 100%;
          width: 100%;
          position: relative;
          flex-direction: column;

          img {
            transition: .3s;
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        &:nth-child(odd) {
          .btn-gal {
            img {
              &:nth-child(1) {
                top: unset;
                bottom: 0;
                transform: translateY(0);
              }

              &:nth-child(2) {
                transform: translateY(-100%);
              }
            }
          }

          &.in {
            .btn-gal {
              img {
                &:nth-child(1) {
                  transform: translateY(100%);
                }

                &:nth-child(2) {
                  transform: translateY(0);
                }
              }
            }
          }
        }

        &:nth-child(even) {
          .btn-gal {
            img {
              &:nth-child(1) {
                transform: translateY(0);
              }

              &:nth-child(2) {
                transform: translateY(100%);
                object-fit: fill;
              }
            }
          }

          &.in {
            .btn-gal {
              flex-direction: column-reverse;

              img {
                &:nth-child(1) {
                  transform: translateY(-100%);
                }

                &:nth-child(2) {
                  transform: translateY(0);
                }
              }
            }
          }
        }
      }
    }
  }

  .about {
    .informations {
      display: flex;
      justify-content: space-between;

      .left {
        width: 50%;
        height: 490px;
        min-width: 50%;
        min-height: 490px;
        display: flex;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }
      }

      .right {
        max-width: calc(50% - 60px);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;

        p,
        a {
          z-index: 1;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: -25px;
          z-index: 0;
          width: 128px;
          height: 128px;
          display: inline-block;
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02My44NTM4IDYuNjUzNDFlLTA1QzI4LjU4ODMgNi45NjE3MWUtMDUgNS4yMjg2NmUtMDUgMjguNTg4NCA1LjUzNjk2ZS0wNSA2My44NTM4QzUuODQ1MjZlLTA1IDk5LjExOTIgMjguNTg4NCAxMjcuNzA4IDYzLjg1MzggMTI3LjcwOEM5OS4xMTkyIDEyNy43MDggMTI3LjcwOCA5OS4xMTkyIDEyNy43MDggNjMuODUzOEMxMjcuNzA4IDI4LjU4ODQgOTkuMTE5MiA2LjM0NTExZS0wNSA2My44NTM4IDYuNjUzNDFlLTA1WiIgZmlsbD0iI0VGREMwMCIvPgo8L3N2Zz4');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        &::before {
          content: '';
          position: absolute;
          right: 0;
          z-index: 0;
          width: 106px;
          height: 106px;
          display: inline-block;
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjEwNiIgdmlld0JveD0iMCAwIDEwNiAxMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDYgMEM0Ny40NjM0IC0yLjU1ODcyZS0wNiA1LjU1MzY4ZS0wNiA0Ny40ODY4IDIuOTk1OTllLTA2IDEwNkwxMDYgMTA2TDEwNiAwWiIgZmlsbD0iIzUyQTc4NSIvPgo8L3N2Zz4');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        .btn-donate {
          margin-top: 75px;
        }

        .desc {
          font-size: var(--fz3);
          font-weight: 400;
          margin-top: 20px;
          line-height: 26px;
        }

        .title {
          font-size: var(--fz1);
          font-weight: 600;
          font-family: 'Montserrat Alternates', sans-serif;
        }
      }
    }

    .founders {
      margin-top: 70px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 115px;

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
  }

  .projects {
    width: 100%;
    max-width: 1920px;

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
      margin-left: 300px;
    }

    .gallery-projects {
      display: flex;
      width: 100%;
      max-height: 600px;
      height: 600px;

      .project {
        position: relative;
        transition: .3s;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 0;

        &:nth-child(1) {
          .date {
            p {
              position: relative;
              color: var(--black);
            }

            svg {
              path {
                fill: var(--yellow);
              }
            }
          }
        }

        &:nth-child(2) {
          .date {
            p {
              position: relative;
              color: var(--white);
            }

            svg {
              path {
                fill: var(--green);
              }
            }
          }
        }

        &:nth-child(3) {
          .date {
            p {
              position: relative;
              color: var(--white);
            }

            svg {
              path {
                fill: var(--pink2);
              }
            }
          }
        }

        &:nth-child(4) {
          .date {
            p {
              position: relative;
              color: var(--black);
            }

            svg {
              path {
                fill: var(--yellow);
              }
            }
          }
        }

        &.active {
          width: 150%;

          .img {
            .bg {
              opacity: 0;
            }
          }

          .desc {
            background-color: var(--pink2);
          }
        }

        .date,
        .desc {
          z-index: 1;
          position: relative;
        }

        .date {
          width: 125px;
          height: 105px;
          font-weight: 600;
          padding-left: 25px;
          padding-top: 45px;
          position: relative;

          p {
            font-size: var(--fz2);
            text-align: left;
          }

          svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .desc {
          padding: 30px 60px;
          width: calc(100% - 120px);
          transition: .3s;
          overflow: hidden;

          .name {
            font-size: var(--fz2);
            font-weight: 600;
            font-family: 'Montserrat Alternates', sans-serif;
          }

          .address {
            font-size: var(--fz3);
            font-weight: 400;
          }

          p {
            color: var(--white);
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
          }
        }

        .img {
          height: 100%;
          width: 100%;
          z-index: 0;
          position: absolute;
          top: 0;
          left: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }

          .bg {
            position: absolute;
            display: block;
            background-color: rgba($color: #202221, $alpha: .7);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: .3s;
            z-index: 1;
          }
        }
      }
    }

    .pagintaion {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15px;
      margin-top: 30px;

      .prew {
        margin-right: 15px;
      }

      .next {
        margin-left: 15px;
      }

      .prew,
      .next {
        height: 15px;

        path {
          transition: .3s;
          fill: #E0E0E0;
        }

        &.active {
          path {
            fill: #828282;
          }
        }
      }

      .points {
        display: flex;
        justify-content: space-between;
        max-width: 96px;
        width: 100%;

        .point {
          width: 15px;
          height: 15px;

          &.active {
            .svg {
              svg {
                transform: scale(1.4)
              }
            }
          }

          .svg {
            width: 15px;
            height: 15px;
          }

          svg {
            width: 10px;
            height: 10px;
            transition: .3s;
          }

          &:nth-child(1),
          &:nth-child(4) {
            circle {
              fill: var(--pink);
            }
          }

          &:nth-child(2) {
            circle {
              fill: var(--yellow);
            }
          }

          &:nth-child(3) {
            circle {
              fill: var(--green);
            }
          }
        }
      }
    }

    .all-projects {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }

  .partners {
    path {
      fill: #C9C9C9;
    }

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
    }

    .all-partners {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 95px;
      grid-row-gap: 30px;

      .partner {
        display: flex;

        &:hover {
          img {
            opacity: 1;
          }
        }

        img {
          opacity: .5;
          transition: .3s;
          height: 100%;
        }
      }
    }
  }

  .youtube {

    //TODO


    .videos {
      display: flex;

      .left {
        flex: 2;

        #static-video {
          height: 444px;

          iframe {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right {
        flex: 1;
        margin-left: 50px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .video-link-container {
          display: flex;


          width: 100%;

          opacity: 0.7;
          transition: .3s;

          &:hover {
            opacity: 1;
            cursor: pointer;
          }

          img {
            width: 202px;
            height: 109px;
            object-fit: cover;
            margin-right: 20px;
          }

          .desc {
            display: flex;
            flex-direction: column;

            .name {
              font-weight: 600;
            }

            .added-ago {
              margin-top: 10px;
              color: #BDBDBD;
            }

            .duration {
              margin-top: auto;
              color: #BDBDBD;
            }
          }
        }
      }




    }
  }

  .documentations {
    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
    }

    .all-docs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 120px;
      grid-row-gap: 60px;

      .btn-docs {
        display: flex;
        font-weight: 400;

        .info {
          margin-top: 9px;
          margin-left: 20px;

          p {
            font-family: 'Montserrat Alternates', sans-serif;
          }
        }

        path {
          transition: .3s;
        }

        &:hover {
          path {
            fill: var(--black);
          }
        }
      }

      .btn-all {
        height: calc(50px - 22px);
        margin-top: 5px;
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  #homePage {
    .projects {
      h2 {
        margin: 0 auto;
        max-width: 1300px;
        margin-bottom: 60px;
      }
    }
  }
}

@media screen and (max-width: 1660px) {
  #homePage {
    .partners {
      margin-top: 100px;
    }

    .youtube {
      margin-top: 100px;
    }

    .documentations {
      margin-top: 100px;
    }

    .projects {
      .gallery-projects {
        .project {
          transition: .3s;
          width: calc((100% - 500px)/3);

          &.active {
            width: 500px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  #homePage {
    .projects {
      h2 {
        max-width: 1100px
      }
    }

    .project {
      .gallery-projects {
        overflow-x: scroll;
      }
    }

    .partners {
      .all-partners {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .youtube {

      //TODO

    }
  }
}

@media screen and (max-width: 1100px) {
  #homePage {
    .main-gallery {
      margin-bottom: 15px;
      max-height: 465px;
    }

    .about {
      margin-top: 40px;

      .informations {
        flex-direction: column;

        .right {
          max-width: unset;
          justify-content: flex-start;
          padding-top: 25px;

          &::after {
            width: 75px;
            height: 75px;
          }

          &::before {
            bottom: 0;
            width: 50px;
            height: 50px;
          }

          .desc {
            margin-top: 10px;
          }

          .btn-donate {
            margin-top: 20px;
          }
        }

        .left {
          width: 100%;
          height: 290px;
          min-height: unset;
          margin-bottom: 25px;
        }
      }
    }

    .projects {
      overflow: hidden;
      width: 100%;

      h2 {
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
        margin-bottom: 20px;
      }

      .gal {
        overflow: hidden;
      }

      .gallery-projects {
        width: calc(300px * 3 + 500px);
        transition: .3s;

        .project {
          width: 300px;
          min-width: 300px;

          &.active {
            min-width: 500px;
          }
        }
      }

      .pagintaion {
        .points {
          display: none;
        }

        // display: none;
      }
    }

    .partners {
      margin-top: 40px;

      h2 {
        margin-bottom: 20px;
      }

      .all-partners {
        grid-template-columns: repeat(3, 1fr);
      }
    }


    .documentations {
      margin-top: 40px;

      h2 {
        margin-bottom: 20px;
      }

      .all-docs {
        grid-column-gap: 70px;
        grid-row-gap: 20px;

        .btn-all {
          height: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 830px) {
  #homePage {
    .about {
      .founders {
        display: flex;
        flex-direction: column;
      }
    }

    .partners {
      .all-partners {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .documentations {
      .all-docs {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .youtube {
      .videos {
        flex-direction: column;

        .left {
          flex: none;

          #static-video {
            height: 330px;
          }
        }

        .right {
          flex: none;
          margin-left: 0px;

          .video-link-container {
            margin-top: 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  #homePage {
    .main-gallery {
      height: 100vh;
      max-height: calc(100vh - 66px);

      figure {
        .blocks-img {
          width: 50%;

          &:nth-child(even) {
            display: none;
          }

          &:nth-child(1) {
            .btn-gal {
              img {
                object-position: right top;

                &:nth-child(2) {
                  object-position: center;
                }
              }
            }
          }

          &:nth-child(3) {
            .btn-gal {
              img {
                object-position: left top;

                &:nth-child(2) {
                  object-position: center;
                }
              }
            }
          }

          .btn-gal {
            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    .partners {
      .all-partners {
        grid-column-gap: 50px;

        .partner {
          img {
            width: 130px;
            height: auto;
            object-fit: contain;
          }
        }
      }
    }

    .documentations {
      .all-docs {
        grid-template-columns: 1fr;

        .div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .projects {
      .gallery-projects {
        height: 370px;
        max-height: unset;
        width: calc(75vw + 900px);

        .project {
          .desc {
            padding: 30px;
            width: calc(100% - 60px);
          }

          &.active {
            width: 75vw;
            min-width: 75vw;
          }

          .date {
            width: 100px;
            height: 100px;
            padding: 30px 0 0 5px;

            svg {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }

    .youtube {
      .videos {
        .left {
          #static-video {
            height: 209px;
          }
        }
      }
    }

    .about {
      .founders {
        margin-top: 30px;
        grid-row-gap: 30px;

        .user {
          .top {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            margin-bottom: 30px;

            img {
              width: auto;
              height: 100%;
              object-fit: contain;
            }
          }

          .bottom {
            .post {
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 345px) {
  #homePage {
    .partners {
      .all-partners {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>