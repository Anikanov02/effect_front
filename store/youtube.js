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
        .get(`${process.env.apiUrl}/api/homa-page?populate=youtube`, {
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
    youtube: state => state.data && state.data.data.attributes.youtube ? state.data.data.attributes.youtube.mainVideoId : {}
  }
  