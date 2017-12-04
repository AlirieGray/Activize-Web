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

export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    dispatch(requestLogin(creds));

    return fetch('http://localhost:8000/login', config)
      .then(response =>
        response.json().then({user, res}) => {
          if (res.status != 200) {
            dispatch(loginError(res.message));
            return Promise.reject(user);
          } else {
            localStorage.setItem('id_token', user.id);
            localStorage.setItem('access_token', user.token);

            dispatch(receiveLogin(user));
          }
        }).catch(err => console.error("Error: ", err));
  }
}

export function logoutUser () {
    return dispatch => {
      dispatch(requestLogout());
      localStorage.removeItem('id_token');
      localStorage.removeItem('access_token');
      dispatch(receiveLogout());
    }
}
