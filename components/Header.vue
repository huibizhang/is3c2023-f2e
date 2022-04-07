<template>
  <div class="flex-none">
    <NavBar @menuClick="sideBarTrigger" />
    <img class="w-full" src="banner-sun_moon_lake.jpg" alt="banner" />
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  props: ['sideBarTrigger'],
  components: {
    NavBar,
  },
}
</script>
