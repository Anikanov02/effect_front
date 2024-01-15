<template>
  <transition name="showMem">
    <div id="showMember" v-if="on" @click.prevent="close()">
      <div class="partner">
        <button class="btn-close" @click.prevent="close()">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="6" fill="#C6569A"/>
            <rect x="17.291" y="14.0259" width="29.25" height="4.61842" rx="2.30921" transform="rotate(45 17.291 14.0259)" fill="white"/>
            <rect x="14.0254" y="34.709" width="29.25" height="4.61842" rx="2.30921" transform="rotate(-45 14.0254 34.709)" fill="white"/>
          </svg>
        </button>
        <img :src="member.image.data ? pageUrl + member.image.data.attributes.url : null" alt="">
        <p class="title">
          {{member.name}}
        </p>
        <p class="label">
          {{member.position}}
        </p>
        <p class="desc">
          {{member.desc}}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      on: false,
      member: {},
      pageUrl: ''
    }
  },
  methods: {
    close() {
      this.on = false
      document.documentElement.style.overflow = ''
    },
    goTo(link){
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="scss">
  @keyframes showMem {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .showMem-enter-active {
    animation: showMem .5s;
  }
  .showMem-leave-active {
    animation: showMem .5s reverse;
  }

  #showMember {
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
      display: flex;
      flex-direction: column;
      
      .btn-close{
        margin-top: 34px;
        margin-right: 46px;
      }

      img {
        width: 350px;
        height: auto;
        object-fit: cover;
        margin-bottom: 30px;
        align-self: center;
      }
      .title {
        font-size: var(--fz1);
        font-weight: 600;
        font-family: 'Montserrat Alternates', sans-serif;
        align-self: center;
      }
      .label {
        font-weight: 600;
        margin-bottom: 30px;
        align-self: center;
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
    #showMember {
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
        
        .btn-close{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
</style>