<template>
  <div id="formSend">
    <form action="" @submit.prevent="callme()">
      <div class="top">
        <div class="input">
          <input type="text" v-model="name">
          <label for="text">
            Ваше ім’я
          </label>
        </div>
        <div class="input">
          <input type="text" v-mask="'+38 (0##) ###-##-##'" v-model="phone">
          <label for="text">
            Номер телефону
          </label>
        </div>
      </div>
      <div class="bottom">
        <div class="input">
          <input type="text" v-model="text">
          <label for="text">
            Ваше повідомлення
          </label>
        </div>
      </div>
      <button class="btn-send" type="submit">
        надіслати
        <span class="ico-send"></span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      text: ''
    }
  },
  methods: {
    callme() {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss">
  #formSend {
    form {
      display: flex;
      flex-direction: column;
      max-width: 550px;
      .input {
        display: flex;
        flex-direction: column-reverse;
        label {
          margin-bottom: 15px;
        }
      }
      .top {
        display: flex;
        .input {
          margin-right: 55px;
          &:nth-last-child(-n+1) {
            margin-right: 0;
          }
        }
      }
      .bottom {
        display: flex;
        margin-bottom: 50px;
        .input {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    #formSend {
      form {
        .input {
          label {
            margin-bottom: 7px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    #formSend {
      form {
        width: 370px;
        .top {
          flex-direction: column;
          .input {
            margin: 0 0 30px 0;
            width: 100%;
          }
        }
        .bottom {
          margin: 0 0 30px 0;
        }
      }
    }
  }

  @media screen and (max-width: 665px) {
    #formSend {
      form {
        width: 100%;
        max-width: 370px;
      }
    }
  }
</style>