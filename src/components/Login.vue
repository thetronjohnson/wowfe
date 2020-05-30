<template>
<div class="loginclass">
  <div class="loginForm has-text-centered">
    <form>
      <label class="label">Username</label>
      <input type="text" class="input" id="username" name="username" v-model="username" placeholder="Enter your username">
      <label class="label">Password</label>
      <input type="password" class="input" id="password" name="password" v-model="password" placeholder="Enter your password">
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
