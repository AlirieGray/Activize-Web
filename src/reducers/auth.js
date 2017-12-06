
// The auth reducer
// The starting state sets authentication based on a token
// in local storage.
// TODO: check if token is expired

export default (state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('access_token') ? true: false
  }, action) {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    default:
      return state
  }
}
