<template>   
  <v-overlay :value="overlay">
      <v-progress-circular :width="size.width" :size="size.size" indeterminate :color="color" />
  </v-overlay>
</template>
<script>
export default {
  name: 'Loader',
  props: {
    overlay: {
      type: Boolean
    },
    type: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "lime"
    }
  },
  data(){
    return {
      size: {}
    }
  },
  mounted(){
    this.size = this.determineSize();
  },
  methods: {
      determineSize() {
        if(this.type == 'small'){
          return {
            size : 1,
            width : 3
          }
        } else if(this.type == 'medium'){
          return {
            size : 100,
            width : 10
          }
        } else {
          return {
            size : 70,
            width : 7
          }
        }
      }
  }
}
</script>