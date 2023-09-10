<template>
  <footer id="footer">
    <div class="container-footer">
      <div class="top">
        <div class="left">
          <div class="desc" id="contacts" ref="contacts">
            <p class="title">
              {{title}}
            </p>
            <p class="label">
              {{label}}
            </p>
          </div>
          <div class="phones">
            <a v-for="phone in phones" :key="phone.id" :href="`tel:${phone.phone}`" class="btn-phone">
              <svg class="ico-phones" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.12744 5.14032C4.65746 5.60462 4.5453 6.32746 4.8604 6.90256C5.56004 8.17412 6.45729 9.37182 7.5468 10.4482C8.58825 11.477 9.73651 12.3265 10.9595 13.0071C11.547 13.3342 12.2841 13.2234 12.7594 12.7486L13.5178 11.9994C14.1106 11.4137 15.0666 11.4137 15.6594 11.9994L17.5554 13.8724C18.1482 14.4581 18.1482 15.4025 17.5554 15.9881L16.8504 16.6846C15.7983 17.724 14.2975 18.1883 12.8288 17.9298C9.73651 17.3916 7.13557 15.5502 4.75893 13.2023C2.21673 10.6909 0.432916 7.90504 0.0323596 4.63381C-0.133204 3.262 0.342124 1.89019 1.33016 0.914098L1.81083 0.439242C2.40366 -0.146414 3.35965 -0.146414 3.95247 0.439242L5.8431 2.30701C6.43593 2.89267 6.43593 3.8371 5.8431 4.42276L5.12744 5.14032Z"/>
              </svg>
              <span>
                {{phone.phone}}
              </span>
            </a>
          </div>
          <div class="address">
            <a :href="`mailto:${email}`" class="btn-address">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3.2256V8.925C14 9.5061 13.7777 10.0652 13.3786 10.4876C12.9795 10.9099 12.434 11.1636 11.8538 11.1965L11.725 11.2H2.275C1.6939 11.2 1.13482 10.9777 0.712438 10.5786C0.290057 10.1795 0.0363991 9.63396 0.00350008 9.0538L0 8.925V3.2256L6.7564 6.7648C6.83156 6.80417 6.91515 6.82474 7 6.82474C7.08485 6.82474 7.16844 6.80417 7.2436 6.7648L14 3.2256ZM2.275 1.65236e-08H11.725C12.2889 -6.79103e-05 12.8327 0.209297 13.251 0.587487C13.6693 0.965677 13.9322 1.48574 13.9888 2.0468L7 5.7078L0.0112 2.0468C0.0654664 1.50802 0.310135 1.00626 0.701225 0.631724C1.09231 0.257186 1.60418 0.0344309 2.1448 0.0035001L2.275 1.65236e-08H11.725H2.275Z" fill="#EFDC00"/>
              </svg>
              <span>
                {{email}}
              </span>
            </a>
            <a :href="google_link" target="_blank" rel="noopener noreferrer" class="btn-address">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17C7 17 0 11.9 0 6.8C0 2.55 3.5 0 7 0C10.5 0 14 2.55 14 6.8C14 11.9 7 17 7 17ZM7 9.35C7.69619 9.35 8.36387 9.08134 8.85616 8.60312C9.34844 8.1249 9.625 7.4763 9.625 6.8C9.625 6.1237 9.34844 5.4751 8.85616 4.99688C8.36387 4.51866 7.69619 4.25 7 4.25C6.30381 4.25 5.63613 4.51866 5.14384 4.99688C4.65156 5.4751 4.375 6.1237 4.375 6.8C4.375 7.4763 4.65156 8.1249 5.14384 8.60312C5.63613 9.08134 6.30381 9.35 7 9.35Z" fill="#C6569A"/>
              </svg>
              <span>
                {{address}}
              </span>
            </a>
          </div>
        </div>
        <div class="right">
          <FormSendMail />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
        </div>
        <div class="right">
          <div class="socs">
            <template v-for="s in socs">
              <a class="btn-socs" :class="s.name" :href="s.link" target="_blank" rel="noopener noreferrer" :key="s.id">
                <span :class="`ico-${s.name}`"></span>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {

    }
  },
  async fetch({store}) {
    await Promise.all([
      store.dispatch('default/fetch'),
    ])
  },
  computed: {
    ...mapGetters({
      title: 'default/title',
      label: 'default/label',
      address: 'default/address',
      google_link: 'default/google_link',
      email: 'default/email',
      phones: 'default/phones',
      socs: 'default/socs'
    })
  },
}
</script>

