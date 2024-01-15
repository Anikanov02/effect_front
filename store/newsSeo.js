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
        await this.$axios
        .get(`${process.env.apiUrl}/api/novini-seo?populate[seo][populate][img]=*&locale=${this.$i18n.locale}`, {
          headers: {
            Authorization: `Bearer ${process.env.tokken}`
          }
        })
        .then(({data}) => {
          commit('setData', data)
        })
      }
    }
  }
  
  export const getters = {
    seo: state => state.data && state.data.data.attributes.seo ? state.data.data.attributes.seo : {}
  }
  