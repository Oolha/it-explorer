<script setup>
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
    @submit.prevent="emit('submit', toRaw(userData))"
  >
    <IInput class="mb-4" label="Повне імʼя" v-model="userData.name" />
    <IInput
      class="mb-4"
      label="Електронна адреса"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити акаунт</IButton>
  </form>
</template>
