<template>
    <section>
        <h1 class="title">Volunteer with WOW</h1>
        <div class="loginform container">
        <b-field label="Email" type="is-primary" class="info">
            <b-input  placeholder="Enter your email"></b-input>
        </b-field>
        <b-field label="Username" type="is-primary" class="info">
            <b-input maxlength="30" placeholder="Choose your username"></b-input>
        </b-field>
        <b-field label="Password" type="is-primary" class="info">
            <b-input type="password" placeholder="Enter your password"></b-input>
        </b-field>
        <b-field label="Confirm password" type="is-primary" class="info">
            <b-input type="password" placeholder="Confirm your password"></b-input>
        </b-field>
        <b-field>
                <button class="button is-primary">
                    Register
                </button>
        </b-field>
        </div>
    </section>
</template>


<script>
export default {
  name: 'Volunteer',
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
