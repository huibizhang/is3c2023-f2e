<template>
  <div class="mt-5">
    <div class="py-2 text-lg font-black text-[red]">
      {{ `TRACK${index + 1} - ${name}` }}
    </div>
    <ul class="pl-4">
      <li v-for="d in descriptions" :key="d" class="list-disc">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TrackCard',
  props: ['index', 'name', 'descriptions'],
}
</script>

<style></style>
