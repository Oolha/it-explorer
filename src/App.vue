<script setup>
import HomepageView from './views/HomapageView.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
</script>

<template>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
