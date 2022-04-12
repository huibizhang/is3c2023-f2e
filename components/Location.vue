<template>
  <div class="flex items-center space-x-1 pt-4 pl-4">
    <a class="group flex items-center space-x-2" href="/"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
      <span :class="['group-hover:underline', !isHome && 'text-gray-500']">
        Home
      </span></a
    >
    <span class="text-gray-400" v-if="!isHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span class="font-bold" v-if="!isHome">{{ pageName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      default: '',
    },
    isHome: {
      default: false,
    },
  },
}
</script>

<style></style>
