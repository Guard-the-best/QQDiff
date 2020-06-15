import axios from 'axios'
import router from './router'

let util={}

util.myaxios = axios.create({
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: (localStorage.getItem("token") != null && localStorage.getItem("token").length>0) ? ('Bearer '+localStorage.getItem('token')) : "",
    },
    // withCredentials: true,
  })

  util.myaxios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      console.log('error')
      alert(error.response.data.message)
      if(error.response.data.status == 401)
        router.push('/login')
      else if(error.response.data.status == 403)
        router.push('/')
      else
        router.push('/')
    }
  )

  export default util