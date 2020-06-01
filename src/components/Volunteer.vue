<template>
  <section>
    <h1 class="title">Volunteer with WOW</h1>
    <form class="volunteerform container" @submit="submitForm">
      <b-field label="Username" :type="formError.username ? 'is-danger' : 'is-primary'" v-bind:message="formError.username" class="info">
        <b-input v-model="form.username" placeholder="Choose your username"></b-input>
      </b-field>
      <b-field label="Email" :type="formError.email ? 'is-danger' : 'is-primary'" v-bind:message="formError.email" class="info">
        <b-input v-model="form.email" placeholder="Enter your email"></b-input>
      </b-field>
      <b-field label="Password" :type="formError.password ? 'is-danger' : 'is-primary'" v-bind:message="formError.password" class="info">
        <b-input v-model="form.password" type="password" placeholder="Enter your password"></b-input>
      </b-field>
      <b-field label="Confirm password" :type="formError.password2 ? 'is-danger' : 'is-primary'" v-bind:message="formError.password2" class="info">
        <b-input v-model="form.password2" type="password" placeholder="Confirm your password"></b-input>
      </b-field>
      <b-field>
        <b-button native-type="submit" class="button is-primary">
          Register
        </b-button>
      </b-field>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Volunteer',

  data () {
    const formFields = {
      email: '',
      username: '',
      password: '',
      password2: '',
    }
    return {
      formFields,
      form: {...formFields},
      formError: {}
    }
  },
  
  methods: {
    submitForm (e) {
      e.preventDefault()

      this.formError = {...this.formFields}

      if (!this.form.username){
        this.formError.username = 'Username is requiered';
        return
      }

      if (!this.form.email){
        this.formError.email = 'Email is requiered';
        return
      }

      if (this.form.password !== this.form.password2){
        this.formError.password2 = 'Both passwords are not the same';
        return
      }

      this.axios.post(this.$API.user.register, this.form).then((response) => {
        if (response.status === 201) {
          this.$store.commit('setToken', response.data.token)
          this.$router.push('/dashboard')
        }
      }).catch(e => {
        if (e.response.data.errmsg) {
          this.formError.username = e.response.data.errmsg
        } else {
          const errors = e.response.data.errors
          for (const k in errors) {
            this.formError[k] = errors[k].properties.message
          }
        }
      })
    },
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
