<template>
  <v-container>
      <v-dialog v-model="dialog" width="75vw">
        <!-- Viewing an existing project -->
          <v-card v-if="dialogSection == 'readOnly'">
            <v-card-title>{{dialogdata.projectInfo.name}}</v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle v-if="dialogdata.projectInfo.description != undefined || ''" >{{dialogdata.projectInfo.description}}</v-card-subtitle>
            <v-card-subtitle v-else >No project description provided...</v-card-subtitle>
            <v-divider/>
            <v-card-text>
                    {{dialogdata.projectInfo}}
            </v-card-text>
            <v-divider/>
            <v-card-actions>
              <Button align="right" dark buttonName="Close" @click="dialog=!dialog"/>
            </v-card-actions>
          </v-card>
        <!-- Create New and Edit Projects -->
          <v-card v-if="dialogSection == 'readWrite'">
            <v-card-actions>
              <Button color="orange" align="right" fab small dark buttonName="x" @click="dialog=!dialog"/>
            </v-card-actions>
            <v-card-title>Manage Projects</v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle> Create new and/or edit existing project information.</v-card-subtitle>
            <v-divider/>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="dialogdata.projectInfo.name" label="Project Name" prepend-icon="mdi-clipboard"/>
                  <v-text-field v-model="dialogdata.projectInfo.duration" disabled label="Project Duaration" prepend-icon="mdi-calendar-range"/>
                  <v-text-field v-model="dialogdata.projectInfo.endDate" label="Project Starting Date" prepend-icon="mdi-calendar"/>
                  <v-text-field v-model="dialogdata.projectInfo.startDate" label="Projected End Date" prepend-icon="mdi-calendar"/>
                </v-col>
                <v-col cols="6" class="pt-1">
                  <v-textarea v-model="dialogdata.projectInfo.description" label="Project Description" prepend-icon="mdi-comment-text"/>
                  <Combobox :vModel="dialogdata.projectInfo.teams" :items="teamList" label="Assigned Teams" prependIcon="mdi-account-group"/>
                  <v-text-field v-model="dialogdata.projectInfo.budget" label="Project Budget" prepend-icon="mdi-currency-usd"/>
                </v-col>
              </v-row>
              <v-row>
                <v-spacer></v-spacer>
                <Button color="lime" align="right" dark buttonName="Save Project" @click="saveProject"/>
              </v-row>
            </v-card-text>
            <v-divider/>
          </v-card>

      </v-dialog>
      <Button icon small iconName="mdi-plus" color="lime" @click="initiateDialog(null, 'readWrite')"/>
      <Table title="PROJECTS"
        :tableData="data.tableData"
        :tableActions="tableActions"
        :tableHeaders="data.tableHeaders"
        noDataText="You do not have any Projects."
        @boards="showProjectBoards($event)"
        @delete="markProjectForDeletion($event)"
        @edit="initiateDialog($event, 'readWrite')"
        @seeMore="initiateDialog($event, 'readOnly')"
      />
  </v-container>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'projects',
  computed: {

  },
  mounted() {
    //this.checkAccess();
  },
  data(){
    return {
      //Dialog V-Models
      dialog: false,
      dialogdata: {
        title: "",
        projectStatics: {},
        projectTeams: {},
        projectInfo: {}
      },
      dialogSection: null,
      teamList: [
        {name : "team1", uuid: "1234-0987-cq231-4re33-878-uyww"},
        {name : "team2", uuid: "1334-0987-cq231-4re33-878-uywx"},
        {name : "team3", uuid: "1434-0987-cq231-4re33-878-uywz"},
      ],

      //Table V-models
      data:{
        tableHeaders: [
          {text:"Name", align: "center", sortable: true, value:"name"},
          {text:"Duration (Days)", align: "center", sortable: true, value:"duration"},
          {text:"Budget (ZAR)", align: "center", sortable: true, value:"budget"},
          {text:"Status", align: "center", sortable: true, value:"status"},
          {text:"Start Date", align: "center", sortable: true, value:"startDate"},
          {text:"Completion Date", align: "center", sortable: true, value:"endDate"},
          {text:"Assigned Teams", align: "center", sortable: true, value:"teams"},
          {text:"Actions", align: "center", sortable: false, value:"action"}
        ],
        tableData:[
          {name: "Project 001", progress: "", status: "success", budget: "R 12 114 567", duration: "458", startDate: "12/12/2019", endDate: "12/04/2021", teams: "3"},
          {name: "Project 012", progress: "", status: "Warning", budget: "R 00 249 000", duration: "122", startDate: "01/02/2020", endDate: "14/07/2020", teams: "1"},
          {name: "Project 020", progress: "", status: "error", budget: "R 00 249 989", duration: "365", startDate: "31/12/2019", endDate: "18/12/2021", teams: "0"},
          {name: "Project 301", progress: "", status: "error", budget: "R 00 000 000", duration: "000", startDate: "12/12/2019", endDate: "12/04/2021", teams: "0"},
          {name: "Project 011", progress: "", status: "warning", budget: "R 01 231 009", duration: "061", startDate: "16/01/2020", endDate: "12/04/2021", teams: "2"},
          {name: "Project 091", progress: "", status: "info", budget: "R 00 518 778", duration: "012", startDate: "06/01/2020", endDate: "22/01/2020", teams: "1"}
      ]},
      tableActions:  [
        {name:"Detailed View", actionEventName: "seeMore", icon: "mdi-eye", color: "lime", disabled: false},
        {name:"Edit Project Details 7 Info", actionEventName: "edit", icon: "mdi-pencil", color: "", disabled: false},
        {name:"Project Boards", actionEventName: "boards", icon: "mdi-view-dashboard-variant", color: "", disabled: false},
        {name:"Delete Project", actionEventName: "delete", icon: "mdi-delete", color: "orange", disabled: false},
      ],
    }
  },
  methods: {
    markProjectForDeletion(project) {
      alert(JSON.stringify(project));
    },
    initiateDialog(data, instr){
      this.dialog = !this.dialog;
      this.dialogSection = instr;
      if (data != null){
        this.dialogdata.projectInfo = data;
      }
      else if (data == null && instr == "readWrite"){
        //this.dialogdata.projectInfo = null;
      }
    },
    showProjectBoards(project){
      project.name
    },
    saveProject(){

    },

  }
}
</script>
