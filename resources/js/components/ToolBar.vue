 
 <template>
   <v-card
      color="grey lighten-4"
      flat
      height="200px"
      tile
    >
      <v-toolbar dense>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>ORD</v-toolbar-title>

        <v-spacer></v-spacer>
        <div>
                  <v-btn text>Forum</v-btn>
                  <v-btn text>Ask Question</v-btn>
                  <v-btn text>Category</v-btn>

                  <router-link to="/login">
                  <v-btn text>Login</v-btn>
                  </router-link>

                </div>
         

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
 </template>

export default {

};

</script>

<style>
</style>