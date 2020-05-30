<template>
  <section>
    <h1 class="title">Log in</h1>
    <form class="loginform container" @submit="submitForm">
      <b-field label="Username" type="is-primary" class="info">
        <b-input maxlength="30" placeholder="Enter your username"></b-input>
      </b-field>

      <b-field label="Password" type="is-primary" class="info">
        <b-input type="password" placeholder="Enter your password"></b-input>
      </b-field>
      <b-field>
        <button class="button is-primary">
          Login
        </button>
      </b-field>
    </form>
  </section>
</template>


<script>
export default {
  name: 'Login',

  methods: {
    submitForm (e) {
      e.preventDefault()

      this.axios.post(this.$API.user.login, this.form).then((response) => {
        if (response.status === 200) {
          // TODO: store response.data.tokens
        } else {
          // TODO: show response.error
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginform{
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
     margin-top:10vw;
     background-color:hsl(217, 71%, 53%);
     color: white;
     margin-left: 25vw;
     margin-right: 25vw;
     padding-top: 10px;
     padding-bottom: 10px;
 }
</style>
