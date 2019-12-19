
class Token {

    isValid(token)
    {
        const payload = this.payload(token);
        if (payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" ? true : false
            console.log('ok');
        }
        return false
        
    }
    // this function is created to split the token as
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload)
    {
      return JSON.parse(atob(payload))

      // console.log(JSON.parse(atob(payload)))
    }
}

export default Token = new Token()