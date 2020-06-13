import axios from 'axios'

let util={}

util.myaxios = axios.create({
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer '+localStorage.getItem('token'),
    },
    // withCredentials: true,
  })

  export default util