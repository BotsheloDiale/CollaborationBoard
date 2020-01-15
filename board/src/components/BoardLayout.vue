<template>
  <v-responsive>
    <v-row class="overflow-x-auto mx-0 mr-n5 px-0">
      <v-card color="#ebf3f5" class="mx-1 mb-2 px-2" v-for="column in columns" :key="column.uuid" height="80vh" width="17vw" >
        <v-card-title class="mb-2"> {{column.title}} </v-card-title>
          <v-card dark class="mb-2" v-for="(task,index) in column.tasks" :key="index">
            <v-card-actions class="pb-n1 mb-n4">
              <!-- Person assigned to task / responsible for the task-->
            <v-avatar marginright v-if="task.teamMember != undefined" color="lime" size="36">
              <span class="white--text">{{generateAvaterInitials(task.teamMember)}}</span>
            </v-avatar>
              <v-spacer/>
              <v-btn class="pa-0 ma-0" icon>
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-subtitle class="mt-n1">{{task.title}}</v-card-subtitle>
            <!-- Task card Action buttons -->
            <v-btn v-if="task.description != ''" x-small class="pa-0 mt-n3 ml-2" icon>
              <v-icon>mdi-card-text-outline</v-icon>
            </v-btn>
            <v-btn v-if="task.coments.length > 0" x-small class="pa-0 mt-n3 ml-2" icon>
              <v-icon>mdi-comment-outline</v-icon>
              <span>{{ task.coments.length }}</span>
            </v-btn>
            <v-btn v-if="task.attachments.length > 0" x-small class="pa-0 mt-n3 ml-2" icon>
              <v-icon>mdi-attachment</v-icon>
              <span>{{ task.attachments.length }}</span>
             </v-btn>

          </v-card>
      </v-card>
    </v-row>
  </v-responsive>
</template>
<script>
  export default {
    name: 'BoardLayout',
    props: {
      boardData : {
        type : Object
      }
    },
    data(){
      return {
        columns: [],
      }
    },
    mounted() {
      this.columns = [
          {uuid: '0000-0011', title: 'Task Bucket', tasks : [
            {uuid: '0100-0011', column:'0000-0011',status:"",title: 'Application Prototyping - should clearly indicate process flow and rough idea of the interface layout', description:"", coments: [], attachments: []},
            {uuid: '0120-0011', column:'0000-0011',status:"",title: 'UI design', description:"", coments: [1,2,3], attachments:[]},
            {uuid: '0110-0011', column:'0000-0011',status:"",title: 'App Architecture', description:"", coments: [], attachments: []},
            {uuid: '0130-0011', column:'0000-0011',status:"",title: 'CI implimentation/Approval', description:"", coments: [], attachments:[]},
            {uuid: '0150-0011', column:'0000-0011',status:"",title: 'Deployment', description:"", coments: [], attachments:[]},
          ]},
          {uuid: '0000-0012', title: 'To Do', tasks : [
            {uuid: '0100-0011', column:'0000-0011',status:"",title: 'Application Prototyping', description:"", coments: [], attachments:[]},
            {uuid: '0120-0011', column:'0000-0011',status:"",title: 'UI design', description:"", coments: [], attachments:[]},
            {uuid: '0110-0011', column:'0000-0011',status:"",title: 'App Architecture', description:"", coments: [], attachments:[]},
            {uuid: '0130-0011', column:'0000-0011',status:"",title: 'CI implimentation/Approval', description:"", coments: [], attachments:[]},
            {uuid: '0150-0011', column:'0000-0011',status:"",title: 'Deployment', description:"", coments: [1,1,2], attachments:[]},
          ]},
          {uuid: '0000-0013', title: 'Doing / In Progress',tasks : [
            {uuid: '0100-0011', column:'0000-0011',status:"",title: 'Application Prototyping', description:"", coments: [], attachments:[], teamMember: ''},
            {uuid: '0120-0011', column:'0000-0011',status:"",title: 'UI design', description:"", coments: [], attachments:[], teamMember: ''},
            {uuid: '0110-0011', column:'0000-0011',status:"",title: 'App Architecture', description:"", coments: [], attachments:[1,2,3,5], teamMember: ''},
            {uuid: '0130-0011', column:'0000-0011',status:"",title: 'CI implimentation/Approval', description:"", coments: [], attachments:[], teamMember: ''},
            {uuid: '0150-0011', column:'0000-0011',status:"",title: 'Deployment', description:"", coments: [], attachments:[1,2,3,4,5], teamMember: ''},
          ] },
          {uuid: '0000-0014', title: 'Done / Signed Off', tasks : [
            {uuid: '0100-0011', column:'0000-0011',status:"",title: 'Application Prototyping', description:"", coments: [], attachments:[], teamMember: ''},
            {uuid: '0120-0011', column:'0000-0011',status:"",title: 'UI design', description:"", coments: [1], attachments:[11,1,1], teamMember: '1'},
            {uuid: '0110-0011', column:'0000-0011',status:"",title: 'App Architecture', description:"", coments: [], attachments:[], teamMember: '2'},
            {uuid: '0130-0011', column:'0000-0011',status:"",title: 'CI implimentation/Approval', description:"", coments: [1,2,3], attachments:[], teamMember: '1'},
            {uuid: '0150-0011', column:'0000-0011',status:"",title: 'Deployment', description:"", coments: [1], attachments:[], teamMember: ''},
          ]},
      ];

    },
    methods: {
      generateAvaterInitials(userDetails){
        if(userDetails == '')
          return "DB";
        if(userDetails == '1')
          return "B";
        if(userDetails == '0')
          return "VD";
        if(userDetails == '2')
          return "v";
      },
    }
  }
</script>