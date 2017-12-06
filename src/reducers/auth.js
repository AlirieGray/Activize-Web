
// The auth reducer
// The starting state sets authentication based on a token
// in local storage.
// TODO: check if token is expired

const authDefaultState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('access_token') ? true: false
}

export default (state = authDefaultState, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
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
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    default:
      return state
  }
}
