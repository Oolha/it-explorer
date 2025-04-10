<script setup>
import { reactive, watch } from 'vue'
import FormContainer from '../FormContainer.vue'
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: '',
})

watch(
  userData,
  () => {
    console.log('user data changed')
  },
  { immediate: true },
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userData)">
    <IInput
      class="mb-4"
      placeholder="email@gmail.com"
      v-model="userData.email"
      label="Електронна пошта"
    />
    <IInput type="password" placeholder="*******" v-model="userData.password" label="Пароль" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти </IButton>
  </FormContainer>
</template>
