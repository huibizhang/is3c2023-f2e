<template>
  <label class="relative w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      class="peer w-full rounded-md border p-3 outline-0 placeholder:text-transparent"
      :class="[err && 'border-red-400']"
      v-model="inputVal"
      :name="name"
    />
    <label
      class="pointer-events-none absolute -top-4 left-3 bg-white px-3 text-green-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:bg-white peer-focus:px-3 peer-focus:text-green-500"
      >{{ placeholder }}</label
    >
  </label>
</template>

<script>
export default {
  props: {
    placeholder: { default: '' },
    value: { default: '' },
    type: { default: 'text' },
    err: { default: false },
    name: { default: '' },
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style></style>
