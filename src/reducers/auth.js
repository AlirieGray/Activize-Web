

// The auth reducer
// The starting state sets authentication based on a token
// in local storage.
// TODO: check if token is expired
export default (state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true: false
}, action) {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case 'LOGIN_FAILURE':
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: 'action.message'
      }
    case 'LOGOUT_SUCCESS':
      return {
        isFetching: true,
        isAuthenticated: false
      }
    default:
      return state
  }
}
