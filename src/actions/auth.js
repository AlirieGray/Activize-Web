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
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  creds
})

export const receiveLogin = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
    access_token: user.access_token
  }
  // isFetching: false,
  // isAuthenticated: true,
  // id_token: user.id_token,
  // access_token: user.access_token
})

// export const receiveLogin = (user) => {
//   return {
//     type: 'LOGIN_SUCCESS',
//     payload: true
//   }
// }

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
    dispatch(requestLogin(creds));
    console.log('sent request login dispatch')

    return fetch('http://localhost:8000/login', config).then((res) => {
      console.log(res)
      if (res.status != 200) {
        dispatch(loginError(res.statusText));
        return Promise.reject("Could not login");
      }
      return res.json();
    }).then((json) => {
        console.log(json);
        console.log("logged in!")
        localStorage.setItem('id_token', json.id_token);
        localStorage.setItem('access_token', json.access_token);
        console.log(localStorage.getItem('id_token'))
        console.log('sending receive login dispatch')
        console.log(dispatch(receiveLogin({id_token: json.id_token, access_token: json.access_token})));
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
