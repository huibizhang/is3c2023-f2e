<template>
  <div
    class="group relative flex overflow-hidden rounded-lg border transition-all"
  >
    <a :href="link" target="_blank" class="flex w-full">
      <div class="flex w-full flex-col p-2 shadow-md transition-all">
        <div class="aspect-[12/11] w-full flex-none overflow-hidden p-3 pb-0">
          <img
            v-if="img"
            :src="`/images/sponsors/2020/${img}`"
            :alt="name"
            class="h-full w-full object-contain"
          />
        </div>
        <div class="flex flex-1 items-center justify-center py-2 text-center">
          {{ name }}
        </div>
      </div>
    </a>
    <div
      v-if="link"
      class="absolute top-0 right-0 h-8 w-8 rounded-bl-md p-1.5 text-transparent transition-all group-hover:bg-gray-100 group-hover:text-gray-500"
    >
      <svg
        class="h-full w-full fill-current stroke-current"
        viewBox="0 0 48 48"
        xml:space="preserve"
      >
        <path
          d="M41,6.1L31.2,6c0,0,0,0,0,0c-0.5,0-1,0.4-1,1c0,0.6,0.4,1,1,1l7.4,0.1L24.3,22.3c-0.4,0.4-0.4,1,0,1.4   c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3L40,9.5l-0.1,7.4c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.5,0,1-0.4,1-1L42,7.1   C42,6.5,41.6,6.1,41,6.1z"
        />
        <path
          d="M38,20.5c-0.6,0-1,0.4-1,1V40H8V11h16.3c0.6,0,1-0.4,1-1s-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h31   c0.6,0,1-0.4,1-1V21.5C39,20.9,38.6,20.5,38,20.5z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsorCard',
  props: ['sid', 'type', '_order', 'name', 'img', 'link'],
}
</script>

<style></style>
