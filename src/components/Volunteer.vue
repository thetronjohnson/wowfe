<template>
  <section>
    <h1 class="title">Volunteer with WOW</h1>
    <form class="volunteerform container" @submit="submitForm" ref="form">
      <b-field label="Email" type="is-primary" class="info">
        <b-input v-model="form.email" placeholder="Enter your email"></b-input>
      </b-field>
      <b-field label="Username" type="is-primary" class="info">
        <b-input v-model="form.username" maxlength="30" placeholder="Choose your username"></b-input>
      </b-field>
      <b-field label="Password" type="is-primary" class="info">
        <b-input  v-model="form.password1" type="password" placeholder="Enter your password"></b-input>
      </b-field>
      <b-field label="Confirm password" type="is-primary" class="info">
        <b-input v-model="form.password2" type="password" placeholder="Confirm your password"></b-input>
      </b-field>
      <b-field>
        <b-button class="button is-primary" type="submit">
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
    submitForm (e) {
      e.preventDefault()

      if((this.form.password1 === this.form.password2) && this.form.username && this.form.email){
        return true;
      }

      this.errors = []

      if(!this.form.username){
        this.errors.push('Username is requiered');
      }

      if(!this.form.email){
        this.errors.push('Email is required')
      }

      if(this.form.password1 !== this.form.password2){
        this.errors.push('Entered password are not the same')
      }

      this.axios.post(this.$API.user.register, this.form).then((response) => {
        if (response.status === 201) {
          // TODO: add response.data.token to store, login the user using the token
        } else {
          // TODO: show response.errors.message
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
