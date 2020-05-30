<template>
  <div>
    <div>
     <h1 class="title">Rain Fall Data</h1>
      <section class="hero is-light is-medium main-container">
        <div class="hero-body">
          <div class="container ">
            <div>
                <p>Map Goes Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="sec-container">
        <div>
            <h3 class="about-title"> About What's Our Weather</h3>
            <p class="about-text"> 
                WOW is a grassroots volunteer 
                network of backyard weather observers of all ages and backgrounds 
                working together to measure and map precipitation (rain, hail and snow) in t
                heir local communities. By using low-cost measurement tools, stressing 
                training and education, and utilizing an interactive Web-site, our aim is 
                to provide the highest quality data for natural resource, education and 
                research applications. The only requirements to join are an enthusiasm for watching 
                and reporting weather conditions and a desire to learn more about how weather can affect and impact our lives.
            </p>
        </div>
        <div>
            <router-link to="/volunteer" class="button is-primary" v-if="!user">
                        <strong>Volunteer</strong>
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>
 .main-container{
     margin-left: 4vw;
     margin-right: 4vw;
     margin-top: -1vw;
 }
 .title{
     margin-top:2vw;
     background-color:hsl(217, 71%, 53%);
     color: white;
     margin-left: 4vw;
     margin-right: 4vw;
     padding-top: 10px;
     padding-bottom: 10px;
 }
 .sec-container{
     margin-left: 4vw;
     margin-right: 4vw;
     margin-top: 1vw;
     
 }
 .about-title{
     font-weight: bold;
     font-size: 20px;
     text-align: justify;
 }
 .about-text{
     text-align: justify;
 }
 .button{
     margin-top: 1vw;
     float: right;
 }
</style>