<template>
  <h2>Login</h2>
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="login">Login</button>
</template>

<script setup>
import { ref } from "vue";
import { loginUser } from "../firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  await loginUser(email.value, password.value);
  router.push("/");
};
</script>