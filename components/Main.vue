<template>
  <div class="flex min-h-screen flex-col">
    <Header v-bind="{ sideBarTrigger: sideBarTrigger }" />
    <div class="flex-1 space-y-5 p-3">
      <slot />
    </div>
    <Footer />

    <!-- SideBar -->
    <SideBar
      v-bind="{
        opened: sideBarOpened,
        links: routes.getLinks(),
        sideBarTrigger: sideBarTrigger,
      }"
    />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import SideBar from './Drawer.vue'

import myRoutes from './Routes'

export default {
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
    SideBar,
  },
}
</script>
