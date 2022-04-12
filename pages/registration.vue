<template>
  <Main pageName="Registration">
    <ContentBlock title="Registration">
      <div class="flex justify-center py-5">
        <a href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub">
          <div
            class="flex items-center justify-center space-x-2 rounded bg-gray-200 px-4 py-2 text-lg font-bold text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 hover:text-blue-400 active:scale-95"
            href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub"
          >
            <span> Go to Registration System</span>
          </div>
        </a>
      </div>
    </ContentBlock>
  </Main>
</template>

<script>
import Email from '~/components/Email.vue'

export default {
  name: 'Contact',
  data() {
    return {
      emails: ['is3c2020@ncut.edu.tw', 'is3c2020@gm.ncut.edu.tw'],
    }
  },
  components: {
    Email,
  },
}
</script>
