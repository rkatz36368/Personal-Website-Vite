<template>
  <v-app>
      <section id="about-me">

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
          Rafael Katz is a Full Stack Developer with Deloitte Touche Tohmatsu Limited &
          Graduated Applied Mathematician from Fundação Getulio Vargas, the 3<sup>rd </sup> biggest think tank in the world.<br>
          Programing skill set: JavaScript, HTML, CSS, Python, Django, Linux, GIT, Vue, React, Bootstrap, Vuetify.
          <br>Interests: Front End, Back End, Data Science, Machine Learning, Web Scraping, and interesting problems! 
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://media-exp1.licdn.com/dms/image/C4E03AQHJ7_SYi5FhRg/profile-displayphoto-shrink_800_800/0/1626430638283?e=1656547200&v=beta&t=X8PKMalXnt33cYqyu5VUNAabYBw1P3oOGupth7qQVFc"></v-img>
          </v-avatar>

          <div></div>

          <v-btn
            color="grey"
            href="https://www.linkedin.com/in/rafael-katz-5a7128101/"
            outlined
            large
            id="linkedinBtn"
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              My Linkedin
            </span>
          </v-btn>
          <v-btn
            color="grey"
            href="https://www.youtube.com/channel/UCh89yXNZAvDRq_0BKwmdg0g"
            outlined
            large
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              My Youtube
            </span>
          </v-btn>
          <v-btn
            color="grey"
            href="https://github.com/rkatz36368"
            outlined
            large
            id="GitHubButton"
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              My GitHub
            </span>
          </v-btn>
        </v-container>

      </section>

      <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text, site },i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                    <v-btn
                    :href="site"
                    color=" blue"
                    fab
                    >
                      <v-icon
                        large
                        v-text="icon"
                      >
                      </v-icon>
                    </v-btn>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="Projects">Projects</v-btn>
            </v-col>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="ContactMe">Contact Me</v-btn>
            </v-col>
          </v-row>
              


  </v-app>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style scoped>
#GitHubButton{
  margin: 30px;
}
#linkedinBtn{
  margin: 30px;
}
#appBar{
  padding-bottom: 0px;
}
</style>