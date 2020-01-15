<template>
  <v-container>
    <Navdrawer
      dense app nav dark
      :value="drawer"
      title="Menu" 
      subTitle="something relevent and hopeful" 
      :MenuItems="NavDrawerMenuItems"
      @click="showMe($event)"
    />
    <boards v-if="position == 'boards'"/>
    <projects v-if="position == 'projects'"/>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  computed: {

  },
  mounted() {
    this.checkAccess();
  },
  data(){
    return {
      drawer: true,
      position: null,
      NavDrawerMenuItems:[
        {
          active: true,
          icon: "mdi-folder-open",
          iconColor: "plum",
          title: "Projects",
          instruction: "",
        },
        {
          active: false,
          icon: "mdi-select-group",
          iconColor: "lime",
          title: "Boards",
          instruction: "",
        },
        {
          active: false,
          icon: "mdi-message",
          iconColor: "lime",
          title: "Messages",
          instruction: "",
        },
        {
          active: false,
          icon: "mdi-account-group",
          iconColor: "lime",
          title: "Manage Teams",
          instruction: "",
        },
        {
          active: true,
          icon: "mdi-bank",
          iconColor: undefined,
          title: "Organizations",
          instruction: "",
        },
      ],
      Organizations: [
        {
          name: "Company-1",
          location: "Gauteng, ZA",
          projects: {
            open: [
              {
                name: "project 1",
                collaborators: 3,
                startDate: 11-11-2019
              },
              {
                name: "project 2",
                collaborators: 3,
                startDate: 11-11-2019
              },
              {
                name: "project 3",
                collaborators: 3,
                startDate: 11-11-2019
              },
            ],
            closed: [
              {
                name: "project 3",
                collaborators: 3,
                startDate: 11-11-2019
              },
            ]
          },
          teams: 2
        }
      ],
    }
  },
  methods: {
    checkAccess() {
    },
    showMe(eve) {
      //alert(JSON.stringify(eve));
      this.position = eve.toLowerCase();
    },
  }
}
</script>
