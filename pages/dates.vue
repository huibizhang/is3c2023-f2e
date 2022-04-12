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
            <div :class="['text-[red]', date.isDescription && 'line-through']">
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
          date: '31 August, 2020',
          extend: '',
          isDescription: false,
        },
        {
          name: 'Paper Abstract Submission Due:',
          date: '31 July, 2020',
          extend: '(Deadline Extended to 15 August, 2020)',
          isDescription: true,
        },
        {
          name: 'Notification of Acceptance:',
          date: 'Notify immediately after being reviewed',
          extend: '',
          isDescription: false,
        },
        {
          name: 'Final Paper Submission:',
          date: '20 September, 2020',
          extend: '(Deadline Extended to 4 October, 2020)',
          isDescription: true,
        },
        {
          name: 'Author Registration Due:',
          date: '9 November, 2020',
          extend: '(Early-bird Discounts: Before 15 September, 2020)',
          isDescription: false,
        },
        {
          name: 'IEEE Xplore Submission Due:',
          date: 'Notify after receiving IEEE submission link',
          extend: '',
          isDescription: false,
        },
        {
          name: 'Conference Dates:',
          date: '13-16 November, 2020',
          extend: '',
          isDescription: false,
        },
      ],
      emails: ['is3c2020@ncut.edu.tw', 'is3c2020@gm.ncut.edu.tw'],
    }
  },
  components: {
    Email,
  },
}
</script>
