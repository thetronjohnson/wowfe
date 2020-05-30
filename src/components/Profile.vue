<template>
    <section>
        <h1 class="title" id="profile"> {{ name }}'s Profile</h1>
        <div class="loginform container">
        <b-field label="Name" type="is-primary" class="info" expanded>
            <b-input type="text" placeholder="Enter your name"></b-input>
        </b-field>
        
        <b-field grouped>
        <b-field label="Village" type="is-primary" class="info" expanded>
            <b-input type="text" placeholder="Enter your village name"></b-input>
        </b-field>
        <b-field label="Taluk" type="is-primary" class="info" expanded>
            <b-input type="text" placeholder="Enter your taluk name"></b-input>
        </b-field>
        </b-field>

        <b-field grouped>
        <b-field label="District" type="is-primary" class="info" expanded>
        <b-input type="text" placeholder="Enter your district name"></b-input>
        </b-field>
        <b-field label="Pin code" type="is-primary" class="info" expanded>
        <b-input type="text" placeholder="Enter your pincode"></b-input>
        </b-field>
        </b-field>

        <b-field>
                <button class="button is-primary">
                    Update
                </button>
        </b-field>
        </div>
    </section>
</template>


<script>


export default {
  name: 'Profile',
   data: function () {
    return {
      name: "Joe" 
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
