<template>
  <v-container>
    <v-data-table
      :search="search"
      :items="tableData"
      :headers="tableHeaders"
      :no-data-text="noDataText"
      :items-per-page="tableLegnth"
      
    >
      <!-- Header Slot (Table Name & search Text field) -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> {{title}} </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
        </v-toolbar>
      </template>
      <!-- Action Slot (edit & delete buttons) -->
      <template v-slot:item.action="{ item }">
        <v-icon v-for="(action, index) in tableActions" :key="index"
          :color="action.color"
          class="mr-2"
          @click="$emit(action.actionEventName, item)"
        >
          {{action.icon}}
        </v-icon>
    </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: {
      type: String,
      default: "sample title.."
    },
    tableHeaders: {
      type: Array
    },
    tableData: {
      type: Array,
    },
    tableActions:{
      type: Array
    },
    tableLegnth: {
      type: String||Number
    },
    noDataText: {
      type: String
    },
    create: {
      type: Boolean
    },
    iconName: {
      type: String
    }
  },
  data(){
    return {
      search : "",
    }
  }
}
</script>

<style>

</style>