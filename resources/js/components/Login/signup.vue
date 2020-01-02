<template>
   <v-container>
      <v-form @submit.prevent = "signup" class="signup-form">
         <v-text-field
         label="Name"
         v-model="form.name"
         type="text"
         required
         ></v-text-field>

         <v-text-field
         label="E-mail"
         v-model="form.email"
         type="email"
         required
         ></v-text-field>

        <v-text-field
         label="Password"
         v-model="form.password"
         type="password"
         required
         ></v-text-field>
        
        <v-text-field
         label="Password_confirmation"
         v-model="form.Password_confirmation"
         type="password"
         required
         ></v-text-field>

         <v-btn type="submit" color="green" >signup</v-btn>

          <router-link to="/login">
                  <v-btn  color="blue">Login</v-btn>
                  </router-link>

    </v-form>
   </v-container>
</template>

<script>

export default {
    data() {
        return {
            form: {
                name: null,
                email: null, 
                password: null,
                password_confirmation: null
            }
        }
    },
      
    methods: {
        signup(){
             
            axios.post('/api/auth/signup', this.form)
            .then(res => {
                User.responseAfterLogin(res)
                this.$router.push({ name: 'forum' })
            })
            .catch(error => console.log(error.response))
            
        }
    },
}
</script>

<style>
.signup-form {
margin-top: -120px;
margin-bottom: 15px;
}
</style>
