<template>
  <main id="homePage">
    <showPartner ref="showPartner" />
    <showMember ref="showMember" />
    
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

    <div class="about margin-main" id="about" ref="about">
      <template v-for="(aboutBlock, index) in about">
        <div class="about  container-main">
          <div class="left">
            <img :src="siteUrl + aboutBlock.Img.data.attributes.url" alt="">
          </div>
          <div class="right">
            <p class="title">
              {{ aboutBlock.Title }}
            </p>
            <p class="desc" v-html="$md.render(aboutBlock.Desc)"></p>
          </div>
        </div>
      </template>

      <div id="team" class="teams">
        <div class="teams-container container-main">
          <h2>{{ $t('header.about_submenu.team') }}</h2>
          <div class="carousel-container">
            <div class="nav nav-left">
              <button class="prev material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
                <path d="M18 2L2.74141 16.7818C2.3358 17.1747 2.3358 17.8253 2.74141 18.2182L18 33" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
              </svg></button>
            </div>
            <div class="carousel-inner">
              <div class="track">
                <template>
                  <div v-for="(m, index) in members" class="card-container">
                    <div class="card">
                      <div class="image-container" @click.prevent="showMemberIn(m.attributes)">
                        <div class="circle-container">
                          <div class="circle">
                            <svg v-if="index % 3 === 0" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 270 270" fill="none">
                              <path d="M135 1.98541e-05C60.4415 1.33359e-05 -1.10572e-05 60.4416 -1.75753e-05 135C-2.40935e-05 209.558 60.4415 270 135 270C209.558 270 270 209.558 270 135C270 60.4416 209.559 2.63722e-05 135 1.98541e-05Z" fill="#EFDC00"/>
                            </svg>
                            <svg v-else-if="index % 3 == 1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 270 270" fill="none">
                              <path d="M135 1.98541e-05C60.4415 1.33359e-05 -1.10572e-05 60.4416 -1.75753e-05 135C-2.40935e-05 209.558 60.4415 270 135 270C209.558 270 270 209.558 270 135C270 60.4416 209.559 2.63722e-05 135 1.98541e-05Z" fill="#52A785"/>
                            </svg>
                            <svg v-else-if="index % 3 === 2" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 270 270" fill="none">
                              <path d="M135 1.98541e-05C60.4415 1.33359e-05 -1.10572e-05 60.4416 -1.75753e-05 135C-2.40935e-05 209.558 60.4415 270 135 270C209.558 270 270 209.558 270 135C270 60.4416 209.559 2.63722e-05 135 1.98541e-05Z" fill="#C6569A"/>
                            </svg>
                          </div>
                        </div>
                        <div class="image-inner">
                          <img :src="siteUrl + m.attributes.image.data.attributes.url" alt="">
                        </div>
                        <div class="open-sign">
                          <span>+</span>
                        </div>
                      </div>
                      <div class="bio-container">
                        <p class="name">{{ m.attributes.name }}</p>
                        <p class="position">{{ m.attributes.position }}</p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="nav nav-right">
              <button class="next material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
              <path d="M2 33L17.2586 18.2182C17.6642 17.8253 17.6642 17.1747 17.2586 16.7818L2 2" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
            </svg></button>
            </div>
          </div>
          <div class="page-slider">
            <div class="page-slider-inner">
              <span class="value min-value">01</span>
              <div class="slider">
                <div class="slider-back">
                  <div class="slider-front"></div>
                </div>
              </div>
              <span class="value max-value">02  </span>
            </div>
          </div>
        
        </div>
      </div>
      <div id="supervis" class="teams">
        <div class="teams-container  container-main">
          <h2>{{ $t('header.about_submenu.overwatch') }}</h2>
          <div class="carousel-container">
            <div class="nav nav-left">
              <button class="prev material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
                <path d="M18 2L2.74141 16.7818C2.3358 17.1747 2.3358 17.8253 2.74141 18.2182L18 33" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
              </svg></button>
            </div>
            <div class="carousel-inner">
              <div class="track">
                <template>
                  <div v-for="s in supervis" class="card-container">
                    <div class="card">
                      <div class="image-container" @click.prevent="showMemberIn(s.attributes)">
                        <div class="image-inner">
                          <img :src="siteUrl + s.attributes.image.data.attributes.url" alt="">
                        </div>
                        <div class="open-sign">
                          <span>+</span>
                        </div>
                      </div>
                      <div class="bio-container">
                        <p class="name">{{ s.attributes.name }}</p>
                        <p class="position">{{ s.attributes.position }}</p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="nav nav-right">
              <button class="next material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
              <path d="M2 33L17.2586 18.2182C17.6642 17.8253 17.6642 17.1747 17.2586 16.7818L2 2" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
            </svg></button>
            </div>
          </div>
          <div class="page-slider">
            <div class="page-slider-inner">
              <span class="value min-value">01</span>
              <div class="slider">
                <div class="slider-back">
                  <div class="slider-front"></div>
                </div>
              </div>
              <span class="value max-value">02  </span>
            </div>
          </div>
        
        </div>
      </div>
      <div id="supervis-children" class="teams">
        <div class="teams-container container-main">
          <h2>{{ $t('header.about_submenu.children_overwatch') }}</h2>
          <div class="carousel-container">
            <div class="nav nav-left">
              <button class="prev material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
                <path d="M18 2L2.74141 16.7818C2.3358 17.1747 2.3358 17.8253 2.74141 18.2182L18 33" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
              </svg></button>
            </div>
            <div class="carousel-inner">
              <div class="track">
                <template>
                  <div v-for="m in childrenSupervis" class="card-container">
                    <div class="card">
                      <div class="image-container" @click.prevent="showMemberIn(m.attributes)">
                        <div class="image-inner">
                          <img :src="siteUrl + m.attributes.image.data.attributes.url" alt="">
                        </div>
                        <div class="open-sign">
                          <span>+</span>
                        </div>
                      </div>
                      <div class="bio-container">
                        <p class="name">{{ m.attributes.name }}</p>
                        <p class="position">{{ m.attributes.position }}</p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="nav nav-right">
              <button class="next material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
              <path d="M2 33L17.2586 18.2182C17.6642 17.8253 17.6642 17.1747 17.2586 16.7818L2 2" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
            </svg></button>
            </div>
          </div>
          <div class="page-slider">
            <div class="page-slider-inner">
              <span class="value min-value">01</span>
              <div class="slider">
                <div class="slider-back">
                  <div class="slider-front"></div>
                </div>
              </div>
              <span class="value max-value">02</span>
            </div>
          </div>
        
        </div>
      </div>
    </div>

    <div id="projects" class="projects container-main margin-main" ref="projects">
      <h2>
        {{this.$t('home.projects.title')}}
      </h2>
      <p>{{ programmsDesc }}</p>
      <div class="carousel-container" ref="gal_prod">
        <div class="nav nav-left">
              <button class="prev material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
                <path d="M18 2L2.74141 16.7818C2.3358 17.1747 2.3358 17.8253 2.74141 18.2182L18 33" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
              </svg></button>
            </div>
        <div class="carousel-inner">
          <template>
            <div class="track" ref="card_track">
                <div v-for="prType in projectTypes" class="card-container" @click.prevent="goToProjectType(prType.attributes.type)">
                  <div class="card" ref="card">
                    <img class=".img" :src="siteUrl + prType.attributes.previewPicture.data.attributes.url"/>
                    <span>{{prType.attributes.name}}</span>
                  </div>
                </div>
            </div>
          </template>
        </div>
        <div class="nav nav-right">
              <button class="next material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
              <path d="M2 33L17.2586 18.2182C17.6642 17.8253 17.6642 17.1747 17.2586 16.7818L2 2" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
            </svg></button>
        </div>
        
      </div>
      <div class="all-projects">
        <nuxt-link :to="localePath('projects')" class="btn-all">
          {{this.$t('home.projects.showAll')}}
        </nuxt-link>
      </div>
    </div>

    <div id="news" class="news-all container-main margin-main" ref="news">
      <h2>
        {{ this.$t('home.news.title') }}
      </h2>
      <div class="news-grid" >
        <template v-for="(element, index) in this.news"  >
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
      <div class="all-news">
          <nuxt-link :to="localePath('news')" class="btn-all">
            {{this.$t('home.news.showAll')}}
          </nuxt-link>
        </div>  
    </div>

    <div id="partners" class="partners container-main margin-main" ref="partners">
      <h2>
        {{this.$t('home.partners.title')}}
      </h2>
      <div class="carousel-container">
        <div class="nav nav-left">
          <button class="prev material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
            <path d="M18 2L2.74141 16.7818C2.3358 17.1747 2.3358 17.8253 2.74141 18.2182L18 33" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
          </svg></button>
        </div>
        <div class="carousel-inner">
          <div class="track">
            <template>
              <div v-for="par in partners" class="card-container">
                <div class="card">
                  <button @click.prevent="showParnerIn(par.attributes)" class="partner" :key="par.id">
                  <img :src="siteUrl + par.attributes.img.data.attributes.url" alt="">
                </button>
                </div>  
              </div>
            </template>
          </div>
        </div>
        <div class="nav nav-right">
          <button class="next material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="0 0 20 35" fill="none">
          <path d="M2 33L17.2586 18.2182C17.6642 17.8253 17.6642 17.1747 17.2586 16.7818L2 2" stroke="#A62585" stroke-width="4" stroke-linecap="round"/>
        </svg></button>
        </div>
      </div>
      <!-- <div class="all-partners">
        <template v-for="par in partners">
          <button @click.prevent="showParnerIn(par.attributes)" class="partner" :key="par.id">
            <img :src="siteUrl + par.attributes.img.data.attributes.url" alt="">
          </button>
        </template>
      </div> -->
    </div>

    <div id="youtube" class="youtube container-main margin-main">
      <h2>
        {{this.$t('home.youtube.title')}}
      </h2>
      <div class="videos">
        <div class="left">
          <YouTubeEmbed id="static-video" :video-id="youtubeMainVideoId"></YouTubeEmbed>
        </div>
        <div class="right">
          <template v-for="video in youtubeVideos">
            <div class="video-link-container" @click.prevent="redirectToAnotherPage(video.attributes.video_url)"
              :key="video.id">
              <img :src="video.attributes.preview_picture_url">
              <div class="desc">
                <div>
                  <p class="name">{{ video.attributes.title }}</p>
                  <p class="added-ago">{{ video.attributes.publishment_time }}</p>
                </div>
                <p class="duration">{{ video.attributes.video_length }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
      <p class="more-text">{{ this.$t('home.youtube.more') }}<a :href="socs[2].link"> {{ this.$t('home.youtube.our_channel') }}</a></p>
    </div>

    <div id="documentations" class="documentations container-main margin-main" ref="documentations">
      <h2>
        {{this.$t('home.documentation.title')}}
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
          <nuxt-link :to="localePath('documentations')" class="btn-all">
            {{this.$t('home.documentation.showAll')}}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div id="instagram" class="instagram container-main margin-main">
      <h2>
        {{this.$t('home.instagram.title')}}
      </h2>
      <div class="panels">
        <div class="panel quote">
          <svg>
            <circle r="60%" cx="0" cy="0" fill="#50A785" />
          </svg>
          <div class="text_holder">
            <p>{{instagram_quotes.quote_1}}</p>
          </div>
        </div>

        <div class="panel" v-if="instagram[0]">
          <a :href="instagram[0].attributes.permalink">
            <img class="inst-image" :src="instagram[0].attributes.media_url" alt="">
          </a>
        </div>
        <div v-else class="panel">
          <img :src="require('~/assets/images/inst_image.png')">
        </div>

        <div class="panel quote">
          <svg>
            <circle r="60%" cx="100%" cy="100%" fill="#C6569A" />
          </svg>
          <div class="text_holder">
            <p>{{instagram_quotes.quote_2}}</p>
          </div>
        </div>

        <div class="panel" v-if="instagram[1]">
            <a :href="instagram[1].attributes.permalink">
              <img class="inst-image" :src="instagram[1].attributes.media_url" alt="">
            </a>
        </div>
        <div v-else class="panel">
          <img :src="require('~/assets/images/inst_image.png')">
        </div>

        <div class="panel quote">
          <svg>
            <circle r="40%" cx="0" cy="0" fill="#A62585" />
          </svg>
          <svg>
            <circle r="13%" cx="80%" cy="75%" fill="#EFDC00" />
          </svg>
          <div class="text_holder">
            <p>{{instagram_quotes.quote_3}}</p>
          </div>
        </div>

        <div id="link" class="panel quote" @click.prevent="redirectToAnotherPage(socs[1].link)"> <!--TODOredirect to instagram-->
          <div class="text_holder">
            <p class="inst_tag">@efectdytyny</p>
            <p class="subtext">{{this.$t('home.instagram.goto')}}</p>
          </div>
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
      docs: [],
      slideProjects: {
        initPoint: 0,
        startPoint: 0,
        endPoint: 0,
      },
      youtubeVideos: [],
      instagram: [],
    };
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('default/fetch'),
      store.dispatch('about/fetch'),
      store.dispatch('youtube/fetch'),
      store.dispatch('about-members/fetch'),
      store.dispatch('founders/fetch'),
      store.dispatch('naglyadova-rada/fetch'),
      store.dispatch('dityacha-naglyadova-rada/fetch'),
      store.dispatch('mainGallery/fetch'),
      store.dispatch('partners/fetch'),
      store.dispatch('homePage/fetch'),
      store.dispatch('rekviziti/fetch'),
      store.dispatch('projectTypes/fetch'),
      store.dispatch('news/fetch'),
    ])
  },
  computed: {
    ...mapGetters({
      about: 'about/about',
      instagram_quotes: 'about/instagram',
      youtubeMainVideoId: 'youtube/youtube',
      members: 'founders/founders',
      supervis: 'naglyadova-rada/team',
      childrenSupervis: 'dityacha-naglyadova-rada/team',
      partners: 'partners/partners',
      gallery: 'mainGallery/gallery',
      socs: 'default/socs',
      seo: 'homePage/seo',
      programmsDesc: 'homePage/programmsDesc',
      news: 'news/news',
      projectTypes: 'projectTypes/types'
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
    showMemberIn(m){
      this.$refs.showMember.on = true;
      this.$refs.showMember.member = m;
      this.$refs.showMember.pageUrl = this.siteUrl;
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
    goToProjectType(type){
      if(this.$i18n.locale == 'uk'){
        this.$router.push(`/projects?type=${type}`)
      }
      else if(this.$i18n.locale == 'en'){
        this.$router.push(this.$i18n.locale + `/projects?type=${type}`)
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
    setMemberCarousel(carouselName){
      carouselName = "#" + carouselName;
      const prev = document.querySelector(carouselName + ' .prev');
      const next = document.querySelector(carouselName + ' .next');
      const track = document.querySelector(carouselName + ' .track');
      const slider = document.querySelector(carouselName + ' .slider-front');
      const maxValueText = document.querySelector(carouselName + ' .max-value')
      let carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
      let index = 0;

      
      const card = document.querySelectorAll(carouselName + " .card-container")
      let cardWidth = card[0].offsetWidth;
      
      
      let cardCount = 3
      if(window.innerWidth < 1100){
        cardCount = 2 
      }
      
      card.forEach(element => {
        element.style.width = `${carouselWidth / cardCount}px`
      });
      cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;

      window.addEventListener('resize', () => {
        cardCount = 3;
        if(window.innerWidth < 1100){
          cardCount = 2;
        }

        pages = Math.ceil(card.length / cardCount);
        maxValueText.innerHTML = `${pages<10? '0': ''}${pages}`;

        track.style.transform = `translateX(0px)`;
        slider.style.transform = `translateX(0px)`;
        index = 0;
        prev.classList.remove('show');
        next.classList.add('show');
        next.classList.remove('hide');

        let sliderWidth = 100/pages;
        slider.style.width = `${sliderWidth}%`;

        carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
        card.forEach(element => {
          element.style.width = `${carouselWidth / cardCount}px`
        });
        cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;
      })

      
      let pages = Math.ceil(card.length / cardCount)
      const sliderWidth = 100/pages
      slider.style.width = `${sliderWidth}%`
      let sliderPos = 0

      maxValueText.innerHTML = `${pages<10? '0': ''}${pages}`;

      next.addEventListener('click', () => {
        if (window.innerWidth>=1100) {
          index+=3;
        }
        else if(window.innerWidth < 1100){
          index += 2 
        }
        sliderPos += 100/(pages-1);
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        slider.style.transform = `translateX(calc(${sliderPos}% * ${pages-1}))`;
        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2)){
          next.classList.add("hide")
        }
      })

      prev.addEventListener('click', () => {
        
        if (window.innerWidth>=1100) {
          index-=3;
        }
        else if(window.innerWidth < 1100){
          index -= 2 
        }
        sliderPos -= 100/(pages-1);
        if(index == 0){
          prev.classList.remove('show');
        }
        next.classList.remove('hide');
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        slider.style.transform = `translateX(calc(${sliderPos}% * ${pages-1}))`;
        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2) ){
          next.classList.add("hide")
        }
      })
    },
    setCarousel(carouselName){
      carouselName = '#' + carouselName;
      const prev = document.querySelector(carouselName + ' .prev');
      const next = document.querySelector(carouselName + ' .next');
      const track = document.querySelector(carouselName + ' .track');
      let carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
      
      const card = document.querySelectorAll(carouselName + " .card-container")
      let cardWidth = card[0].offsetWidth;
      
      
      let cardCount = 3
      if(window.innerWidth < 1100 && window.innerWidth > 830 ){
        cardCount = 2 
      }
      else if(window.innerWidth < 830){
        cardCount = 1
      }
      
      card.forEach(element => {
        element.style.width = `${(carouselWidth - ((cardCount - 1) * 20)) / cardCount}px`
      });
      cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;

      window.addEventListener('resize', () => {
        cardCount = 3
        if(window.innerWidth < 1100 && window.innerWidth > 830 ){
          cardCount = 2 
        }
        else if(window.innerWidth < 830){
          cardCount = 1
        }
        carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
        card.forEach(element => {
          element.style.width = `${(carouselWidth - ((cardCount - 1) * 20)) / cardCount}px`
        });
        cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;
      })

      let index = 0;

      next.addEventListener('click', () => {
        index++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * (cardWidth + 20)}px)`;

        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2)){
          next.classList.add("hide")
        }
      })

      prev.addEventListener('click', () => {
        index--;
        if(index == 0){
          prev.classList.remove('show');
        }
        next.classList.remove('hide');
        track.style.transform = `translateX(-${index * (cardWidth +  20)}px)`;

        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2) ){
          next.classList.add("hide")
        }
      })
    },
    setPartnersCarousel(){
      let carouselName = '#partners';
      const prev = document.querySelector(carouselName + ' .prev');
      const next = document.querySelector(carouselName + ' .next');
      const track = document.querySelector(carouselName + ' .track');
      let carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
      
      const card = document.querySelectorAll(carouselName + " .card-container")
      let cardWidth = card[0].offsetWidth;
      
      
      let cardCount = 4
      if(window.innerWidth < 1100){
        cardCount = 2 
      }
      
      card.forEach(element => {
        element.style.width = `${carouselWidth / cardCount}px`
      });
      cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;

      window.addEventListener('resize', () => {
        cardCount = 4
        if(window.innerWidth < 1100){
          cardCount = 2 
        }
        carouselWidth = document.querySelector(carouselName + ' .carousel-inner').offsetWidth;
        card.forEach(element => {
          element.style.width = `${carouselWidth / cardCount}px`
        });
        cardWidth = document.querySelector(carouselName + ' .card-container').offsetWidth;
      })

      let index = 0;

      next.addEventListener('click', () => {
        index++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2)){
          next.classList.add("hide")
        }
      })

      prev.addEventListener('click', () => {
        index--;
        if(index == 0){
          prev.classList.remove('show');
        }
        next.classList.remove('hide');
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        if(track.offsetWidth - (index * cardWidth) <= Math.ceil(carouselWidth + cardWidth/2) ){
          next.classList.add("hide")
        }
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

        for (let key in this.$refs) {
          if (key == 'about') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 35 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about.classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 35 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about.classList.remove('active');
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
        
      }
      else {
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
        
        for (let key in this.$refs) {
          if (key == 'about') {
            if (window.pageYOffset >= this.$refs[key].offsetTop - 18 && window.pageYOffset <= this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about.classList.add('active');
            }
            else if (window.pageYOffset < this.$refs[key].offsetTop - 18 || window.pageYOffset > this.$refs[key].offsetTop + this.$refs[key].offsetHeight) {
              this.$parent.$parent.$refs.headerMain.$refs.about.classList.remove('active');
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
        
      }
    },
    async getInstagram() {
      await this.$axios.get(`${process.env.apiUrl}/api/instagram-data`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
        .then(data => {
          this.instagram = data.data.data
          //window.console.log(JSON.stringify(this.instagram, null, 2))
        })
    },
    async getProjects() {
      await this.$axios.get(`${process.env.apiUrl}/api/project-types?populate=previewPicture&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
        .then(({data}) => {
          this.projectTypes = data.data;
        });
    },
    async getYoutubeVideos() {
      await this.$axios.get(`${process.env.apiUrl}/api/youtube-data?populate=*&pagination[pageSize]=3&sort=id:asc`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      }).then(data => {
        this.youtubeVideos = data.data.data
      })
    },
    async getDocumentations() {
      await this.$axios.get(`${process.env.apiUrl}/api/dokumentacziya?populate[documents][populate]=*&pagination[pageSize]=*&populate[seo][populate]=*&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      }).then(data => {
        var documents = data.data.data.attributes.documents
        if(documents.length > 0) {
          for (let i = 0; i < 3; i++) {
            this.docs.push(documents[i])
          } 
        }
      })
    },
    redirectToAnotherPage(url) {
      // Change the URL to the page you want to redirect to
      window.open(url, '_blank')
    },
   
    
    GotoNewsPiece(id){
      if(this.$i18n.locale == 'uk'){
        this.$router.push(`news/${id}`)
      }
      else if(this.$i18n.locale == 'en'){
        this.$router.push(this.$i18n.locale + `/news/${id}`)
      }
    },
  },
  mounted() {
    this.siteUrl = process.env.apiUrl;
    this.getYoutubeVideos();
    this.getInstagram();
    //this.getNews();
    this.getDocumentations();
    
    
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
      console.log(this.$parent.$parent.$refs.headerMain.$refs)
      console.log(this.$parent.$parent.$refs.headerMain.$refs.about)
      console.log('after mounted');
      this.setMemberCarousel('team');
      this.setMemberCarousel('supervis');
      this.setMemberCarousel('supervis-children');
      this.setCarousel('projects');
      this.setPartnersCarousel();

 

    });
  },
  components: { YouTubeEmbed }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
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

            &:nth-child(3){
              display: none;
            }
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

              &:nth-child(3) {
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
                
                &:nth-child(3) {
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

              &:nth-child(3) {
                transform: translateY(100%);
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
                &:nth-child(3) {
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
    .about {
      display: flex;
      justify-content: space-between;

      &:nth-child(2){
        flex-direction: row-reverse;
      }

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
        margin-top: 70px;
        //justify-content: flex-end;
        position: relative;

        p,
        a {
          z-index: 1;
        }

        // &::after {
        //   content: '';
        //   position: absolute;
        //   top: 0;
        //   left: -25px;
        //   z-index: 0;
        //   width: 128px;
        //   height: 128px;
        //   display: inline-block;
        //   background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02My44NTM4IDYuNjUzNDFlLTA1QzI4LjU4ODMgNi45NjE3MWUtMDUgNS4yMjg2NmUtMDUgMjguNTg4NCA1LjUzNjk2ZS0wNSA2My44NTM4QzUuODQ1MjZlLTA1IDk5LjExOTIgMjguNTg4NCAxMjcuNzA4IDYzLjg1MzggMTI3LjcwOEM5OS4xMTkyIDEyNy43MDggMTI3LjcwOCA5OS4xMTkyIDEyNy43MDggNjMuODUzOEMxMjcuNzA4IDI4LjU4ODQgOTkuMTE5MiA2LjM0NTExZS0wNSA2My44NTM4IDYuNjUzNDFlLTA1WiIgZmlsbD0iI0VGREMwMCIvPgo8L3N2Zz4');
        //   background-repeat: no-repeat;
        //   background-position: center;
        //   background-size: contain;
        // }

        // &::before {
        //   content: '';
        //   position: absolute;
        //   right: 0;
        //   z-index: 0;
        //   width: 106px;
        //   height: 106px;
        //   display: inline-block;
        //   background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2IiBoZWlnaHQ9IjEwNiIgdmlld0JveD0iMCAwIDEwNiAxMDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDYgMEM0Ny40NjM0IC0yLjU1ODcyZS0wNiA1LjU1MzY4ZS0wNiA0Ny40ODY4IDIuOTk1OTllLTA2IDEwNkwxMDYgMTA2TDEwNiAwWiIgZmlsbD0iIzUyQTc4NSIvPgo8L3N2Zz4');
        //   background-repeat: no-repeat;
        //   background-position: center;
        //   background-size: contain;
        // }

        .btn-donate {
          margin-top: 75px;
          display: flex;
          justify-content: center;
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

    .teams {
      padding: 50px 0;
      .teams-container{


        h2 {
          font-size: var(--fz1);
          font-weight: 600;
          font-family: 'Montserrat Alternates', sans-serif;
          margin-bottom: 20px;
        }

        .carousel-container{
          display: flex;
          position: relative;
          margin: 32px auto 0px;
          min-height: 200px;
          .carousel-inner{
            overflow: hidden;
            .track{
              display: inline-flex;
              transition: transform .6s;

              .card-container{
                flex-shrink: 0;
                box-sizing: border-box;
                padding: 0 60px;

                .card{
                  position: relative;
                  height: 100%;
                  width: 100%;
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  
                  transition: .3s;
                  padding: 0;
                  
                  

                  .image-container{
                    cursor: pointer;
                    position: relative;
                    width:fit-content;
                    margin: 0 auto;

                    .circle-container{
                      position: absolute;
                      height: fit-content;
                      width: 100%;
                      z-index: 1;
                      bottom: 12px;

                      .circle{
                        width: 100%;
                        svg{
                          width: 100%;
                        }
                      }
                    }

                    .image-inner{
                      position: relative;
                      display: flex;
                      align-items: end;
                      justify-content: center;
                      overflow: hidden;
                      width: 100%;
                      z-index: 2;
                      img{
                        height: 100%;
                        width: 100%;
                        object-fit: contain;
                        object-position: center bottom;
                      }
                    }

                    .open-sign{
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      width: 60px;
                      height: 60px;
                      z-index: 3;
                      background-color: #EFDC00;
                      border-radius: 50%;
                      bottom: -10px;
                      right: 0;

                      span{
                        font-family: Montserrat Alternates;
                        font-size: 32.313px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: normal;
                      }

                    }
                  }

                  .bio-container{
                    margin-top: 38px;
                    display: flex;
                    flex-direction: column;

                    .name {
                      font-family: Montserrat Alternates;
                      font-size: 24pt;
                      font-style: normal;
                      font-weight: 600;
                      line-height: normal;
                    }

                    .position{
                      margin-top: 6px;
                      font-family: Montserrat;
                      font-size: 18px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 26px;
                      justify-self: flex-end;
                    }
                  }
                  
                }

              }
              
            }
          }
        
          .nav{
            display: flex;
            align-items: center;
            min-width: 20px;
          }

          .nav-left{
            margin-right: 40px;
          }

          .nav-right{
            margin-left: 40px;
          }

          .prev{
            display: none;
          }
          .show{
            display: block;
          }
          .hide{
            display: none;
          }
          .next{
            right: -40px;
          }
        }

        .page-slider{
          margin-top: 28px;
          width: 100%;

          .page-slider-inner{
            margin-left: 120px;
            width: fit-content;

            display: flex;
            flex-direction: row;

            .slider{
              width: 300px;
              margin: 0 10px;
              display: flex;
              align-items: center;

              .slider-back{
                position: relative;
                width: 100%;
                height: 2px;
                background-color: black;

                .slider-front{
                  transition: transform .6s;
                  position: absolute;
                  bottom: 0;
                  margin-bottom: -3px;
                  left:0;
                  width: 30%;
                  height: 9px;
                  background: #52A785;
                }
              }

            }

            .value{
              font-family: Montserrat;
              font-size: 21.714px;
              font-style: normal;
              font-weight: 500;
            }
          }
        }
      }
    }

    #supervis{
      background: #FFF9F6;

      .slider-front{
        background-color: #EFDC00;
      }
    }
    #supervis-children{

      background: #52A78510;

      .slider-front{
        background-color: #A62585;
      }
    }

    .all-teams {
      display: flex;
      justify-content: end;
      margin-top: 30px;

      .btn-all{
        max-width: 180px;
      }
    }
  }

  .projects {
    margin-top: 75px;
    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 20px;
    }

    p{
      width: 50%;
    }
    
    .carousel-container{
      display: flex;
      position: relative;
      margin: 32px auto 0px;
      min-height: 200px;
      .carousel-inner{
        overflow: hidden;
        .track{
          display: inline-flex;
          transition: transform .6s;
          gap: 20px;

          .card-container{
            flex-shrink: 0;
            height: 430px;
            box-sizing: border-box;

            .card{
              position: relative;

              width: 100%;
              height: 100%;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              justify-content: end;
              cursor: pointer;
              transition: .3s;
              
              img{
                position:absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: .3s;
                filter: brightness(50%);

                z-index: 0;

                &:hover{
                  filter: brightness(100%)
                }
              }

              span{
                color: var(--white, #FFF);  
                height: 80px;                
                font-family: Montserrat Alternates;
                font-size: 30px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                padding: 20px 40px;
                z-index: 1;

                
              }

              
            }

          }
          :nth-child(3n-2){
            span{  
              background-color: #52A785D9;
            }
          }

          :nth-child(3n-1){
            span{
              background-color: #A62585D9;
            }
          }

          :nth-child(3n){
            span{
              background-color: #EFDC00D9;
            } 
          }
        }
      }

      .nav{
        display: flex;
        align-items: center;
        min-width: 20px;
      }

      .nav-left{
        margin-right: 20px;
      }

      .nav-right{
        margin-left: 20px;
      }

      .prev{
        display: none;
      }
      .show{
        display: block;
      }
      .hide{
        display: none;
      }
      .next{
        right: -40px;
      }
      
    }

    .all-projects {
      display: flex;
      justify-content: end;
      margin-top: 30px;
    }
  }

  .news-all{
      h2 {
        font-size: var(--fz1);
        font-weight: 600;
        font-family: 'Montserrat Alternates', sans-serif;
        margin-bottom: 60px;
      }
      .all-news {
        display: flex;
        justify-content: end;
        margin-top: 30px;
      }
      .news-grid{ 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 35px;

        

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

      .all-news{
        margin-top: 54px;
      }
    }

  .partners {

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
    }

    .carousel-container{
      display: flex;
      position: relative;
      margin: 32px auto 0px;
      .carousel-inner{
        overflow: hidden;
        flex:1;
        .track{
          display: inline-flex;
          transition: transform .6s;

          .card-container{
            flex-shrink: 0;
            box-sizing: border-box;
            padding: 0 50px;

            .card{
              position: relative;

              width: 100%;
              height: 100%;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              justify-content: center;
              cursor: pointer;
              
              img{
                width: 100%;
                object-fit: contain;
                z-index: 0;

              }      
            }
          }
        }
      }

      .nav{
        display: flex;
        align-items: center;
        min-width: 20px;
      }

      .nav-left{
        margin-right: 20px;
      }

      .nav-right{
        margin-left: 20px;
      }

      .prev{
        display: none;
      }
      .show{
        display: block;
      }
      .hide{
        display: none;
      }
      .next{
        right: -40px;
      }
      
    }
  }

  .youtube {

    //TODO

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
    }

    .videos {
      display: flex;

      .left {
        flex: 3;

        #static-video {
          height: 444px;

          iframe {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right {
        flex: 2;
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
            object-fit: cover;
            margin-right: 20px;
            padding: 0;
          }

          p {
            font-family: 'Montserrat Alternates', sans-serif;
          }

          .desc {
            display: flex;
            flex-direction: column;

            .name {
              display: block;
              font-weight: 600;
              line-height: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* number of lines to show */
                      line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .added-ago {
              font-size: 14px;
              margin-top: 5px;
              color: #BDBDBD;
              line-height: normal;
            }

            .duration {
              font-size: 14px;
              margin-top: auto;
              color: #BDBDBD;
              line-height: normal;
              padding: 0;
            }
          }
        }
      }
    }


    .more-text{
      margin-top: 40px;
      width: 440px;

      color: var(--text-color, #202221);
      font-family: Montserrat Alternates;
      font-size: 22.411px;
      font-style: normal;
      font-weight: 600;
      line-height: 25.454px;

      a{
        color: #A62585;
        font-family: Montserrat Alternates;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
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
      grid-template-rows: repeat(2, 1fr);
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
      .div{
        grid-row: 2;
        grid-column: 3;
        display: flex;
        justify-content: end;
      }
      .btn-all {

        height: calc(50px - 22px);
        margin-top: 5px;
      }
    }
  }

  .instagram {
    

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: 'Montserrat Alternates', sans-serif;
      margin-bottom: 60px;
    }
    .panels{

      display: grid;
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      //grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 50px;

      .panel {
        aspect-ratio: 1/1;
        border-radius: 6px;
        position: relative;
        height: 100%;



        .logo {
          position: absolute;
          left: 0;
          top: 0;
          padding: 5px;
          width: 15%;
          height: 15%;
          background: rgb(54, 11, 83);
          background: linear-gradient(320deg, rgba(54, 11, 83, 1) 5%, rgba(253, 29, 29, 1) 58%, rgba(252, 176, 69, 1) 100%);
          border-radius: 6px 0 6px 0;


          pointer-events: none;
        }

        img {
          display: block;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          border-radius: 6px;

          box-shadow: none;
          transition: .3s;

          &:hover {
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.717);
          }
        }
      }

      .quote {
        border: 3px solid#e4e4e4;
        position: relative;
        place-items: center;

        svg {
          z-index: -1;
          position: absolute;
          border-radius: 4px;
          display: block;
          height: 100%;
          width: 100%
        }

        .text_holder {
          height: 100%;
          padding: 0 15%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            color: var(--text-color, #202221);
            font-family: Montserrat Alternates;
            font-size: var(--fz1);
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            white-space: pre-line;
          }
        }
      }

      #link {
        border: none;
        background-color: #52A785;
        box-shadow: none;
        transition: .3s;

        &:hover {
          cursor: pointer;
          box-shadow: 0px 0px 30px 0px rgb(94, 194, 156);

        }

        p {
          color: var(--white, #FFF);
          font-size: var(--fz1);
        }

        .subtext {
          margin-top: 10px;
          text-align: center;
          font-family: Montserrat Alternates;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          /* 144.444% */
        }
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  // #homePage {
  //   .projects {
  //     h2 {
  //       margin: 0 auto;
  //       max-width: 1300px;
  //       margin-bottom: 60px;
  //     }
  //   }
  // }
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
      
    }

    .youtube {

      //TODO

    }
  }
}

@media screen and (max-width: 1210px) {
  #homePage {
    .main-gallery {
      margin-bottom: 15px;
      max-height: 465px;
    }

    .about {
      margin-top: 40px;

      .about {
        flex-direction: column-reverse;
        &:nth-child(2) {
          flex-direction: column-reverse;
        }

        .right {
          max-width: unset;
          justify-content: flex-start;
          padding-top: 0;
          margin-top: 0;

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
          height: fit-content;
          min-height: unset;
          margin-top: 14px;
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

      .carousel-container{
        .carousel-inner{
          .track{
            .card-container{
              .card{
                img{
                  filter: brightness(100%);
                }
                
              }
            }
          } 
        }
      }
    }

    .news-all{

      h2 {
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
        margin-bottom: 20px;
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

    .partners {
      margin-top: 40px;

      h2 {
        margin-bottom: 20px;
      }

      .carousel-container{
        .carousel-inner{
          .track{
            .card-container{
              padding: 0 25px;
            }
          }
        }
      }

      .all-partners {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .youtube {

      h2 {
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
        margin-bottom: 20px;
      }

      .videos{
        .left{
          #static-video{
            height: 380px;
          }
        }
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

    .instagram{
      h2 {
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
        margin-bottom: 20px;
      }
    }
  }
}

@media screen and (max-width: 830px) {
  #homePage {
    .about {
      .teams {
        .teams-container{
          .carousel-container{
            .carousel-inner{
              .track{
                .card-container{
                  padding: 0 10px;
                  .card{
                    .image-container{
                      .image-inner{
                        height: 250px;
                      }
                    }
                  }
                }
              }
            }
          }

          .page-slider{
            .page-slider-inner{
              margin-left: 10px;
            }
          }
        }


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

        a{
          &:nth-child(n+3){
            display: none;
          }
        }

        .div{
          grid-column: 2;
          justify-content: end;
        }

      }
    }

    .projects{
      
      p{
        width: 100%;
      }

      .carousel-container{
        .carousel-inner{
          width: 100%;
        }
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

            img {
              flex: 1;
            }

            .desc {
              flex: 1;
            }
          }
        }
      }
    }

    .news-all{
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
      .all-news{
        margin-top: 24px;

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

          .btn-gal{
            img{
              &:nth-child(3){
                display: block;
              }

              &:nth-child(2){
                display: none;
              }
            }
          }
          &:nth-child(n + 3) {
            display: none;
          }

          &:nth-child(1) {
            .btn-gal {
              img {
                object-position: right top;

                // &:nth-child(2) {
                //   object-position: center;
                // }
              }
            }
          }

          &:nth-child(2) {
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
        grid-column-gap: 20px;
        .div {
          display: flex;
          align-items: center;
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

    .news-all{
      .news-grid{
        grid-template-rows: 150px 100px 100px;
        grid-gap: 8px;

        .box{
          .desc{
            .title-remain{
              line-height: 1;
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

      .more-text{
        width: 100%;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px
      }
    }

    .about {
      .teams {
        margin-top: 30px;
        grid-row-gap: 30px;
        .teams-container{
          .carousel-container{
            .carousel-inner{
              .track{
                .card-container{
                  .card{
                    .image-container{
                      .image-inner{
                        height: fit-content;
                      }

                      .open-sign{
                        height: 38px;
                        width: 38px;

                        span{
                          font-size: 20px;
                        }
                      }
                    }

                    .bio-container{
                      .name{
                        font-size: 15pt;
                      }

                      .position{
                        font-size: 10pt;
                      }
                    }
                  }
                }
              }
            }

            .nav-right{
              margin-left: 10px;
            }

            .nav-left{
              margin-right: 10px;
            }
          }
        }
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

    .instagram {

      .panels{
        grid-column-gap: 15px;
        grid-row-gap: 15px;

        .quote {
          border-width: 1px;

          .text_holder {

            p {
              font-size: 14px;
              line-height: 15px;
            }

          }

        }

        #link {
          p {
            font-size: 10px;
          }

          .subtext {
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 15px;
            /* 150% */
          }

        }

      }
    }
  }
}

@media screen and (max-width: 500px) {

  #homePage{
    .about{
      .teams{
        .teams-container{
          .page-slider{
            .page-slider-inner{
              .slider{
                width: 190px;
              }
            }
          }
        }
      }
    }

    .projects {
      .carousel-container{
        .carousel-inner{
          .track{
            .card-container{
              height: 300px;

              .card{
                span{
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
    }

    .news-all{
      .news-grid{

        .box{
          .desc{
            
            .title-main{
             
            }
            .title-remain{
              
              line-height: 1;
            }
            .meta{
              margin-top: 10px;
            }
          }
        }
      }
    }

    .partners{
      .carousel-container{

        .carousel-inner{
          .track{
            .card-container{
              padding: 0 8px;
            }
          }
        }

        .nav{
          button{
            svg{
              width: 20px;
              height: 30px;
            }
          }
        }

        .nav-right{
          margin-left: 0;
        }

        .nav-left{
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 450px){
  #homePage{
    .news-all{
      .news-grid{
        .box{
          .desc{
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

    .instagram {
      grid-template-columns: repeat(2, minmax(100px, 1fr));

      

      div:nth-child(4) {
        grid-area: 2;
      }
    }
  }
}</style>