<template>
  <div>
    <h2 class="group relative py-3 px-2 text-xl font-bold">
      <a
        :id="title"
        :href="`#${title}`"
        class="absolute top-0 -left-2 hidden py-3 text-xl font-bold text-green-600 hover:underline group-hover:inline-block"
        >#</a
      >
      {{ title }}
    </h2>
    <p :class="noPadding ? 'px-0' : 'px-2'">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
    },
    noPadding: {
      default: false,
    },
  },
}
</script>
