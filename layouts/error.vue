<template>
  <Main pageName="Not Found">
    <div class="mt-16 flex flex-col items-center space-y-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-red-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="flex flex-col space-y-3 text-center">
        <span class="text-3xl font-bold text-gray-500"> 404 </span>
        <span class="text-xl font-bold text-gray-500">
          The page could not be found
        </span>
        <a class="text-blue-700 underline hover:text-blue-500" href="/"
          >Back to homepage</a
        >
      </div>
    </div>
  </Main>
</template>

<script>
export default {}
</script>
