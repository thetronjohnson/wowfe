<template>
  <section>
    <h1 class="title">Add Today's Rain Measurement</h1>
    <form class="volunteerform container" @submit="submitForm">
      <b-field label="Guage" type="is-primary" class="info">
        <b-select expanded>
          <option selected>Guage 1</option>
          <option>Guage 2</option>
        </b-select>
      </b-field>
      <b-field label="Did it rain today ?">
        <b-checkbox v-model="rainToday"
          true-value="Yes"
          false-value="No">
          {{ rainToday ? 'Yes' : 'No' }}
        </b-checkbox>
      </b-field>
      <b-field label="Rain in mm" type="is-primary" class="info" v-if="rainToday">
        <b-input v-model="form.measurement" placeholder="Enter rain data in mm"></b-input>
      </b-field>
      <b-field v-model="form.notes" label="Notes" type="is-primary" class="info">
        <b-input placeholder="Any notes"></b-input>
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
      rainToday: false,
      form: {
        measurement: -1,
        notes: ''
      }
    }
  },

  methods: {
    submitForm (e) {
      e.preventDefault()

      this.axios.post(this.$API.rain.add, this.form).then((response) => {
        if (response.status !== 201) {
          this.$buefy.toast.open(`Added today's data`)
        }
      })
      this.$buefy.toast.open(`Added today's data`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.volunteerform{
  margin-left: 25vw;
  margin-right: 25vw;
}
.info{
  text-align: left;
}
.button{
  float: left;
  margin-top: 1vw;
}
 .title{
     margin-top:5vw;
     background-color:hsl(217, 71%, 53%);
     color: white;
     margin-left: 25vw;
     margin-right: 25vw;
     padding-top: 10px;
     padding-bottom: 10px;
 }
</style>
