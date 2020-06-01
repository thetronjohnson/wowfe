<template>
  <section class="main">
    <h1 class="title">Add Rain Gauge</h1>
    <form class="gaugeform container" @submit="submitForm">
      <b-field label="Gauge Name" :type="formError.name ? 'is-danger' : 'is-primary'" v-bind:message="formError.name" class="info">
        <b-input v-model="form.name" placeholder="Enter a name"></b-input>
      </b-field>
      <b-field :type="formError.place ? 'is-danger' : 'is-primary'" v-bind:message="formError.place" expanded>
        <b-field label="Place name" type="is-primary" class="info">
          <vue-simple-suggest
            v-model="form.place"
            display-attribute="city"
            value-attribute="city"
            :debounce=1000
            :list="getPlaceSuggestions"
            :filter-by-query="true"
            @select="selectPlace">
        <!-- Filter by input text to only show the matching results -->
          </vue-simple-suggest>
        </b-field>
      </b-field>
      <b-field label="Co-ordinates" type="is-primary" class="info" expanded>
        <b-field :type="formError.lat || formError.lng ? 'is-danger' : 'is-primary'" v-bind:message="formError.lat || formError.lng" class="info" grouped>
          <b-input v-model="form.lat" placeholder="Latitude"></b-input>
          <b-input v-model="form.lng" placeholder="Longitude"></b-input>
        </b-field>
      </b-field>
      <b-field grouped>
        <b-field label="Pincode" :type="formError.pincode ? 'is-danger' : 'is-primary'" v-bind:message="formError.pincode" class="info" expanded>
          <b-input v-model="form.pincode" placeholder="Enter the pincode"></b-input>
        </b-field>
        <b-field label="State" :type="formError.state ? 'is-danger' : 'is-primary'" v-bind:message="formError.state" class="info" expanded>
          <b-input v-model="form.state" placeholder="Enter the state name"></b-input>
        </b-field>
        <b-field label="Country" :type="formError.country ? 'is-danger' : 'is-primary'" v-bind:message="formError.country" class="info" expanded>
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
    const formFields = {
      name: '',
      place: '',
      lat: '',
      lng: '',
      pincode: '',
      state: '',
      country: ''
    }
    return {
      formFields,
      form: {...formFields},
      formError: {}
    }
  },

  methods: {
    submitForm(e) {
      e.preventDefault()

      this.axios.post(this.$API.gauge.add, this.form).then((response) => {
        if (response.status === 201) {
          this.form.name = ''
          this.$buefy.toast.open({
            message: `Added gauge`,
            type: 'is-success'
          })
        }
      }).catch(e => {
        this.formError = {...this.formFields}
        const errors = e.response.data.errors
        for (const k in errors) {
          this.formError[k] = errors[k].properties.message
        }
      })
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
            if (item.city && !item.placeLabel) {
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
  background-color: hsl(217, 71%, 53%);
  color: white;
  margin-left: 25vw;
  margin-right: 25vw;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
