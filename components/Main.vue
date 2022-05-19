<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <!-- Header (最上面的功能列) -->
    <Header @menuClick="sideBarTrigger" :routes="routes.routes" />

    <div
      class="h-[calc(100vh-3.5rem)] w-screen flex-none overflow-y-auto bg-gray-100"
    >
      <div
        class="inset-0 mx-auto flex min-h-full w-full flex-1 flex-col items-center justify-between bg-white transition-all sm:max-w-4xl"
      >
        <!-- Page Content (頁面內容) -->
        <main class="flex min-h-0 max-w-full flex-none flex-col">
          <!-- Banner -->
          <img
            class="pointer-events-none w-full"
            src="/images/top.jpg"
            alt="banner"
          />

          <!-- 頁面層級定位元件 -->
          <Location v-bind="{ pageName, isHome }" />

          <div class="min-h-0 flex-1 space-y-5 p-3 sm:px-8">
            <!-- 實際頁面內容插入點 -->
            <slot />
          </div>
        </main>

        <!-- Footer (最底下的) -->
        <Footer />
      </div>
    </div>

    <!-- Drawer 抽屜選單 -->
    <Drawer
      v-bind="{
        opened: sideBarOpened,
        links: routes.getLinks(),
        sideBarTrigger: sideBarTrigger,
      }"
    />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Drawer from './Drawer.vue'
import Location from './Location.vue'

import myRoutes from './Routes'

export default {
  props: ['pageName', 'isHome'],
  data() {
    return {
      routes: new myRoutes(),
      sideBarOpened: false,
    }
  },
  methods: {
    sideBarTrigger() {
      this.sideBarOpened = !this.sideBarOpened
    },
  },
  components: {
    Header,
    Footer,
    Drawer,
    Location,
  },
}
</script>
