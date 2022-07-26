<template>
  <div class="overflow-hidden rounded-lg border shadow-md">
    <div class="bg-gray-200 p-3">
      <div class="flex items-center justify-between pb-0.5">
        <p class="text-lg font-bold italic text-gray-400">TOPIC :</p>
        <a class="link" :href="topic.link" target="_blank">
          <div
            class="h-6 w-6 rounded-md p-0.5 text-gray-500 transition-all hover:bg-gray-300"
          >
            <svg
              class="h-full w-full stroke-current"
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
        </a>
      </div>
      <div class="font-bold">{{ topic.name }}</div>
    </div>
    <div class="flex flex-col sm:flex-row">
      <div
        class="flex flex-none flex-col items-center justify-center space-y-2 py-2 sm:w-56 sm:justify-start"
      >
        <div class="aspect-[3/4] w-40 flex-none overflow-hidden rounded-lg">
          <img
            :src="img"
            class="h-full w-full object-cover"
            :alt="`Keynote Speaker: ${position} ${name}`"
          />
        </div>
        <div
          class="flex flex-1 items-center justify-center font-bold sm:flex-none"
        >
          {{ positionAtFront ? `${position} ${name}` : `${name} ${position}` }}
        </div>
      </div>
      <div class="flex flex-col space-y-3 pb-3">
        <div
          v-for="intro in introductions"
          :key="`${name}-${intro.name}`"
          class="border-t px-3"
        >
          <div class="my-2 text-lg font-bold text-green-800">
            {{ intro.name }}
          </div>
          <div v-if="intro.isHTML" v-html="intro.description"></div>
          <div v-else>{{ intro.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakerCard',
  props: [
    'name',
    'position',
    'img',
    'introductions',
    'topic',
    'positionAtFront',
  ],
}
</script>
