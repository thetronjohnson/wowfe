<template>
  <div class="main">
    <div>
      <h1 class="title">What's Our Weather  ?</h1>
      <section class="hero is-light is-medium content">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 600px"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          />
          <span v-for="(marker, index) in markers" v-bind:key="index">
            <l-marker v-bind:lat-lng="marker.coord" @click="updateBase(marker.todayValue)">
              <l-popup>
                <div>{{ marker.name }}</div>
                <p>Has it rained today ? {{ marker.todayValue > 0 ? `Yes, ${marker.todayValue} mm` : 'No' }}</p>
                <p>Average Rainfall This Year {{ marker.avgYear }}</p>
              </l-popup>
            </l-marker>
          </span>
        </l-map>
      </section>
    </div>
    <div class="bar" v-if="city">
    <div class="columns is-success">
      <div class="column block">
         <h3 class="bar-data">District: {{ city }}</h3>
      </div>
      <div class="column block">
        <h3 class="bar-data">Rainfall: {{ rain }}</h3>
     </div>
      <div class="column block">
         <h3 class="bar-data">Temperature: {{ temp }}</h3>
      </div>
      <div class="column block">
         <h3 class="bar-data">Wind: {{ wind }}</h3>
      </div>
      <div class="column block">
         <h3 class="bar-data">Humidity: {{ humidity }}</h3>
      </div>      
    </div>
    </div>
    <div class="sec-container">
      <div>
        <h3 class="about-title">About What's Our Weather</h3>
        <p class="about-text">
          WOW is a grassroots volunteer
          network of backyard weather observers of all ages and backgrounds
          working together to measure and map precipitation (rain, hail and snow) in t
          heir local communities. By using low-cost measurement tools, stressing
          training and education, and utilizing an interactive Web-site, our aim is
          to provide the highest quality data for natural resource, education and
          research applications. The only requirements to join are an enthusiasm for watching
          and reporting weather conditions and a desire to learn more about how weather can affect and impact
          our lives.
        </p>
      </div>
      <div>
        <router-link to="/volunteer" class="button is-primary is-medium" v-if="!user">
          <strong>Volunteer</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng } from 'leaflet'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/marker-icon.png'),
  iconUrl: require('../assets/marker-icon.png'),
  shadowUrl: ''
})

export default {
  name: "Index",

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },

  data() {
    return {
      user: this.$store.state.loggedIn,

      city: false,
      rain: 2,
      temp: 27,
      wind: 12,
      humidity: 100,

      zoom: 8,
      center: latLng(10.2974, 76.3419),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      currentZoom: 11.5,
      currentCenter: latLng(10.2974, 76.3419),

      mapOptions: {
        zoomSnap: 0.5
      },

      markers: [
        // {
        // coord: latLng(10.2974, 76.3419),
        // name: 'Vassuvettan',
        // todayValue: '2',
        // avgYear: '4'
        // }
      ]
    }
  },

  methods: {
    initMap() {
      this.axios.get(this.$API.rain.measurements.hours24).then((response) => {
        response.data.forEach((item) => {
          this.markers.push({
            name: item.name,
            coord: latLng(item.lat, item.lng),
            place: item.place,
            avgYear: item.avgYear,
            todayMeasurement: parseInt(Math.random() * 10)
          })
        })
      })
    },

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    updateBase (r) {
      this.city = 'Chalakkudy'
      this.rain = r
    }
  },

  mounted() {
    this.initMap()
  }
};
</script>

<style scoped>
.main-container{
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: -1vw;
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
.hero{
  margin-left: 4vw;
  margin-right: 4vw;
}
.bar{
  margin-top:2vw;
  background-color:white;
  color: hsl(217, 71%, 53%);
  margin-left: 4vw;
  margin-right: 4vw;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.bar:hover{
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.bar-data{
  font-weight: bolder;
  color: black;
  text-align: left;
  padding-left:2vw;
  padding-top: 1vw;
}
</style>