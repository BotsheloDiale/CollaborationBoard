<template>
  <v-app>
    <Navbar v-if="token"
      :appTittle="ApplicationName"
      :actionButtons="MenuButtons" 
      :menuOptions="MenuButtons"
      :helpStatus="helpStatus"
      :user="userData"
      app dark
    /> 
    <Loader small :overlay="loader"/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
    computed: {
      loader: {
        get(){ return this.$store.state.loading }
      },
      token: {
        get(){ return this.checkAccess() }
      }
  },
  data: () => ({
    //
    ApplicationName: "Collaboration Board",
    helpStatus: "New Topics",
    overlay: false,
    userData: {
      initials: "BD",
      imageURL: null,
      token: null,
      Subcription: "premium",
      name: "Botshelo Diale",
      emailAddress: "botshelo.diale@bcx.co.za", 
    },
    MenuButtons: [
      {
        icon: "mdi-key-variant",
        title:"Passwords",
        eventName: "clickProjects",
        toolTip: "user's existing projects."
      },
      {
        status: "new",
        icon: "mdi-settings",
        title:"Administrative Settings",
        eventName: "manageTeams",
        toolTip: "user's existing projects."
      },
      {
        status: "updated",
        icon: "mdi-credit-card-outline",
        title:"Manage my subscription",
        eventName: "subscriptions",
        toolTip: "Payments and subcrption periods."
      },
      {
        status: "new",
        icon: "mdi-account-multiple",
        title:"Switch user accounts",
        eventName: "switchAccounts",
        toolTip: "Payments and subcrption periods."
      },
      {
        icon: "mdi-emoticon",
        title:"another menu option",
        eventName: "option",
        toolTip: ""
      },
    ],
  }),
  methods: {
    checkAccess() {
      if (this.$store.state.token == null || this.$store.state.token.validity == undefined){
        this.$router.push({ name: "login" });
        return null;
      }
      return this.$store.state.token;
    }
  },
};
</script>
