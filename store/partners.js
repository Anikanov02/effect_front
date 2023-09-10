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
      .get(`${process.env.apiUrl}/api/partneris?populate=*&sort=id:asc`, {
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
  partners: state => state.data && state.data.data ? state.data.data : {}
}
