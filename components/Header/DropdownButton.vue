<template>
  <div class="group relative flex-none">
    <a :href="link">
      <div
        class="flex h-full items-center space-x-2 px-5 text-white/50 hover:bg-white/20"
      >
        <span class="hidden cursor-pointer font-bold text-white mdlg:inline">
          {{ name }}
        </span>
        <span class="cursor-pointer font-bold text-white mdlg:hidden">
          {{ shortName ? shortName : name }}
        </span>

        <svg
          :class="[
            'h-1.5 w-1.5 fill-current stroke-current',
            isGroup ? 'block' : 'hidden',
          ]"
          viewBox="0 0 24 24"
        >
          <polygon points="0,8 24,8 12,24" />
        </svg>
      </div>
      <div
        v-if="isGroup"
        class="pointer-events-none relative bottom-6 opacity-0 transition-all group-hover:pointer-events-auto group-hover:bottom-0 group-hover:opacity-100"
      >
        <DropdownMenu v-bind="{ children }" />
      </div>
    </a>
  </div>
</template>

<script>
import DropdownMenu from './DropdownMenu.vue'

export default {
  props: ['name', 'shortName', 'link', 'isGroup', 'children'],
  components: {
    DropdownMenu,
  },
}
</script>
