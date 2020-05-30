<template>
    <section>
        <h1 class="title">Rain Data</h1>
        <div class="volunteerform container">
        <b-field label="Rain in mm" type="is-primary" class="info">
            <b-input  placeholder="Enter rain data in mm"></b-input>
        </b-field>
        <b-field label="Notes" type="is-primary" class="info">
            <b-input placeholder="Any notes"></b-input>
        </b-field>
        <b-field>
                <button class="button is-primary">
                    Add Data
                </button>
        </b-field>
        </div>
    </section>
</template>


<script>
export default {
  name: 'AddData',
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
     margin-top:10vw;
     background-color:hsl(217, 71%, 53%);
     color: white;
     margin-left: 25vw;
     margin-right: 25vw;
     padding-top: 10px;
     padding-bottom: 10px;
 }
</style>
