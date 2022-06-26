<template>
    
<section id="blog">

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">My Projects</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ src, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="src"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-text="title"
              ></h3>

              <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>
            </v-col>
          </v-row>
        </v-container>
        <br>
        <v-row no-gutters>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="AboutMe">About Me</v-btn>
            </v-col>
            <v-col cols="6" align="center"
      justify="center">
              <v-btn color="success" to="ContactMe">Contact Me</v-btn>
            </v-col>
          </v-row>

      </section>
</template>

<script>
export default {
    data(){
        return {
            articles: [
            {
                src: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
                title: 'Personal Site',
                text: 'This is the first time I Made any website outside of my job, it was a huge learning experience, learning about 3D Graphics and vite that I hav not used before',
            },
            {
                src: 'data:image/png;base64,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',
                title: 'Youtube Chanel',
                text: 'I have noticed that there are not a lot of examples of the Javascript Google Maps API for Vue, so I am starting to make content teaching how to use the API and the Vue Package.',
            },
            {
                src: 'https://images.unsplash.com/photo-1553451166-232112bda6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
                title: 'D and D',
                text: 'Me and Some friends that love D&D noticed that the current online sites that provide any RPG services, this is still a work in progress, so look out at my GitHub for updates on the project and sprint details of what has been happening.',
            },
            ],
    }
}
}
</script>