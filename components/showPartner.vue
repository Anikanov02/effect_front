<template>
  <transition name="showPar">
    <div id="showPartner" v-if="on" @click.prevent="close()">
      <div class="partner">
        <button class="btn-close" @click.prevent="close()">
          <span class="close"></span>
        </button>
        <img :src="parner.img ? pageUrl + parner.img.data.attributes.url : null" alt="">
        <p class="title">
          {{parner.name}}
        </p>
        <p class="label">
          {{parner.label}}
        </p>
        <p class="desc">
          {{parner.desc}}
        </p>
        <a class="btn-link" :href="parner.link" v-if="parner.link !== null && parner.link !== ''" target="_blank" rel="noopener noreferrer">
          {{ this.$t('home.partners.goto') }}
          <span class="arrow-right"></span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      on: false,
      parner: {},
      pageUrl: ''
    }
  },
  methods: {
    close() {
      this.on = false
      document.documentElement.style.overflow = ''
    }
  }
}
</script>

<style lang="scss">
  @keyframes showPar {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .showPar-enter-active {
    animation: showPar .5s;
  }
  .showPar-leave-active {
    animation: showPar .5s reverse;
  }

  #showPartner {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background-color: rgba($color: #000000, $alpha: .5);
    backdrop-filter: blur(5px);
    .partner {
      width: 605px;
      padding: 40px 120px 75px 120px;
      background-color: var(--white);
      position: relative;
      img {
        width: 195px;
        height: auto;
        object-fit: cover;
        margin-bottom: 30px;
      }
      .title {
        font-size: var(--fz1);
        font-weight: 600;
        font-family: 'Montserrat Alternates', sans-serif;
      }
      .label {
        font-weight: 600;
        margin-bottom: 30px;
      }
      .desc {
        margin-bottom: 50px;
      }
      .btn-link {
        display: flex;
        align-items: center;
        span {
          margin-left: 10px;
        }
        font-weight: 600;
        transition: .3s;
        &:hover {
          color: var(--pink);
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    #showPartner {
      overflow: auto;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;
      background-color: var(--white);
      backdrop-filter: blur(0);
      .partner {
        width: 100%;
        padding: 15px 20px 30px 20px;
        height: auto;
        margin-bottom: 50px;
        img {
          margin-bottom: 20px;
          width: 120px;
          margin-top: 20px;
        }
        .label {
          margin-bottom: 15px;
        }
        .desc {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>