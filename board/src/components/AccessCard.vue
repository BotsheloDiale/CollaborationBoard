<template>
  <v-container>
        <v-row> 
          <v-col cols="6">
            <v-tabs v-model="tabs">
              <v-tabs-slider></v-tabs-slider>
              <v-tab href="#tab-1">Sign In</v-tab>
              <v-tab href="#tab-2">Sign Up</v-tab>
            </v-tabs>
              <v-tabs-items v-model="tabs">
                <v-tab-item value="tab-1">
                  <!-- Sign In Form-->
                  <v-form>
                    <v-text-field
                      v-model="email00" label="email Address" 
                      prepend-inner-icon="mdi-email" 
                      :error="error00.state" 
                      :error-messages="error00.message"
                    />
                    <v-text-field type="password" v-model="password00" label="Passoword" prepend-inner-icon="mdi-key-variant"/>
                    <v-row class="justify-start">
                      <v-col cols="1" class="mt-n5 ml-1">
                        <v-checkbox v-model="rememberMe"/>
                      </v-col>
                      <v-col cols="6">
                        <p> Remember Me</p>
                      </v-col>
                    </v-row>
                    <v-btn dark block @click="userSignIn">Sign In</v-btn>
                    <v-row class="mt-2">
                      <v-col cols="12">
                        <p class="text-right"> Forgot <a @click="resetPassword" class="">password ?</a></p>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-tab-item>
                
                <v-tab-item value="tab-2">
                  <!-- Sign Up Form-->
                  <v-form>
                    <v-text-field 
                      v-model="firstNames" label="Full Name" 
                      prepend-icon="mdi-account"
                    />
                    <v-text-field 
                      v-model="email01" label="Email Address" 
                      prepend-icon="mdi-email"
                    />
                    <v-text-field 
                      v-model="mobile01" label="Mobile Number" 
                      prepend-icon="mdi-phone"
                       :rules="[rules.mobile]"
                    />
                    <v-text-field 
                      type="password" v-model="password01" 
                      label="Password" prepend-icon="mdi-key-variant"
                       :rules="[rules.passwprd]"
                    />
                    <v-text-field 
                      type="password" v-model="password02" 
                      label="Verify Password" prepend-icon="mdi-key-variant"
                    />
                    <v-row class="justify-start">
                      <v-col cols="1" class="mt-n5 ml-1">
                        <v-checkbox v-model="agreement"/>
                      </v-col>
                      <v-col cols="6">
                        <p> I agree to the <span class="">Terms of Service</span></p>
                      </v-col>
                    </v-row>
                    <v-btn block>Sign In</v-btn>
                  </v-form>
                </v-tab-item>
                <v-tab-item value="tab-3">
                </v-tab-item>
              </v-tabs-items>
          </v-col>
        </v-row>

  </v-container>
</template>

<script>
export default {
    name: 'AccessCard',
    props: {
    },
    data () {
      return{
        tabs: null,
        error00: {
          state: false,
          message: ""
        },
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          password: v => (/^[a-zA-Z0-9\\.;,:'\\s]{1,100}$/i( v )) || 'Password should include Aa-Za, !@#*& and 0-9',
          mobile: v => (v.length == 10 && v[0] == '0' && (v[1] >= '6' && v[1] <= '8')) || 'mobile number format invalid',
        },
        email00: "",
        email01: null,
        mobile01: "",
        lastName: null,
        agreement: false,
        firstNames: null,
        password00: null,
        password01: null,
        password02: null,
        rememberMe: false,
      }
    },
    methods: {
      userSignIn() {
        //console.log(this.email00 + " user with password " + this.password00);
        this.$store.commit('updateToken', {validity: true, expirydate: null})
        this.$router.push({ name: "home" });
      },
      resetPassword(){
        if(this.email00 == ""){
          this.error00.state = true;
          this.error00.message = "email field cannot be empty."
        }
      },
    }
}
</script>