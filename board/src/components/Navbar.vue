<template>
    <nav>
        <v-app-bar :app="app" :absolute="absolute" :bottom="bottom" :clipped-left="clippedLeft" :clipped-right="clippedRight" :dark="dark"
            :collapse="collapse" :collapse-on-scroll="collapseOnScroll" >
            <v-app-bar-nav-icon @click="$emit('drawerToggle')"></v-app-bar-nav-icon>
            <v-toolbar-title>{{appTittle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu mr-4>
              <!-- App Bar User Icon/Avatar Top-Right Corner -->
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" mr-4>
                    <v-avatar color="lime" size="42">
                      <img  v-if="user.imageURL != undefined" :src="user.imageURL" :alt="user.initials">
                      <span v-else class="white--text headline">{{user.initials}}</span>
                    </v-avatar>
                </v-btn>
              </template>
              <v-list pa-1>
                <!-- Menu User Avatar For editting profile -->
                <v-list-item @click="mangeProfile()">
                  <v-list-item-avatar color="lime" size="42" @mouseover="profileBadge=!profileBadge" @mouseout="profileBadge=!profileBadge">
                  <v-badge v-model="profileBadge" color="black" bottom>
                    <template v-slot:badge>
                      <v-icon dark>mdi-pencil</v-icon>
                    </template>
                    <img v-if="user.imageURL != undefined" :src="user.imageURL" :alt="user.initials">
                    <span class="white--text headline">{{user.initials}}</span>
                  </v-badge>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="user.name"/>
                    <v-list-item-subtitle v-text="user.emailAddress"/>
                  </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <!-- Menu Items -=> User specific (defined from the server)-->
                <v-list-item v-for="item in menuOptions" :key="item.title" @click="alert('Menu option' + index)">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title >{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                  <v-chip v-if="item.status" x-small right text-color="white" color="grey">{{item.status}}</v-chip>
                </v-list-item>
                <v-divider/>
                <!-- Menu Items -=> Compulsory for all users-->
                <v-list-item @click="help()">
                  <v-list-item-icon>
                    <v-icon>mdi-help</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title >Help</v-list-item-title>
                  </v-list-item-content>
                  <v-chip v-if="helpStatus" x-small right text-color="white" color="blue">{{helpStatus}}</v-chip>
                </v-list-item>
                <v-list-item @click="signMeOut()">
                  <v-list-item-icon>
                    <v-icon>mdi-power</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title >Sign out</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
        </v-app-bar>
        
    </nav>
</template>
<script>
export default {
  name: 'Navbar',
  props:{
      appTittle: {
        type: String
      },
      user: {
        type: Object
      },
      actionButtons: {
        type: Array
      },
      menuOptions: {
        type: Array
      },
      helpStatus:{
        type: String
      },
      app: {
        type: Boolean
      },
      absolute: {
        type: Boolean
      },
      bottom: {
        type: Boolean
      },
      clippedLeft: {
        type: Boolean
      },
      clippedRight: {
        type: Boolean
      },
      collapse: {
        type: Boolean
      },
      collapseOnScroll: {
        type: Boolean
      },
      color: {
        type: String
      },
      dark: {
        type: Boolean
      },
      dense: {
        type: Boolean
      },
      fixed: {
        type: Boolean
      },
      flat: {
        type: Boolean
      },
  },
  data () {
    return {
      profileBadge: false,
    }
  },
}
</script>