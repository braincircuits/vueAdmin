<script setup lang="ts"></script>

<template>
  <el-main class="layout-main">
    <el-scrollbar>
      <div class="layout-main-warp">
        <router-view v-slot="{Component}">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="['SystemMenu']">
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>

      </div>
    </el-scrollbar>
  </el-main>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>