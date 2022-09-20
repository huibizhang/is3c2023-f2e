<template>
  <div
    class="group flex h-12 w-96 cursor-pointer overflow-hidden rounded-lg shadow-md transition-all hover:bg-gray-50 active:scale-95"
    @click="download"
  >
    <div
      class="relative flex h-12 w-12 items-center justify-center bg-blue-50 p-2"
    >
      <docx-svg class="transition-all group-hover:opacity-0" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute h-7 w-7 text-blue-500 opacity-0 transition-all group-hover:opacity-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="flex h-12 items-center py-2 px-2.5">
      <span class="text-blue-600 transition-all group-hover:text-blue-500">{{
        filename
      }}</span>
      <a ref="aTag" :href="link" target="_blank" />
    </div>
  </div>
</template>

<script>
import DocxSvg from '~/components/DocxSvg.vue'

export default {
  props: ['filename', 'link'],
  methods: {
    download() {
      this.$refs.aTag.click()
    },
  },
  components: {
    DocxSvg,
  },
}
</script>
