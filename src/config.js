const isDev = process.env.NODE_ENV === 'production' ? false : true
const serverUrl = isDev ? 'http://localhost:5000' : 'https://dwellingly.app'

export default {
  serverUrls: {
    home: serverUrl,
    googleLogin: serverUrl + '/api/login/google'
  }
}