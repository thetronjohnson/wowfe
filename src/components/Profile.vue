<template>
  <section class="main container">
    <h1 class="title" id="profile"> {{ name }}'s Profile</h1>
    <div>
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
        <button class="button is-pulled-left is-primary">Update</button>
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
.info {
  //text-align: left;
}
</style>
