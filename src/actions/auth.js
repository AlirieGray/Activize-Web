export const requestLogin = (creds) => ({
  type: 'REQUEST_LOGIN',
  isFetching: true,
  isAuthenticated: false,
  creds
})

export const receiveLogin = (user) => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token
})

export const loginError = (message) => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message
})

export const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true
})

export const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false
})

export function logoutUser () {
    return dispatch => {
      dispatch(requestLogout());
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      dispatch(receiveLogout());
    }
}
