<!-- components/ErrorComponent.vue -->

<template>
  <div class="error container-main">
    <div class="error-code">
      <span v-for="(digit, index) in parsedStatusCode" :key="index" class="code" :style="{ color: getColor(index) }">{{ digit }}</span>
    </div>
    <div class="error-text">
      <span>{{ this.$t('error.text') }}</span>
    </div>
    <div class="colors">
      <div class="element">
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="48" viewBox="0 0 57 48" fill="none">
          <path d="M52.3738 36.3685C60.5052 25.3739 56.43 10.9531 43.2717 4.15881C30.1133 -2.63547 12.8545 0.769615 4.72315 11.7643C-3.40822 22.7589 0.666972 37.1797 13.8253 43.974C26.9837 50.7683 44.2425 47.3632 52.3738 36.3685Z" fill="#52A785"/>
        </svg>
      </div>
      <div class="element">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 70 60" fill="none">
          <path d="M0 59.15C38.6657 59.138 70 33.0332 70 0.856445H0V59.15Z" fill="#A62585"/>
        </svg>
      </div>
      <div class="element">
        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="60" viewBox="0 0 69 60" fill="none">
          <path d="M0 0.818848C0 33.0076 30.9071 59.1124 68.9859 59.1124H69V0.818848H0Z" fill="#C6569A"/>
        </svg>
      </div>
      <div class="element">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 56 47" fill="none">
          <path d="M0 46.9419V46.9656H56V0.330811C25.0823 0.330811 0 21.2131 0 46.9419Z" fill="#EFDC00"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    parsedStatusCode() {
      return this.error ? this.error.statusCode.toString().split('') : [];
    }
  },
  methods: {
    getColor(index) {
      const colors = ['#A62585', '#52A785', '#EFDC00'];

      // Use modulo to cycle through the colors if there are more than 8 digits
      return colors[index % colors.length];
    }
  }
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;


  .error-code {
    width: fit-content;
    margin: 100px auto;

    .code {
      font-family: Montserrat Alternates;
      font-size: 300px; /* Adjust the font size as needed */
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 15px;
      margin: 0; /* Remove default margin */
    }
  }

  .error-text{
    
    color: var(--text-color, #202221);
    text-align: center;
    font-family: Montserrat Alternates;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
    margin-bottom: 80px;
  }
  .colors{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;

    .element {
      position: absolute;
      width: fit-content;
      top: 0;
      left: 0;

      &:nth-child(1){
        left: unset;
        right: 20px;
      }

      &:nth-child(2){
        top: unset;
        bottom: 0;
      }

      &:nth-child(3){
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
      }
    }
  }
}

@media screen and (max-width: 1210px) {
  .error{
    .error-code{
      margin: 50px auto;
      .code{
        font-size: 80px;
      }
    }
    .error-text{
      font-size: 25px;
      line-height: 40px;
    }
  }
}
</style>
