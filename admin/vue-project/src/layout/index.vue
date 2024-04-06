<script setup lang="ts">
import {defineAsyncComponent} from "vue";
const LayoutAside=defineAsyncComponent(()=>import('./layoutAside/index.vue'))
const LayoutHeader=defineAsyncComponent(()=>import('./layoutHeader/index.vue'))
const LayoutMain=defineAsyncComponent(()=>import('./layoutMain/index.vue'))
</script>

<template>
  <el-container class="layout-container">
    <!--左侧菜单-->
    <LayoutAside/>
    <el-container direction="vertical">
      <!--右侧头部-->
      <LayoutHeader/>
      <!--右侧主区域-->
      <LayoutMain/>
    </el-container>
  </el-container>
</template>

<style>

</style>