<template>
  <div class="home">
    <div class="card">
      <h1>Welcome 👋</h1>
      <p>You are logged in successfully</p>

      <div class="info">
        <div class="box">
          <h3>Vue</h3>
          <span>Frontend</span>
        </div>
        <div class="box">
          <h3>Firebase</h3>
          <span>Authentication</span>
        </div>
        <div class="box">
          <h3>Project</h3>
          <span>Completed</span>
        </div>
      </div>

      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  await signOut(auth);
  router.push("/login");
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #4f46e5, #22c55e);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
}

.card {
  background: white;
  padding: 40px;
  border-radius: 18px;
  width: 360px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.card h1 {
  margin-bottom: 10px;
  color: #111;
}

.card p {
  color: #555;
  margin-bottom: 25px;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.box {
  background: #f4f4f5;
  padding: 12px;
  border-radius: 10px;
  width: 30%;
}

.box h3 {
  margin: 0;
  color: #4f46e5;
}

.box span {
  font-size: 12px;
  color: #666;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #4f46e5;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #4338ca;
}
</style>