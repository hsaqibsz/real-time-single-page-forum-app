class AppStorage {
     // this function is to store token in local storage
    storeToken(token) {
      localStorage.setItem('token', token);
    }
    
    // this function is to store user in local storage
    storeUser(user){
        localStorage.setItem('user', user);
    }
    // this function is to call both functions at once
    store(user, token){
       this.storeToken(token);
       this.storeUser(user);
    }
    //this function is to logout user
    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
     // this function is to get token and use in other functions like verifying that if user is valid or no
    getToken()
    {
       return localStorage.getItem('token');
    }
     // this function is used to get logged in user's information
    getUser(){
      return  localStorage.getItem('user');
    }
}

    // this function is used to export AppStorage with all of its functions
export default AppStorage = new AppStorage();