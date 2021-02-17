import axios from 'axios'

const url = "http://localhost:8090/search/"
class UserService {
   
    getAPI(string) {
        return axios.get(url + string)
    }
}

export default new UserService();