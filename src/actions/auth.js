export const requestSignUp = (creds) => ({
  type: 'REQUEST_SIGNUP',
  isFetching: true,
  isAuthenticated: false,
  creds
})

export const receiveSignUp = (user) => ({
  type: 'SIGNUP_SUCCESS',
  isAuthenticated: true,
  isFetching: false,
  id_token: user.id_token,
  access_token: user.access_token
})

export const signUpError = (message) => ({
  type: 'SIGNUP_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message
})

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
  id_token: user.id_token,
  access_token: user.access_token
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
  console.log("requesting login...")
  let config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    console.log('about to request login')
    dispatch(requestLogin(creds));
    console.log('set request login')

    return fetch('http://localhost:8000/login', config).then((res) => {
      return res.json()
    }).then((json) => {
      console.log(json);
      if (json.status != 200) {
        dispatch(loginError(json.message));
        return Promise.reject({id_token: json.id_token, access_token: json.access_token});
      } else {
        console.log("logged in!")
        localStorage.setItem('id_token', json.id_token);
        localStorage.setItem('access_token', json.access_token);

        dispatch(receiveLogin(json.user));
      }
    }).catch(err => console.log("Error: " + err));
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
