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
      .get(`${process.env.apiUrl}/api/homa-page?populate[gallery][populate]=*`, {
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
  gallery: state => state.data && state.data.data.attributes.gallery ? state.data.data.attributes.gallery : []
}
