<script setup lang="ts">
import {onMounted, ref} from "vue";

const count = ref<number>(0);
const loading = ref<boolean>(true);
const error = ref<string>("");

onMounted(() => {
  updateCount();
});

function updateCount() {
  loading.value = true;
  fetch("/api/count")
      .then((response) => response.json())
      .then((data) => {
        count.value = data;
        loading.value = false;
      })
      .catch((err) => {
        console.error("获取访问次数失败:", err);
        error.value = "获取失败";
        loading.value = false;
      });
}
</script>

<template>
  <div class="container">
    <h1>🎉 欢迎来到nginx测试部署系统</h1>
    <p>这是一个基于 Spring Boot 的简单应用。</p>

    <div class="count-container">
      <h2>访问次数统计</h2>
      <div class="count-value">
        <span v-if="loading">加载中...</span>
        <span v-else-if="error">{{ error }}</span>
        <span v-else>{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

.container {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 40px auto;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 18px;
}

p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.count-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0;
}

.count-value {
  font-size: 36px;
  font-weight: bold;
  color: #1890ff;
}
</style>
