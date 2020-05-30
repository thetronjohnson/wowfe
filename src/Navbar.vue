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
                    <a class="avatar" v-if="user">
                      <img/>
                    </a>
                    <router-link to="/login" class="button is-light" v-if="!user">
                        Log in
                    </router-link>
                    <a class="button is-danger" v-if="user">
                        Log out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
      return{
        // if user is logged in then show log out and avatar, else show login adn volunteer
        user:false
      }
}
}
</script>
