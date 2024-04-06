<script lang="ts">
export default {
  name: 'SystemMenu'
}
</script>
<script setup lang="ts">
import {ref} from "vue";

const name = ref('');
</script>

<template>
  <div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <div>菜单</div>
    <el-input v-model="name"/>
  </div>
</template>

<style scoped>

</style>