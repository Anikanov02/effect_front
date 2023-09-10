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
      .get(`${process.env.apiUrl}/api/dokumentacziya?populate[documents][populate]=*&pagination[pageSize]=999&populate[seo][populate]=*`, {
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
  docs: state => state.data && state.data.data.attributes.documents ? state.data.data.attributes.documents : {},
  seo: state => state.data && state.data.data.attributes.seo ? state.data.data.attributes.seo : {}
}
