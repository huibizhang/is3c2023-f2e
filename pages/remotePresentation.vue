<template>
  <Main pageName="Remote Presentation">
    <ContentBlock title="Remote Presentation">
      <div class="flex flex-col items-center justify-center space-y-10 py-5">
        <div class="flex w-full justify-end">
          <div
            v-if="mode === 'login'"
            class="flex cursor-pointer items-center space-x-1 rounded-md bg-gray-200 px-4 py-2 text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95"
            @click="changeMode('upload')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="font-bold">Upload Video</span>
          </div>
          <div
            v-if="mode === 'upload'"
            class="flex cursor-pointer items-center space-x-1 rounded-md bg-gray-200 px-4 py-2 text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95"
            :class="[
              program !== 'selectFile' &&
                program !== 'done' &&
                'pointer-events-none scale-0 opacity-0',
            ]"
            @click="changeMode('login')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            <span class="font-bold">Login</span>
          </div>
          <div
            v-if="mode === 'list'"
            class="flex cursor-pointer items-center space-x-1 rounded-md bg-gray-200 px-4 py-2 text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 active:scale-95"
            @click="logout()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span class="font-bold">Logout</span>
          </div>
        </div>
        <LoginForm
          v-if="mode == 'login'"
          @login="login($event)"
          author="true"
          @isAuthor="isAuthor = $event"
        />
        <LoginForm v-if="mode == 'login'" @login="login($event)" />

        <VideoUploadForm
          v-if="mode == 'upload'"
          @program="program = $event"
          @uploadPercentage="progress = $event"
        />

        <VideoList v-if="mode === 'list'" v-bind="{ isAuthor: isAuthor }" />
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import LinkOutButton from '~/components/LinkOutButton.vue'
import LoginForm from '~/components/RemotePresentation/LoginForm.vue'
import VideoUploadForm from '~/components/RemotePresentation/VideoUploadForm.vue'
import VideoList from '~/components/RemotePresentation/VideoList.vue'

export default {
  name: 'RemotePresentation',
  data() {
    return {
      mode: '',
      program: 'selectFile',
      isAuthor: false,
      pageTitle: 'Remote Presentation',
      progress: 0,
    }
  },
  mounted() {
    this.mode = this.$route.query['action'] ?? 'login'

    if (this.mode !== 'login' && this.mode !== 'upload') {
      this.mode = 'login'
    }
  },
  methods: {
    changeMode(mode) {
      this.mode = mode
      history.pushState(null, null, `?action=${mode}`)
    },
    login(status) {
      if (status) {
        this.mode = 'list'
      }
    },
    logout() {
      this.mode = 'login'
    },
  },
  watch: {
    progress(newVal) {
      if (this.program === 'uploading') {
        this.pageTitle = `${Math.round(
          newVal
        )}% Uploaded  - Remote Presentation`
      } else {
        this.pageTitle = 'Remote Presentation'
      }
    },
  },
  components: {
    LinkOutButton,
    LoginForm,
    VideoUploadForm,
    VideoList,
  },
  head() {
    return {
      title: `${this.pageTitle} | ${this.$title}`,
    }
  },
}
</script>
