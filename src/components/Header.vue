<script setup lang="ts">

</script>

<template>
  <n-layout-header bordered class="nav">
    <div>
      <div class="nav-menu">
        Header
      </div>
    </div>
  </n-layout-header>
</template>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 8px;
}
</style>