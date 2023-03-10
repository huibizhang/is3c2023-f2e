<template>
  <Main pageName="Important Dates">
    <ContentBlock title="Important Dates">
      <div class="space-y-4">
        <div
          v-for="date in dates"
          :key="date.name"
          class="border-b pb-2 last:border-b-0"
        >
          <div class="font-bold text-gray-600">{{ date.name }}</div>
          <div class="py-1 text-lg font-bold">
            <div :class="['text-[red]', !date.isDescription && 'line-through']">
              {{ date.date }}
            </div>
            <div class="text-[red]">{{ date.extend }}</div>
          </div>
        </div>
      </div>

      <br /><br />
      <div class="text-center">
        If you have any inquiry,<br />
        please email to following address: <br />
        <br />
        <div class="flex flex-col items-center space-y-4">
          <Email v-for="email in emails" :key="email" :email="email" />
        </div>
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
      dates: [
        {
          name: 'Invited Session Proposals Due:',
          date: 'April 30, 2023',
          extend: '',
          isDescription: true,
        },
        {
          name: 'Paper Abstract Submission Due:',
          date: 'March 15, 2023',
          extend: 'March 31, 2023',
          isDescription: false,
        },
        {
          name: 'Notification of Acceptance:',
          date: 'April 10, 2023',
          extend: '',
          isDescription: true,
        },
        {
          name: 'Final Paper Submission Due:',
          date: 'April 30, 2023',
          extend: '',
          isDescription: true,
        },
        {
          name: 'Author Registration Due:',
          date: 'June 20, 2023',
          extend: '(Early-bird Discounts: Before May 15, 2023)',
          isDescription: true,
        },
        {
          name: 'IEEE Xplore Submission Due:',
          date: 'Notify after receiving IEEE submission link',
          extend: '',
          isDescription: true,
        },
        {
          name: 'Conference Dates:',
          date: 'June 30 - July 3, 2023',
          extend: '',
          isDescription: true,
        },
      ],
      emails: ['is3c2023@ncut.edu.tw'],
    }
  },
  components: {
    Email,
  },
  head() {
    return {
      title: `Important Dates | ${this.$title}`,
    }
  },
}
</script>
