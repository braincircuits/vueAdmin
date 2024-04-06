<script setup lang="ts">
import {defineAsyncComponent} from "vue";
const Logo=defineAsyncComponent(()=>import('@/layout/layoutAside/logo.vue'))
const VerticalMenu=defineAsyncComponent(()=>import('@/layout/layoutAside/verticalMenu.vue'))
</script>

<template>
  <div class="h100">
    <el-aside class="layout-aside layout-aside-menu-200">
      <Logo/>
      <VerticalMenu/>
    </el-aside>
  </div>
</template>

<style scoped>

</style>