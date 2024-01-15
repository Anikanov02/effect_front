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
      .get(`${process.env.apiUrl}/api/default?populate[contacts][populate]=*&locale=${this.$i18n.locale}`, {
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
  title: state => state.data && state.data.data.attributes.title ? state.data.data.attributes.title : '', 
  label: state => state.data && state.data.data.attributes.label ? state.data.data.attributes.label : '',
  address: state => state.data && state.data.data.attributes.contacts.address ? state.data.data.attributes.contacts.address : '',
  google_link: state => state.data && state.data.data.attributes.contacts.google_link ? state.data.data.attributes.contacts.google_link : '',
  email: state => state.data && state.data.data.attributes.contacts.email ? state.data.data.attributes.contacts.email : '',
  phones: state => state.data && state.data.data.attributes.contacts.phones ? state.data.data.attributes.contacts.phones : [],
  socs: state => state.data && state.data.data.attributes.contacts.socs ? state.data.data.attributes.contacts.socs : [],
  iban: state => state.data && state.data.data.attributes.iban ? state.data.data.attributes.iban : '',
  name: state => state.data && state.data.data.attributes.name ? state.data.data.attributes.name : '',
  code: state => state.data && state.data.data.attributes.code ? state.data.data.attributes.code : '',
  legalAddress: state => state.data && state.data.data.attributes.LegalAddress ? state.data.data.attributes.LegalAddress : '',
  mainEmail: state => state.data && state.data.data.attributes.MainEmail ? state.data.data.attributes.MainEmail : '',

}
