import axios from 'axios';
const baseUrl = 'http://127.0.0.1:3000/';
const api = {
  getStudentInfo:'getStudentInfo'
}
class Http{
  static getStudentInfo(){
    return axios.post(baseUrl+api.getStudentInfo)
  }
}
export default Http