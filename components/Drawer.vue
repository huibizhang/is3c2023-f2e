<template>
  <div
    :class="['absolute h-screen w-screen', !opened && 'pointer-events-none']"
  >
    <div
      :class="[
        'h-full w-full bg-black/50 transition-all',
        opened ? 'opacity-100' : 'pointer-events-none opacity-0',
      ]"
      @click="sideBarTrigger"
    ></div>
    <div
      :class="[
        'absolute top-0 left-0 h-full w-2/3 max-w-[300px] bg-white transition-all',
        opened ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div
        class="border-b p-3 last:border-b-0"
        v-for="link in links"
        :key="link.name"
      >
        {{ link.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links', 'opened', 'sideBarTrigger'],
}
</script>
