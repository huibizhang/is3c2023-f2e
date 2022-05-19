<template>
  <a :href="link" target="_blank">
    <button
      class="flex items-center justify-center space-x-2 rounded bg-gray-200 px-4 py-2 text-lg font-bold text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 hover:text-blue-400 active:scale-95"
    >
      <span> {{ text }} </span>
      <div class="h-5 w-5">
        <slot>
          <svg
            class="h-full w-full fill-current stroke-current"
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
        </slot>
      </div>
    </button>
  </a>
</template>

<script>
export default {
  name: 'LinkOutButton',
  props: {
    text: '',
    link: '',
  },
}
</script>

<style></style>
