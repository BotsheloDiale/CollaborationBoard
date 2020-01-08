<template>
  <v-combobox 
    v-model="select" :items="items" item-text="name" item-value="uuid" 
    :label="label" multiple chips :prepend-icon="prependIcon" @input="$emit('input', select)"
  >
    <template v-slot:selection="data">
      <v-chip
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        @click:close="data.parent.selectItem(data.item)"
      >
        <v-avatar class="accent white--text" left v-text="data.item.name.slice(0, 1).toUpperCase()"/>
        {{ data.item.name }}
      </v-chip>
    </template>
  </v-combobox>
</template>
<script>
  export default {
    name: "Combobox",
    props: {
      items: {
        type: Array
      },
      vModel: {
        type: Array
      },
      label: {
        type: String
      },
      prependIcon: {
        type: String
      }
    },
    data() {
      return {
        select: [],
      }
    },
    mounted (){
      this.select = this.vModel;
    }
  }
</script>