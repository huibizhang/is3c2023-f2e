<template>
  <div class="flex w-full flex-col items-center">
    <div class="w-full max-w-md" v-if="isAuthor">
      <div class="flex w-full items-center justify-between">
        <div class="flex-1 p-3 text-xl font-bold text-gray-400">Your Video</div>
        <div class="flex-none p-3 text-sm font-bold text-gray-600">
          Welcome, {{ author.author }}
        </div>
      </div>
      <div class="w-full overflow-hidden rounded-md border bg-gray-50">
        <video
          class="aspect-video w-full bg-black"
          :src="`${$apiBase}/v?v=` + author.vid"
          controls
        ></video>
        <div class="py-3 px-5">
          <div class="text-lg font-bold">
            {{ author.video_name ? author.video_name : 'vidoeName' }}
          </div>
          <div class="mt-3 flex border-t pt-3">
            <div class="flex flex-none flex-col">
              <div class="text-xs font-bold text-gray-400">Paper ID</div>
              <div class="text-sm">{{ author.paperID }}</div>
            </div>
            <div class="flex flex-1 flex-col items-end">
              <div class="text-xs font-bold text-gray-400">Field</div>
              <div class="text-sm">{{ fields[author.field] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex w-full max-w-xl flex-col space-y-3"
      :class="[isAuthor && 'mt-10 ']"
    >
      <div class="flex-1 p-3 pb-0 text-xl font-bold text-gray-400">
        Video List
      </div>
      <VideoListItem v-for="item of list" :key="item.paperID" v-bind="item" />
    </div>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
  components: { VideoListItem },
  props: ['isAuthor'],
  data() {
    return {
      author: {},
      list: [],
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
    const url = `${this.$apiBase}/video_list.php`

    this.$axios
      .get(url, { withCredentials: true })
      .then((e) => {
        if (e.data.status) {
          this.author = e.data.author
          this.list = e.data.results
        } else {
          console.log(e.data.error_msg)
        }
      })
      .catch((error) => console.log(error))
  },
}
</script>

<style></style>
