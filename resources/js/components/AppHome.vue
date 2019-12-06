<template>
<v-app>
  <tool-bar></tool-bar>
  <router-view></router-view>
 <app-footer></app-footer>
  </v-app>
</template>

<script>
 import AppFooter from './AppFooter';
 import ToolBar from './ToolBar';
 import login from './Login/login.vue';

export default {
	name: "AppHome",
  components: {AppFooter, ToolBar}
};

</script>

<style>
</style>