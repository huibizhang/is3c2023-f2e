<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <!-- Header (最上面的功能列) -->
    <Header @menuClick="sideBarTrigger" />

    <div class="flex w-screen flex-1 flex-col justify-between overflow-y-auto">
      <!-- Page Content (頁面內容) -->
      <main class="flex min-h-0 flex-none flex-col">
        <!-- Banner -->
        <img
          class="w-full"
          src="/images/banner-sun_moon_lake.jpg"
          alt="banner"
        />

        <!-- 頁面層級定位元件 -->
        <Location v-bind="{ pageName, isHome }" />

        <div class="min-h-0 flex-1 space-y-5 p-3">
          <!-- 實際頁面內容插入點 -->
          <slot />
        </div>
      </main>

      <!-- Footer (最底下的) -->
      <Footer />
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
