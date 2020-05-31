<template>
    <b-navbar class="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="#"
                    alt="WOW"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }" >
                Home
            </b-navbar-item>
           <b-navbar-item tag="router-link" :to="{ path: '/faq' }" >
                FAQ
           </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/volunteer" class="button is-white" v-if="!user">
                        <strong>Volunteer</strong>
                    </router-link>
                    <router-link to="/profile" class="button is-white" v-if="user">
                        Profile
                    </router-link> 
                    <router-link to="/dashboard" class="button is-primary is-inverted" v-if="user">
                        Dashboard
                    </router-link>                      
                    <router-link to="/login" class="button is-light" v-if="!user">
                        Log in
                    </router-link>
                    <b-button class="button is-danger" v-if="user" @click="logOut">
                        Log out
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user () {
      // if user is logged in then show log out and avatar, else show login adn volunteer
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logOut () {
      this.$store.commit('logOut')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.avatar{
    color:white;
}
</style>