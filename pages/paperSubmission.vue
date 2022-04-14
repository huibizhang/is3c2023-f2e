<template>
  <Main pageName="Paper Submission">
    <ContentBlock title="Submission system website">
      <div class="flex justify-center py-5">
        <a href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub">
          <div
            class="flex items-center justify-center space-x-2 rounded bg-gray-200 px-4 py-2 text-lg font-bold text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 hover:text-blue-400 active:scale-95"
            href="https://conference.iis.sinica.edu.tw/surl/is3c2020/sub"
          >
            <span> Submit A Full Paper Here </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </a>
      </div>

      Papers submitted must be written in English. All submissions must be made
      electronically using PDF format via the submission system website.
    </ContentBlock>
    <hr />
    <ContentBlock>
      Papers submitted for reviews may be up to 6 pages. However, the final
      version of accepted papers for publication allows only 4 pages. All
      accepted papers will be submitted to
      <a class="link" href="http://ieeexplore.ieee.org/Xplore/guesthome.jsp"
        >IEEE Xplore</a
      >, which will be applied for EI Compendex/ISTP index. (Download
      <a class="link" href="/files/conference-template-a4.docx"
        >paper template</a
      >
      for the proceeding of IS3C2020). Papers longer than 4 pages will be
      charged additional NTD 3,000 (~USD100) per page.
    </ContentBlock>
    <ContentBlock title="Please Notice" level="2">
      <!-- Please notice: -->
      Papers that do not follow the IEEE format requirement may be rejected by
      IEEE Xplore, and subsequently result in exclusion from EI&ISI index.
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
  head() {
    return {
      title: `Paper Submission | ${this.$title}`,
    }
  },
}
</script>
