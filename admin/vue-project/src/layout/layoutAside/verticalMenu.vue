<script setup lang="ts">

</script>

<template>
  <el-scrollbar>


    <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"

    >
      <el-menu-item index="/home">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="/system">
        <template #title>
          <el-icon>
            <HomeFilled/>
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/menu">
          <template #title>
            <el-icon>
              <Menu/>
            </el-icon>
            <span>菜单管理</span>
          </template>

        </el-menu-item>
        <el-menu-item index="/system/role">
          <el-icon>
            <IceCream/>
          </el-icon>
          角色管理
        </el-menu-item>
        <el-menu-item index="/system/user">
          <el-icon><User /></el-icon>
          用户管理
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/goods">
        <template #title>
          <el-icon><Handbag /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods/list">
          <template #title>
            <el-icon><GoodsFilled /></el-icon>
            <span>商品列表</span>
          </template>

        </el-menu-item>
        <el-menu-item index="/goods/category">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>商品分类</span>
          </template>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/401">
        <span>401页面</span>
      </el-menu-item>
      <el-menu-item index="/baidu">
        <span>百度</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>

</style>