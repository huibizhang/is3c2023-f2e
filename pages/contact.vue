<template>
  <Main pageName="Contact">
    <ContentBlock title="Contact">
      <div class="text-center">
        If you have any inquiry,<br />
        please email to following address
        <!-- Ms. Szu-Yun Lai -->: <br /><br />

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
      emails: ['is3c2023@ncut.edu.tw', 'is3c2023@gm.ncut.edu.tw'],
    }
  },
  components: {
    Email,
  },
  head() {
    return {
      title: `Contact | ${this.$title}`,
    }
  },
}
</script>
