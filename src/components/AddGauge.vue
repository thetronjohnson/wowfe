<template>
  <section>
    <h1 class="title">Add Rain Gauge</h1>
    <div class="gaugeform container">
      <b-field label="Gauge Name" type="is-primary" class="info">
        <b-input placeholder="Enter a name"></b-input>
      </b-field>
      <b-field grouped>
      <b-field label="Co-ordinates" type="is-primary" class="info" expanded>
        <b-input placeholder="Enter the coordinates of the gauge"></b-input>
      </b-field>
       <b-field label="Place name" type="is-primary" class="info" expanded>
        <b-input placeholder="Enter the place name"></b-input>
      </b-field>
      </b-field>
      <b-field grouped>
      <b-field label="District" type="is-primary" class="info" expanded>
        <b-input placeholder="Enter the district name"></b-input>
      </b-field>
       <b-field label="State" type="is-primary" class="info" expanded>
        <b-input placeholder="Enter the state name"></b-input>
      </b-field>
      </b-field>
      <b-field>
        <button class="button is-primary">Add Gauge</button>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddGauge"
};
</script>

<style scoped>
.gaugeform {
  margin-left: 25vw;
  margin-right: 25vw;
}
.info {
  text-align: left;
}
.button {
  float: left;
  margin-top: 1vw;
}
.title {
  margin-top: 10vw;
  background-color: hsl(217, 71%, 53%);
  color: white;
  margin-left: 25vw;
  margin-right: 25vw;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
