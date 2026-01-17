<template>
  <h2>Register</h2>
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="register">Register</button>
</template>

<script setup>
import { ref } from "vue";
import { registerUser } from "../firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = async () => {
  await registerUser(email.value, password.value);
  router.push("/");
};
</script>