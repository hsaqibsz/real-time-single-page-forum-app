
import Token from './Token';
import AppStorage from './AppStorage';

class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then(res =>this.responseAfterLogin(res)) 
            .catch(error => console.log(error.response.data))
    }
  
    responseAfterLogin(res)
    { 

        const access_token = res.data.access_token;
             const username = res.data.username;

             if (Token.isValid(access_token)) {
                 AppStorage.store(username, access_token)
                 window.location = "/forum";
             }
             return "invalid token";
         
    } 

    //hasToken function is created to check if user has a valid token which is automatically storing in local storage
    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }
          //this return  false is becouse, there is undefinded value
        return false
    }
    
    //loggedIn function is created to check wheather user is logged in or not
    loggedIn(){
        return this.hasToken();
    }
    
    //logout funciton is created to clear user and token from localstorage and logout the current loggedin user
    logout() {
        AppStorage.clear();
        window.location = "/forum";
    }
    
    //name function is created to get logged in user name
    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
        return false
    }
     
    //id function is created to get logged in user id which is stored in sub of payload
    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub
        }
    }

}


export default User = new User();