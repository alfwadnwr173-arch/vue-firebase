<template>
  <h1>Welcome to Home page</h1>
  <p>you are logged in successfully</p>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { logoutUser } from "../firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  await logoutUser();
  router.push("/login");
};
</script>