<template>
  <section>
    <h1 class="title">Add Rain Gauge</h1>
    <form class="gaugeform container" @submit="submitForm">
      <b-field label="Gauge Name" type="is-primary" class="info">
        <b-input v-model="form.name" placeholder="Enter a name"></b-input>
      </b-field>
      <b-field expanded>
        <b-field label="Place name" type="is-primary" class="info">
          <vue-simple-suggest
            v-model="form.place"
            display-attribute="city"
            value-attribute="city"
            :list="getPlaceSuggestions"
            :filter-by-query="true"
            @select="selectPlace">
        <!-- Filter by input text to only show the matching results -->
          </vue-simple-suggest>
        </b-field>
      </b-field>
      <b-field label="Co-ordinates" type="is-primary" class="info" expanded>
        <b-field type="is-success" grouped>
          <b-input v-model="form.lat" placeholder="Latitude"></b-input>
          <b-input v-model="form.lng" placeholder="Longitude"></b-input>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="District" type="is-primary" class="info" expanded>
          <b-input v-model="form.district" placeholder="Enter the district name"></b-input>
        </b-field>
        <b-field label="State" type="is-primary" class="info" expanded>
          <b-input v-model="form.state" placeholder="Enter the state name"></b-input>
        </b-field>
        <b-field label="Country" type="is-primary" class="info" expanded>
          <b-input v-model="form.country" placeholder="Enter the country name"></b-input>
        </b-field>
      </b-field>
      <b-field>
        <button class="button is-primary">Add Gauge</button>
      </b-field>
    </form>
  </section>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'

export default {
  name: "AddGauge",

  components: {
    VueSimpleSuggest
  },

  data () {
    return {
      form: {
        email: '',
        username: '',
        password1: '',
        password2: '',
        errors: []
      }
    }
  },

  methods: {
    submitForm(e) {
      e.preventDefault()

      this.axios.post(this.$API.user.register, this.form).then((response) => {
        if (response.status === 201) {
          // TODO: add response.data.token to store, login the user using the token
        } else {
          // TODO: show response.errors.message
        }
      })
      this.$buefy.toast.open(`Added guage`)
    },

    getPlaceSuggestions() {
      return new Promise((resolve, reject) => {
        this.axios.get(
          `https://api.radar.io/v1/search/autocomplete?query=${this.form.place}&limit=10`,
          {
            headers: {
              Authorization: `prj_live_pk_06593b4cadac5d0972aaabcc0ad184604fac9c8f`
            }
          }
        ).then(response => {
          const places = []
          response.data.addresses.forEach(item => {
            if (item.city && places.indexOf(item) === -1) {
              places.push(item)
            }
          })
          console.log(places)
          resolve(places)
        }).catch(e => {
          reject(e)
        })
      })
    },

    selectPlace(p) {
      this.form.lat = p.latitude
      this.form.lng = p.longitude
      this.form.state = p.state
      this.form.district = p.district
      this.form.country = p.countryCode
    }
  }
};
</script>

<style scoped>
.gaugeform {
  margin-left: 25vw;
  margin-right: 25vw;
}
.info {
  text-align: left;
}
.button {
  float: left;
  margin-top: 1vw;
}
.title {
  margin-top: 5vw;
  background-color: hsl(217, 71%, 53%);
  color: white;
  margin-left: 25vw;
  margin-right: 25vw;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
