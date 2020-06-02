<template>
  <section class="main container">
    <h1 class="title">Add Today's Rain Measurement</h1>
    <form @submit="submitForm">
      <b-field label="Gauge" type="is-primary" class="info">
        <b-select v-model="form.gid" expanded>
          <option
            v-for="gauge in gauges"
            :value="gauge._id"
            :key="gauge._id">
            {{ gauge.name }}
          </option>
        </b-select>
      </b-field>
      <b-field label="Did it rain today ?">
        <b-checkbox v-model="rainToday"
          true-value="Yes"
          false-value="No">
          {{ rainToday ? 'Yes' : 'No' }}
        </b-checkbox>
      </b-field>
      <b-field label="Rain in mm" type="is-primary" class="info" v-if="rainToday === 'Yes'">
        <b-input v-model="form.measurement" placeholder="Enter rain data in mm"></b-input>
      </b-field>
      <b-field label="Notes" type="is-primary" class="info">
        <b-input v-model="form.notes" placeholder="Any notes"></b-input>
      </b-field>
      <b-field>
        <button class="button is-primary">
          Add Today's Data
        </button>
      </b-field>
    </form>
  </section>
</template>


<script>
export default {
  name: 'AddData',

  data () {
    return {
      gauges: {},
      rainToday: 'No',
      form: {
        gid: '',
        measurement: 0,
        notes: ''
      }
    }
  },

  methods: {
    init () {
      this.axios.get(this.$API.gauge.getMine).then((response) => {
        this.gauges = response.data
        this.form.gid = this.gauges[0]._id
      })
    },

    submitForm (e) {
      e.preventDefault()

      this.axios.post(this.$API.rain.add, this.form).then((response) => {
        if (response.status !== 201) {
          this.$buefy.toast.open(`Added today's data`)
        }
      })
      this.$buefy.toast.open(`Added today's data`)
    }
  },

  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
