<template>
  <div id="news" class="container-projects">
    <div class="top">
      <h2>Новини</h2>
      <div class="search">
        <input
          type="text"
          @keypress="InputSearch($event)"
          @keyup="InputSearch($event)"
          v-model="search"
        />
        <button class="btn-search" @click.prevent="searchNewsItem()">
          <span class="ico-search"></span>
        </button>
      </div>
    </div>

    <div class="all-news">
      <div class="news-item">
        <img
          src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY="
        />
        <div class="desc">
          <p class="title-word">Конкурс</p>
          <p class="title-remain">на кращий дитячий малюнок</p>
          <p class="text">
            Оголошуємо конкурс для маленьких художників! Надсилайте роботи дітей та ...
          </p>

          <div class="meta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
            >
              <path
                d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
                fill="#828282"
              />
            </svg>
            <p class="date">16 липня 2021</p>
          </div>
        </div>
      </div>
      <div class="news-item">
        <img
          src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY="
        />
        <div class="desc">
          <p class="title-word">Конкурс</p>
          <p class="title-remain">на кращий дитячий малюнок</p>
          <p class="text">
            Оголошуємо конкурс для маленьких художників! Надсилайте роботи дітей та
            fadfadfadfasdfasdfasdfa asdfasdfas sdfasdfa...
          </p>

          <div class="meta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
            >
              <path
                d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
                fill="#828282"
              />
            </svg>
            <p class="date">16 липня 2021</p>
          </div>
        </div>
      </div>
      <div class="news-item">
        <img
          src="https://media.istockphoto.com/id/517188688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6.jpg?s=2048x2048&w=is&k=20&c=n8Qrv0bVsEiOm4_NB9JZ5HtnjP1ThqmuGDG640Em8ZY="
        />
        <div class="desc">
          <p class="title-word">Конкурс</p>
          <p class="title-remain">на кращий дитячий малюнок</p>
          <p class="text">
            Оголошуємо конкурс для маленьких художників! Надсилайте роботи дітей та
            fadfadfadfasdfasdfasdfa asdfasdfas sdfasdfa...
          </p>

          <div class="meta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
            >
              <path
                d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
                fill="#828282"
              />
            </svg>
            <p class="date">16 липня 2021</p>
          </div>
        </div>
      </div>
    </div>

    <div class="paginations container-projects">
      <button class="prew-page" @click.prevent="GotoPage(paginations.currentPage - 1)">
        <span class="prew-arrow2"></span>
      </button>
      <div class="all-page">
        <template v-for="p in paginations.allPage">
          <button
            class="btn-to"
            :key="p"
            @click.prevent="GotoPage(p)"
            :class="{ active: p == paginations.currentPage }"
          >
            <span>
              {{ p }}
            </span>
          </button>
        </template>
      </div>
      <button class="next-page" @click.prevent="GotoPage(paginations.currentPage + 1)">
        <span class="next-arrow2"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
      ifSearch: false,
      searchNews: [],
      siteUrl: "",
      paginations: {
        inPage: 5,
        allPage: 0,
        currentPage: 1,
        nextPage: 0,
        prewPage: 0,
      },
    };
  },
  async fetch({ store }) {
    await Promise.all([store.dispatch("default/fetch")]);
  },
  computed: {
    ...mapGetters({}),
  },
  head() {
    //TODO seo
  },
  methods: {
    InputSearch(e) {
      if (e.code == "Enter") {
        if (this.search !== "") {
          this.searchNewsItem();
        } else {
        }
      }
      if (this.search == "") {
        this.ifSearch = false;
      }
    },
    searchNewsItem() {
      this.searchNews = [];
      if (this.search !== "") {
        this.docs.forEach((d) => {
          if (JSON.stringify(d).toUpperCase().indexOf(this.search.toUpperCase()) !== -1) {
            this.searchNews.push(d);
          }
        });
        this.ifSearch = true;
      }
    },
  },
  mounted() {
    this.siteUrl = process.env.apiUrl;
  },
};
</script>

<style lang="scss">
#news {
  border-bottom: 1px solid #bdbdbd;
  margin-top: 21px;

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    margin-right: 35px;

    h2 {
      font-size: var(--fz1);
      font-weight: 600;
      font-family: "Montserrat Alternates", sans-serif;
    }

    .search {
      display: flex;

      input {
        margin-right: 50px;
        width: 640px;
        border: 1px solid #bdbdbd;
        border-radius: 6px;
        padding: 0px 15px;
      }
    }
  }

  .all-news {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-column-gap: 35px;
    grid-row-gap: 50px;

    .news-item {
      border-radius: 6px;
      border: 1px solid var(--Gray-4, #bdbdbd);
      display: flex;
      flex-direction: column;
      transition: .3s;

      img {
        width: 100%;
        height: 290px;
        border-radius: 6px;
        object-fit: cover;
      }

      &:hover {
        border: 1px solid var(--dark-pink, #a62585);
        cursor: pointer;
        transition: .3s;
      }

      .desc {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        margin: 15px 30px;

        p {
          color: var(--text-color, #202221);
          font-family: Montserrat Alternates;
          font-style: normal;
          font-weight: 400;
        }

        .title-word {
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
        }

        .title-remain {
          font-size: 18px;
          line-height: 26px;
        }

        .text {
          font-size: 14px;
          line-height: 150%;

          margin-top: 12px;
          margin-bottom: 18px;
        }

        .meta {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: auto;

          svg {
            fill: var(--Gray-3, #828282);
            margin-right: 12px;
          }

          .date {
            color: var(--Gray-3, #828282);
            font-size: 14px;
            line-height: 26px;
          }
        }
      }
    }
  }

  .paginations {
    margin-top: 50px;
    display: flex;
    position: relative;
    width: calc(100vw - 42px);
    justify-content: end;
    margin-right: 0;

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
        transition: 0.3s;

        &:hover {
          span {
            font-weight: 600;
          }
        }

        &:nth-last-child(-n + 1) {
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
            content: "";
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

@media screen and (max-width: 1760px) {
  #news {
    .top {
      .search {
        input {
          width: 320px;
        }
      }
    }
  }
}

@media screen and (max-width: 1210px) {
  #news {
    .all-news {
      .news-item {
        img {
          height: 200px;
        }
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  #news {
    margin-top: 20px;

    .top {
      align-items: center;
      margin-bottom: 20px;
      margin-right: 0;

      .search {
        width: calc(100% - 300px);

        input {
          width: calc(100% - 20px - 32px);
          margin-right: 20px;
        }
      }
    }

    .paginations {
      margin-top: 20px;
    }
  }
}

@media screen and (max-width: 860px) {
  #news {
    .all-news {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
  }
}

@media screen and (max-width: 600px) {
  #news {
    .top {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .search {
        width: 100%;
        margin-top: 10px;

        input {
          width: calc(100% - 20px - 32px);
          margin-right: 20px;
        }
      }
    }

    .all-news {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    }

    .paginations {
      justify-content: start;
    }
  }
}
</style>
