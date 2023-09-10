<template>
  <transition name="showLoad" v-if="true">
    <div id="loaderGO">
      <div class="gooey">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      load: true
    }
  }
}
</script>

<style lang="scss">
  @keyframes showLoad {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .showLoad-enter-active {
    animation: showLoad .5s;
  }
  .showLoad-leave-active {
    animation: showLoad .5s reverse;
  }

  #loaderGO {
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    .gooey {
      width: 102px;
      height: 40px;
      background: white;
      filter: contrast(20);
    }
    .dot {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 12px;
      left: 15px;
      filter: blur(4px);
      background: var(--pink);
      border-radius: 50%;
      transform: translateX(0);
      animation: dot 2.8s infinite;
    }
    .dots {
      transform: translateX(0);
      margin-top: 12px;
      margin-left: 31px;
      animation: dots 2.8s infinite;
      span {
        display: block;
        float: left;
        width: 16px;
        height: 16px;
        margin-left: 6px;
        filter: blur(4px);
        background: var(--pink);
        border-radius: 50%;
      }
    }

    @keyframes dot {
      50% {
        transform: translateX(56px)
      }
    }
    @keyframes dots {
      50% {
        transform: translateX(-31px)
      }
    }
  }
</style>