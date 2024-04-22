<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

interface IMenuItem {
  label: string
  icon: string
  path: string
}

const items = ref<IMenuItem[]>([
  {
    label: 'Authorization',
    icon: 'pi pi-user',
    path: '/auth'
  },
  {
    label: 'Add',
    icon: 'pi pi-plus',
    path: '/'
  },
  {
    label: 'List of interviews',
    icon: 'pi pi-list',
    path: '/list'
  },
  {
    label: 'Statistics',
    icon: 'pi pi-chart-pie',
    path: '/statistic'
  }
])
</script>

<template>
  <app-menubar :model="items" class="menu">
    <template #item="{ item, props }">
      <router-link :to="item.path" class="flex align-items-center" v-bind="props.action">
        <span :class="item.icon" class="p-menuitem-icon" />
        <span class="ml-2">{{ item.label }}</span>
      </router-link>
    </template>
    <template #end>
      <span class="flex align-items-center menu-exit">
        <span class="pi pi-sign-out p-menuitem-icon" />
        <span class="ml-2">Sign Out</span>
      </span>
    </template>
  </app-menubar>
</template>

<style scoped>
.menu {
  margin: 30px 0;
}

.menu-exit {
  cursor: pointer;
}
</style>
