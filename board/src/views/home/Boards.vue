<template>
  <v-container v-if="currentBoard == null">
    <v-row>
      <v-toolbar flat>
        <v-toolbar-title> <b>Active Boards</b> </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
        <v-chip class="ma-2" :close="searchFilters.length != 0 ? true : false" :color="searchFilters.length == 0 ? 'light-grey' : '#696969'" text-color="white" @click:close="removeSearchFilters" >
          <v-avatar left>
            <v-icon>mdi-filter-variant</v-icon>
          </v-avatar>
          Filtered Results
        </v-chip>
      </v-toolbar>
    </v-row>
    <v-row v-if="searchFilters.length > 0">
      testing on two three
    </v-row>
    <v-divider/><br/>
    <v-row justify="start">
        <v-card v-for="board in boards" :key="board.uuid" class="mx-auto mb-8" max-width="344" outlined @click="openBoard(board.uuid)">
          <v-list-item three-line>
            <v-list-item-avatar tile size="75" color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <div class="overline mb-4">{{board.progress}}</div>
              <v-list-item-title class="title mb-1">{{board.name}}</v-list-item-title>
              <v-list-item-subtitle>{{board.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="px-n2" >
            <!--Button align="right" small class="mr-n12" icon iconName="mdi-file-multiple" @click="dialog=!dialog"/>
            <Button align="right" small class="ml-n12 pl-n6" icon iconName="mdi-finance" @click="showBoardActivity(board.uuid)"/-->
          </v-card-actions>
        </v-card>
    </v-row>
  </v-container>
  <BoardLayout v-else :boardID="currentBoard" class="ml-n4 mr-n4 px-0"/>
</template>
<script>
  export default {
    name: "boards",
    data(){
      return {
        search: "",
        searchFilters:[1],
        currentBoard: null,
        boards : [
            {uuid: "0001-0001", name: "Fibre Installation", progress: "Completed", description:"Phase-1 of Project Connect BCX Head office"},
            {uuid: "0001-0002", name: "Network Access points", progress: "In-Progress", description:"Phase-2 of Project Connect BCX Head office"},
            {uuid: "0001-0003", name: "LAN & Server Provisioning", progress: "Awaiting-Approval", description:"Phase-3 of Project Connect BCX Head office"},
            {uuid: "0001-0004", name: "Software Installation", progress: "Planning", description:"Phase-4 of Project Connect BCX Head office"},
            {uuid: "0001-0005", name: "Public/Guest WIFI", progress: "Awaiting-Approval", description:"Phase-5 of Project Connect BCX Head office"},
            //{uuid: "0002-0001", name: "Desktop Computer Accuisition", progress: "Planning", description:"Phase-6 of Project Connect BCX Head office"},
        ]
      }
    },
    methods: {
      removeSearchFilters() {
       this.searchFilters = [];
      },
      openBoard(uuid){
        this.currentBoard = uuid;
      },
      closeBoard(){
        this.currentBoard = null;
      },
    }
  }
</script>