<template>
  <div
    :class="[
      'absolute top-0 z-50 h-screen w-screen md:hidden',
      !opened && 'pointer-events-none',
    ]"
  >
    <!-- Overlay 背景遮擋 -->
    <div
      :class="[
        'h-full w-full bg-black/50 transition-all',
        opened ? 'opacity-100' : 'pointer-events-none opacity-0',
      ]"
      @click="sideBarTrigger"
    ></div>

    <!-- Drawer 選單本體 -->
    <div
      :class="[
        'absolute top-0 left-0 h-full w-2/3 max-w-[300px] bg-white transition-all',
        opened ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- 選單項目 -->
      <DrawerItem v-for="link in links" :key="link.name" v-bind="link">
        {{ link.name }}
      </DrawerItem>
    </div>
  </div>
</template>

<script>
import DrawerItem from './DrawerItem.vue'

export default {
  props: ['links', 'opened', 'sideBarTrigger'],
  components: {
    DrawerItem,
  },
}
</script>
