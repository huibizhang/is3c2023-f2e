<template>
  <div class="w-full max-w-xl overflow-hidden rounded-lg border shadow-md">
    <div class="flex justify-between bg-gray-100">
      <div class="rounded-br-lg bg-green-600 py-1 px-5 font-bold text-white">
        {{ `IS-${toNN(index + 1)}` }}
      </div>
      <a
        v-if="more"
        :href="`/files/special-session-proposals/${more}`"
        target="_blank"
      >
        <div
          class="flex items-center space-x-1 rounded-bl-lg px-3 text-gray-500 transition-all hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
          <div class="py-1">more...</div>
        </div>
      </a>
    </div>
    <div class="border-b bg-gray-100 py-2 px-3 font-bold">
      {{ name }}
    </div>
    <div class="flex flex-col space-y-2 p-2.5 pb-4 sm:flex-row sm:space-y-0">
      <div class="sm:flex-1">
        <div class="py-1 font-bold text-gray-500">Organizer</div>
        <div class="pl-2">
          <div v-for="org in organizer" :key="org">{{ org }}</div>
        </div>
      </div>
      <div
        v-if="contact.length"
        class="border-t pt-1 sm:flex-1 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-3"
      >
        <div class="py-1 font-bold text-gray-500">Contact</div>
        <div class="pl-2">
          <div v-for="c in contact" :key="c">
            <a class="link" :href="`mailto:${c}`">{{ c }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialSessionCard',
  props: ['index', 'name', 'organizer', 'contact', 'note', 'more'],
  methods: {
    toNN(input) {
      return input < 10 ? `0${input}` : `${input}`
    },
  },
}
</script>

<style></style>
