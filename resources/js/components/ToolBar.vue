 
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
      <router-link 
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      v-if="item.show">
        <v-btn text class="btn-text">{{item.title}}</v-btn>
      </router-link>

                </div>
         

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
 </template>

<script>
export default {
    data() {
    return {
      items: [
        { title: "Forum", to: "/forum", show: true },
        { title: "Ask Question", to: "/ask", show: User.loggedIn() },
        { title: "Category", to: "/category", show: User.loggedIn() },
        { title: "Login", to: "/login", show: !User.loggedIn() },
        { title: "Logout", to: "/logout", show: User.loggedIn() }
      ]
    };
  },
  created() {
    EventBus.$on('logout', ()=>{
      User.logout();
    })
  },
}
</script>
 <style>
 
</style>