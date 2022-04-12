<template>
  <div class="border-b last:border-b-0 hover:bg-gray-200">
    <a class="block p-3" :href="link">
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'DrawerItem',
  props: {
    link: '',
    name: '',
  },
}
</script>
