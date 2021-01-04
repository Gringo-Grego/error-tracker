import axios from 'axios';

class Auth {
    constructor() {

      this.authenticated = false;
    }
  
    handleLoginSuccess(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      this.authenticated = false;
      cb();
    }
    async validateToken(){
      if(localStorage.token){
      let config = {
        headers: {
          authorization: localStorage.token,
        }
      }
      var res = await axios.get(`${process.env.REACT_APP_API_URL}/validate_token`,config);
      if(res.data?.error === 0){
        return true;
      }
      return false;
      }
      return false;
    }
  
    isAuthenticated() {
      return this.authenticated;
      // return true;
    }
  }
  
  export default new Auth();