<template>
  <Main pageName="Paper Submission">
    <ContentBlock title="Submission System">
      <!-- <div
        class="inset-0 mx-auto my-10 flex w-5/6 max-w-xl items-center justify-center rounded-md bg-gray-100 py-10 text-xl font-bold text-gray-500"
      > -->
      <!-- Under construction. -->
      <!-- Coming Soon.
      </div> -->
      <div class="flex justify-center py-5">
        <LinkOutButton
          link="https://conference.iis.sinica.edu.tw/surl/is3c2023/sub"
          text="Submit Your Abstract Here"
        >
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
        </LinkOutButton>
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
      for the proceeding of IS3C2023). Papers longer than 4 pages will be
      charged additional NTD 3,000 (~USD100) per page.

      <div class="flex w-full flex-col items-center space-y-4 p-5">
        <FileLink v-for="file in files" :key="file.filename" v-bind="file" />
      </div>
    </ContentBlock>
    <ContentBlock title="Please Notice" level="2">
      <!-- Please notice: -->
      Papers that do not follow the IEEE format requirement may be rejected by
      IEEE Xplore, and subsequently result in exclusion from EI&ISI index.
    </ContentBlock>
  </Main>
</template>

<script>
import FileLink from '~/components/FileLink.vue'
import LinkOutButton from '~/components/LinkOutButton.vue'

export default {
  name: 'Contact',
  data() {
    return {
      files: [
        {
          filename: 'IS3C 2023-ABSTRACT-TEMPLATE.docx',
          link: '/files/IS3C%202023-ABSTRACT-TEMPLATE.docx',
        },
        {
          filename: 'conference-template-a4.docx',
          link: '/files/conference-template-a4.docx',
        },
      ],
    }
  },
  components: {
    LinkOutButton,
    FileLink,
  },
  head() {
    return {
      title: `Paper Submission | ${this.$title}`,
    }
  },
}
</script>
