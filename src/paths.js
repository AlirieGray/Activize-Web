const serverPaths = {
  dev: 'http://localhost:8000',
  prod: 'https://activize-server.herokuapp.com'
}

//const serverPath = (process.env.NODE_ENV === 'development') ? serverPaths.dev : serverPaths.prod;
const serverPath = serverPaths.prod;
export default serverPath;
