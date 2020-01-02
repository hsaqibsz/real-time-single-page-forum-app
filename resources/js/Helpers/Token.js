
class Token {

    isValid(token)
    {
        
        const payload = this.payload(token);
        if (payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/signup" ? true : false;
            
        }
        return false
        
    }
    // this function is created to split the token as and get the second part of JWT(payload for verification)
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload) //since the JWT is encoded 34 bit; therefore, we have to decode it and read/match all properties of payload.
    }
     
    //this function is to decode/parse the payload for validating purpose
    //atob() function is used to decode the 34 encoded file
    decode(payload)
    {
      return JSON.parse(atob(payload))

      // console.log(JSON.parse(atob(payload)))
    }
}

export default Token = new Token()