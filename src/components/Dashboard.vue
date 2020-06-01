<template>
  <div>
    <section>
      <div class="columns">
        <div class="column is-half">
          <router-link to="/add-data" class="button add-data is-primary">Add Today's Measurement</router-link>
          <h1 class="title" id="profile">{{ name }}'s Contributions</h1>
          <div class="container table">
            <b-table :data="data" :columns="columns"></b-table>
          </div>
        </div>
        <div class="column tiles">
          <div class="buttons">
            <router-link to="/add-gauge" class="button is-primary ">Add Gauge</router-link>
          </div>
          <div class="card" v-for="gauge in gauges" :key="gauge">
            <header class="card-header">
              <p class="card-header-title">{{gauge.name}}</p>
              <a href="#" class="card-header-icon" aria-label="more options">
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <p>{{gauge.place}}</p>
                <p>{{gauge.coordinates}}</p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Update</a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    const data = [
      { id: 1, Rain: "12", date: "2016-10-15 13:43:27" },
      { id: 2, Rain: "15", date: "2016-12-15 06:00:53" },
      { id: 3, Rain: "100", date: "2016-04-26 06:26:28" },
      { id: 4, Rain: "2", date: "2016-04-10 10:28:46" },
      { id: 5, Rain: "4", date: "2016-12-06 14:38:38" }
    ];
    const gauges = [];

    return {
      data,
      gauges,
      name: "Joe",
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "Rain",
          label: "Rain in mm",
          centered: true
        },
        {
          field: "date",
          label: "Date",
          centered: true
        }
      ]
    }
  },

  methods: {
    init() {
      this.axios.get(this.$API.gauge.getMine).then((response) => {
        this.gauges = response.data
      })
    }
  },

  mounted () {
    this.init()
  }
};
</script>
<style scoped>
.table {
  margin-left: 5vw;
  margin-right: 5vw;
}
.title {
  margin-top: 3vw;
  background-color: hsl(217, 71%, 53%);
  color: white;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vw;
  padding-bottom: 10px;
}
.button {
  margin-top: 1vw;
  position: relative;
}
.tiles {
  margin-top:3vw ;
  margin-left: 12vw;
  margin-right: 12vw;
}
p {
  font-size: 14px;
  text-align: justify;
  padding-left: 10px;
  padding-right: 10px;
}
.card{
    margin-bottom: 1vw;
}
.buttons{
    position: relative;
}
.add-data{
  float: left;
  margin-left: 5vw;
  margin-bottom: 2vw;
}
.is-half{
  margin-top: 2.5vw;
}
</style>