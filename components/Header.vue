<template>
  <div
    class="relative flex h-14 w-full flex-none items-end justify-center bg-green-600"
  >
    <div
      class="flex h-full w-full flex-none items-center justify-center text-xl font-bold text-white md:w-auto md:pr-8"
    >
      <a href="/"> IS3C 2023 </a>
    </div>

    <div class="hidden h-full md:flex">
      <a
        v-for="r in routes"
        :key="r.name"
        :href="r.link"
        class="group relative flex-none"
      >
        <div
          class="flex h-full items-center space-x-2 px-5 text-white/50 hover:bg-white/20"
        >
          <span class="hidden cursor-pointer font-bold text-white mdlg:inline">
            {{ r.name }}
          </span>
          <span class="cursor-pointer font-bold text-white mdlg:hidden">
            {{ r.shortName ? r.shortName : r.name }}
          </span>

          <svg
            :class="[
              'h-1.5 w-1.5 fill-current stroke-current',
              r.isGroup ? 'block' : 'hidden',
            ]"
            viewBox="0 0 24 24"
          >
            <polygon points="0,8 24,8 12,24" />
          </svg>
        </div>
        <div
          v-if="r.isGroup"
          class="relative bottom-0 hidden group-hover:block"
        >
          <div
            class="absolute z-20 w-48 overflow-hidden rounded-b-md border bg-white shadow-lg"
          >
            <div
              v-for="child in r.children"
              :key="child.name"
              class="border-t first:border-t-0"
            >
              <a :href="child.link">
                <div
                  class="px-5 py-3 font-bold transition-all hover:bg-gray-100"
                >
                  {{ child.name }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>

    <!-- Action Button -->
    <div class="absolute left-0 aspect-square h-full p-1.5 md:hidden">
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
export default {
  props: ['routes'],
}
</script>
