import axios from 'axios'

export const state = {
  currentUser: getSavedState('auth'),
}

export const mutations = {
  SET_AUTH_DATA(state, newValue) {
    state.currentUser = newValue
    saveState('auth', newValue)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ dispatch }) {
    dispatch('validate')
  },

  // Logs in the current user.
  async logIn({ commit, dispatch, getters }, { username, password } = {}) {
    try {
      if (getters.loggedIn) return dispatch('validate')
      const {data} = await getAuthToken(username,password)
      commit('SET_AUTH_DATA', data)

    } catch (error) {
      throw error
    }

  },

  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_AUTH_DATA', null)
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  async validate({ commit, state }) {
    try {
      if (!state.currentUser) return Promise.resolve(null)
      const {data} = await refreshToken(state.currentUser.refresh_token)
      commit('SET_AUTH_DATA',data)
      return true
    } catch (error) {
      throw error
    }

  },
}

// ===
// Private helpers
// ===

const AppId = '2e6a6e4e-8582-479f-aa18-cf1996c56f20'
const AppSecret = '26b60e75-815c-4f79-b13b-a17aae4f45f1'
const authApi = axios.create({
  baseURL:'https://auth-dev.gestionix.com',
  headers:{
    'Content-Type':'application/json',
    AppId,
    AppSecret,
  }
})

function getAuthToken(username, password){
  return authApi({
    method:'post',
    url:'access_token',
    data:{
      user:username,
      password,
    }
  })
}
function refreshToken(refreshToken){
  const json = {
      client_id:clientId,
      client_secret:clientSecret,
      grant_type:'refresh_token',
      refresh_token:refreshToken
    }
  return authApi({
    method:'post',
    url:'/connect/token',
    data:json
  })
}

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : ''
}
