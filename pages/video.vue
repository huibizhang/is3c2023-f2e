<template>
  <div class="flex h-screen w-screen flex-col overflow-hidden">
    <div
      class="relative flex h-14 w-full flex-none items-center justify-center bg-green-600"
    >
      <div>
        <div
          class="flex w-full flex-none items-center justify-center text-xl font-bold text-gray-300"
        >
          IS3C 2023
        </div>
        <div class="-mt-1 text-sm text-green-900">
          Remote Presentation System
        </div>
      </div>
    </div>

    <div
      class="flex min-h-0 w-full flex-1 flex-col items-center overflow-y-auto bg-gray-900"
    >
      <video
        class="aspect-video max-h-[600px] w-full flex-none bg-black"
        :src="`${$apiBase}/v?v=` + vid"
        controls
      ></video>

      <div class="flex w-full flex-1 flex-col items-center p-5 text-white">
        <div
          class="w-full border-b border-gray-800 px-5 pb-5 text-xl font-bold"
        >
          {{ videoData.video_name }}
        </div>
        <div
          class="mt-3 flex w-full flex-col overflow-hidden rounded-md border border-gray-800 bg-black/10 p-5"
        >
          <div class="flex flex-none">
            <div class="flex flex-none flex-col">
              <div class="text-xs font-bold text-gray-400">Paper ID</div>
              <div class="">{{ videoData.paperID }}</div>
            </div>
            <div class="flex flex-1 flex-col items-end">
              <div class="text-xs font-bold text-gray-400">Author</div>
              <div class="">{{ videoData.author }}</div>
            </div>
          </div>
          <div class="flex flex-1 flex-col pt-5">
            <div class="text-xs font-bold text-gray-400">Field</div>
            <div class="w-full">
              {{ videoData.field ? fields[videoData.field] : '' }}
            </div>
          </div>
        </div>

        <div
          class="mt-5 flex h-10 w-full max-w-xs rounded-md border border-gray-700 bg-gray-800"
        >
          <div class="flex flex-1 items-center justify-center text-gray-200">
            {{ videoData.email }}
          </div>
          <button
            class="flex flex-none items-center border-l border-gray-700 bg-green-700 px-5 text-xs font-bold transition-all hover:bg-green-600 active:bg-green-800"
            @click="contact"
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vid: '',
      videoData: {},
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
  mounted() {
    this.vid = this.$route.query['v'] ?? ''

    if (!this.vid) {
      windows.close()
    }

    const url = `${this.$apiBase}/video_data.php?v=${this.vid}`

    this.$axios
      .get(url, { withCredentials: true })
      .then((e) => {
        if (e.data.status) {
          this.videoData = e.data.data
        } else {
          console.log(e.data.error_msg)
        }
      })
      .catch((error) => console.log(error))
  },
  methods: {
    contact() {
      // console.log(window)
      window.open('mailto:' + this.videoData.email, '_blank')
    },
  },
  head() {
    return {
      title: `Remote Presentation System | ${this.$title}`,
    }
  },
}
</script>

<style></style>
