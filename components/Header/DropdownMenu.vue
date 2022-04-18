<template>
  <div
    class="absolute z-20 w-48 overflow-hidden rounded-t-md rounded-b-md border bg-white shadow-lg group-hover:rounded-b-md group-hover:rounded-t-none"
  >
    <div
      v-for="child in children"
      :key="child.name"
      class="border-t first:border-t-0"
    >
      <a :href="child.link">
        <div class="px-5 py-3 font-bold transition-all hover:bg-gray-100">
          {{ child.name }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['children'],
}
</script>

<style></style>
