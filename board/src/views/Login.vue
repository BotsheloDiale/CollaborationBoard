<template>
    <v-container>
        <AccessCard :title="userRequest.title" :type="userRequest.type"/>
    </v-container>
</template>
<script>
export default {
    name: 'login',
    data(){
        return {
            userRequest: {
                title: "Sign in",
                type: "signIn",
            }
        }
    },
    mounted() {
        //this.$store.commit('updateloading', true)
    }
}
</script>