<template>
  <v-content>
    <div>
      <v-img
        src="https://picsum.photos/1920/500"
        max-height="350"
        >
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">
                <h1> 
                    Contact Me
                </h1>         
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" label="Message" required></v-textarea>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-container>
    </div>
  </v-content>
  <br>
  <br>
  <v-row no-gutters>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="Projects">Projects</v-btn>
            </v-col>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="AboutMe">About Me</v-btn>
            </v-col>
          </v-row>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v => (v && v.length >= 10) || "Message must be more than 10 characters"
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert("sorry, there is a bug currently with VITE, please send Email to RKatz36368@gmail.com")
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(  error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },

  }
};
</script>