export const state = () => ({
  data: null,
})

export const mutations = {
  setData(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetch({getters, commit}) {
    if(!getters.data) {
      await this.$axios.get(`${process.env.apiUrl}/api/news?populate[previewPicture]=*&pagination[pageSize]=3&sort=date:desc&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
      .then(data => {
        let news = data.data.data
        news.forEach((element) => {
          var main_title = element.attributes.title;
          if (main_title !== null) {
            var words = main_title.split(" ");
            element.attributes.main_title = words.shift();
            element.attributes.title_remain = words.join(' ');
          }          
          this.$axios.get(`${process.env.apiUrl}/api/news/${element.id}?populate[paragraph]=*&locale=${this.$i18n.locale}`, {
            headers: {
              Authorization: `Bearer ${process.env.tokken}`
            }
          })
          .then(data => {
            element.attributes.text = data.data.data.attributes.paragraph[0].text;
          })
          
        })
        commit('setData', data)
      })
    }
  }
}

export const getters = {
  news: state => state.data ? state.data.data.data : []
}
