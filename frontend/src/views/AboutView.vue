<script setup lang="ts">
import { onMounted, ref } from "vue";
import { hello, type IpData } from "@/apis/hello";

const res = ref<IpData>();
onMounted(async () => {
  res.value = await hello();
  console.log(res.value);
});
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
    </div>
    <div>
      用于测试 Vue 3 项目使用 GitHub Actions 在 GitHub Pages 上的自动部署
    </div>
    <div>
      <p>{{ res?.ip }}</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
}
</style>
