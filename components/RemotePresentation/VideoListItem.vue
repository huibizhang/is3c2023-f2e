<template>
  <div
    class="flex w-full flex-col overflow-hidden rounded-md border bg-gray-50"
  >
    <div class="flex w-full min-w-0">
      <div
        class="flex flex-1 items-center overflow-hidden px-5 text-lg font-bold"
      >
        <div class="w-full truncate">
          {{ video_name }}
        </div>
      </div>
      <button
        class="flex h-10 w-10 flex-none items-center justify-center border-l text-blue-500"
        @click="watchVideo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="flex w-full overflow-hidden border-t">
      <video
        class="pointer-events-none aspect-video w-40 flex-none overflow-hidden bg-black"
        :src="`${$apiBase}/v?v=` + vid"
      ></video>
      <div class="flex w-full flex-1 flex-col overflow-hidden p-3">
        <div class="flex flex-none">
          <div class="flex flex-none flex-col">
            <div class="text-xs font-bold text-gray-400">Paper ID</div>
            <div class="text-sm">{{ paperID }}</div>
          </div>
          <div class="flex flex-1 flex-col items-end">
            <div class="text-xs font-bold text-gray-400">Author</div>
            <div class="text-sm">{{ author }}</div>
          </div>
        </div>
        <div class="flex flex-1 flex-col pt-2">
          <div class="text-xs font-bold text-gray-400">Field</div>
          <div class="w-full truncate text-sm">
            {{ field ? fields[field] : '' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: { default: '' },
    field: { default: '' },
    paperID: { default: '' },
    vid: { default: '' },
    video_name: { default: '' },
    email: { default: '' },
  },
  data() {
    return {
      fields: [
        'TRACK 1 - COMPUTER',
        'TRACK 2 - MULTIMEDIA & INTELLIGENT COMPUTING',
        'TRACK 3 - AIoT, ICT & SENSOR APPLICATIONS',
        'TRACK 4 - SEMICONDUCTOR DEVICES & INTEGRATED CIRCUITS',
        'TRACK 5 - CONSUMER ELECTRONICS',
        'TRACK 6 - RENEWABLE ENERGY',
        'TRACK 7 - SYSTEMS AND CONTROL',
        'TRACK 8 - DIGITAL SIGNAL PROCESSING',
        'TRACK 9 - ARTIFICIAL INTELLIGENCE AND COMPUTER ENGINEERING',
        'IS01 - Measured Signal Collection, Processing and Applications',
        'IS02 - Robust Control and Signal Processing',
        'IS03 - Advanced Computer Vision Technologies',
        'IS04 - Soft Computing and its Applications',
        'IS05 - Network Security Is Applied in the IoT System',
        'IS06 - Engineering Applications of Deep Learning and Artificial Intelligence (EADLAI)',
        'IS07 - Power Quality and Energy System',
        'IS08 - Computer Graphics Workshop 2023',
        'IS09 - Intelligent Computation and AIoT Applications',
      ],
    }
  },
  methods: {
    watchVideo() {
      // console.log(window)
      window.open('/video?v=' + this.vid, '_blank')
    },
  },
}
</script>

<style></style>
