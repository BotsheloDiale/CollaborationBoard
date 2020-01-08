<template>  
  <v-navigation-drawer :app="app" :color="color" :clipped="clipped" :dark="dark" :value="value">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{title}}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{subTitle}}
        </v-list-item-subtitle>
        <v-divider></v-divider>
      </v-list-item-content>
    </v-list-item>
    <v-list :dense="dense" :nav="nav" >
      <v-list-item v-for="item in MenuItems" :key="item.title" link >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navdrawer',
  props:{
    title: {
      type: String,
      default: "Collaboration Board"
    },
    subTitle: {
      type: String,
      default: "Menu"
    },
    MenuItems: {
      type: Array
    },
    app:{
        type: Boolean
    },
    dense:{
        type: Boolean
    },
    color: {
        type: String
    },
    clipped: {
        type: Boolean
    },
    dark: {
        type: Boolean
    },
    nav:{
        type: Boolean
    },
    value:{
        type: Boolean
    }
  }
}
</script>

<style>

</style>