<style lang="scss">
  #footer {
    margin-top: 150px;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--footer);
    .container-footer {
      max-width: calc(1920px - 600px);
      width: 100%;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .left {
        .title {
          font-size: var(--fz1);
          font-weight: 600;
          font-family: 'Montserrat Alternates', sans-serif;
          margin-bottom: 10px;
        }
        .label {
          font-size: var(--fz3);
          font-weight: 400;
          font-family: 'Montserrat Alternates', sans-serif;
        }
        .phones {
          margin-top: 50px;
          .btn-phone {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            &:nth-last-child(-n+1) {
              margin-bottom: 0;
            }
            span {
              font-weight: 400;
              font-family: 'Montserrat Alternates', sans-serif;
            }
            .ico-phones {
              margin-right: 10px;
            }
            &:nth-child(odd) {
              .ico-phones {
                path {
                  fill: var(--pink);
                }
              }
            }
            .ico-phones {
              path {
                fill: var(--green);
              }
            }
          }
        }
        .address {
          display: flex;
          flex-direction: column;
          margin-top: 35px;
          .btn-address {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            svg {
              margin-right: 10px;
            }
            span {
              font-weight: 400;
              font-family: 'Montserrat Alternates', sans-serif;
            }
            &:nth-last-child(-n+1) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 65px;
      .left {
        .created-by {
          &:hover {
            color: var(--black);
            span {
              color: var(--black);
            }
          }
          transition: .3s;
          font-weight: 400;
          font-family: 'Montserrat Alternates', sans-serif;
          color: var(--grey);
          span {
            transition: .3s;
            font-weight: 600;
            font-family: 'Montserrat Alternates', sans-serif;
            color: var(--grey);
          }
        }
      }
      .right {
        .socs {
          display: flex;
          align-items: center;
          .btn-socs {
            margin-right: 25px;
            &:nth-last-child(-n+1) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    #footer {
      .container-footer {
        max-width: 1100px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    #footer {
      padding: 20px 0 40px 0;
      margin-top: 40px;
      .container-footer {
        max-width: unset;
        width: calc(100vw - 40px);
      }
    }
  }

  @media screen and (max-width: 830px) {
    #footer {
      .top {
        align-items: flex-start;
      }
    }
  }

  @media screen and (max-width: 665px) {
    #footer {
      .container-footer {
        position: relative;
      }
      .top {
        flex-direction: column;
        .left {
          margin-bottom: 30px;
          .title {
            margin-bottom: 0px;
          }
          .phones {
            margin-top: 20px;
            .btn-phone {
              margin-bottom: 17px;
              &:nth-last-child(-n+1) {
                margin-bottom: 0;
              }
            }
            svg {
              width: 18px;
              height: 18px;
            }
          }
          .address{
            margin-top: 17px;
            .btn-address {
              margin-bottom: 17px;
              &:nth-last-child(-n+1) {
                margin-bottom: 0;
              }
            }
            svg {
              width: 18px;
              height: 18px;
            }
          }
        }
        .right {
          width: 100%;
        }
      }
      .bottom {
        margin-top: 0;
        .left {
          position: absolute;
          right: 0;
          bottom: 11px;
        }
        .right {
          position: absolute;
          top: 0;
          right: 0;
          .socs {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 10px;
            grid-column-gap: 15px;
            .btn-socs {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 345px) {
    #footer {
      .bottom {
        margin-top: 20px;
        .left {
          position: relative;
          bottom: unset;
        }
      }
    }
  }
</style>
