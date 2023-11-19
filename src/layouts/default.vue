<script setup lang="ts">

</script>

<template>
  <n-layout class="root-layout">
    <Header/>
    <n-layout
        class="center-layout"
        position="absolute"
        has-sider
    >
      <n-layout-sider
          :native-scrollbar="false"
          :collapsed-width="0"
          collapse-mode="transform"
          trigger-style="top: calc(50% + 10px);"
          collapsed-trigger-style="right: -20px; top: calc(50% + 10px);"
          bordered
          show-trigger="arrow-circle"
      >

      </n-layout-sider>
      <n-layout :native-scrollbar="false" class="content">
        <slot />
      </n-layout>
    </n-layout>
    <Footer />
  </n-layout>
</template>

<style scoped>

.root-layout {
  height: 100vh;
}

.center-layout {
  top: var(--header-height);
  bottom: var(--footer-height);
}

.content {
  padding: 8px;
}

</style>