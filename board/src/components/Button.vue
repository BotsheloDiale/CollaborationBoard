<template>
  <v-container>
      <v-btn :color="color" :small="small" :x-small="xSmall" :large="large" :fab="fab" :dark="dark" @click="$emit('click')">
        <v-icon v-if="icon" >{{iconName}}</v-icon>
        <span v-if="buttonName != undefined || null">{{buttonName}}</span>
        <v-icon v-if="rightIcon" >{{iconName}}</v-icon>
      </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "Button",
    props: {
      iconName :{
        type: String,
      },
      buttonName :{
        type: String
      },
      color :{
        type: String
      },
      dark :{
        type: Boolean
      },
      fab :{
        type: Boolean
      },
      small :{
        type: Boolean
      },
      large :{
        type: Boolean
      },
      icon :{
        type: Boolean
      },
      rightIcon :{
        type: Boolean
      },
      xSmall :{
        type: Boolean
      },
    },
  }
</script>

<style>

</style>