<template>
  <div class="border-b p-3 last:border-0">
    <div class="text-lg font-bold underline">{{ title }}</div>
    <div class="text-right text-sm text-gray-500">{{ date }}</div>
    <div class="contentBox mt-1" ref="contentBox"></div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: ['nid', 'title', 'date', 'content'],
  mounted() {
    this.$refs.contentBox.innerHTML = this.content
  },
}
</script>

<style lang="postcss">
.contentBox a {
  @apply text-blue-600 hover:text-blue-400 hover:underline;
}
</style>
