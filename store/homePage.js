export const state = () => ({
  data: null,
  programmsData: null,
})

export const mutations = {
  setData(state, data) {
    state.data = data
  },

  setProgrammsData(state, data) {
    state.programmsData = data
  }
}

export const actions = {
  async fetch({getters, commit}) {
    if(!getters.data) {
      await this.$axios
      .get(`${process.env.apiUrl}/api/homa-page?populate[seo][populate][img]=*&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
      .then(({data}) => {
        commit('setData', data)
      })

      await this.$axios
      .get(`${process.env.apiUrl}/api/homa-page?populate="ProgrammsDescription"&locale=${this.$i18n.locale}`, {
        headers: {
          Authorization: `Bearer ${process.env.tokken}`
        }
      })
      .then(({data}) => {
        commit('setProgrammsData', data)
      })

    }
  }
  
}

export const getters = {
  seo: state => state.data && state.data.data.attributes.seo ? state.data.data.attributes.seo : {},
  programmsDesc: state => state.programmsData && state.programmsData.data.attributes.ProgrammsDescription ? state.programmsData.data.attributes.ProgrammsDescription : {}
}
