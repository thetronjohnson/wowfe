<template>
  <section class="main container">
    <h1 class="title">Add Today's Rain Measurement</h1>
    <form @submit="submitForm">
      <b-field label="Gauge" type="is-success" class="info">
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
        <b-checkbox type="is-success" v-model="rainToday"
          true-value="Yes"
          false-value="No">
          {{ rainToday }}
        </b-checkbox>
      </b-field>
      <b-field grouped v-if="rainToday === 'Yes'">
        <b-field label="Rain in millimeter (mm)" v-bind:message="formError.measurement" expanded>
          <b-numberinput v-model="form.measurement" :type="formError.measurement ? 'is-danger' : 'is-primary'"  placeholder="Enter rain data in mm"></b-numberinput>
        </b-field>
        <b-field label="Measurement Time" :type="formError.measured ? 'is-danger' : 'is-primary'" v-bind:message="formError.measured" expanded>
          <datetime type="datetime" v-model="form.measured" format="yyyy-MM-dd HH:mm:ss" input-class="input"></datetime>
        </b-field>
      </b-field>
      <b-field label="Notes" type="is-success">
        <b-input v-model="form.notes" placeholder="Any notes"></b-input>
      </b-field>
      <b-field class="has-text-centered">
        <button class="button is-success is-medium">
          Add Today's Measurement
        </button>
      </b-field>
    </form>
  </section>
</template>

<script>
import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'AddData',

  components: {
    Datetime
  },

  data () {
    const formFields = {
      gid: '',
      measurement: '0',
      notes: ''
    }
    return {
      gauges: {},
      rainToday: 'No',

      formFields,
      form: {...formFields},
      formError: {}
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

      this.formError = {...this.formFields}

      if (this.rainToday === 'Yes' && isNaN(this.form.measurement)) {
        this.formError.measurement = 'A value is needed'
        return
      }

      this.axios.post(this.$API.rain.add, this.form).then((response) => {
        if (response.status !== 201) {
          this.$buefy.toast.open(`Added today's data`)
        }
      }).catch(e => {
        const errors = e.response.data.errors
        for (const k in errors) {
          this.formError[k] = errors[k].properties.message
        }
      })
    }
  },

  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mdi-minus:after {
  content: "-";
}
.mdi-plus:after {
  content: "+";
}
</style>
