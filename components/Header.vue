<template>
  <div
    class="relative flex h-14 w-full flex-none items-end justify-center bg-green-600"
  >
    <div
      class="flex h-full w-full items-center justify-center text-xl font-bold text-white"
    >
      <a href="/"> IS3C 2023 </a>
    </div>

    <!-- Action Button -->
    <div class="absolute left-0 aspect-square h-full p-1.5">
      <div
        class="rounded-ful rounded-full p-1.5 text-white/70 transition-all hover:bg-white/30 active:scale-90"
        @click="$emit('menuClick')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
