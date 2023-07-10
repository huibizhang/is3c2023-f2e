<template>
  <div class="w-full max-w-md overflow-hidden rounded-md border">
    <div class="border-b bg-gray-50 p-5 text-center font-bold text-gray-500">
      {{ author ? 'Author' : 'Guest' }} Login
    </div>
    <div class="flex flex-col items-center p-5 px-10">
      <input
        v-if="author"
        type="text"
        placeholder="username"
        class="w-full border p-3 outline-0 transition-all"
        v-model="username"
        name="username"
        :class="[usernameErr && 'border-red-500']"
      />
      <input
        type="password"
        placeholder="password"
        class="mt-2 w-full border p-3 outline-0 transition-all"
        v-model="password"
        name="password"
        :class="[passwordErr && 'border-red-500']"
      />
      <button
        class="mt-8 rounded bg-green-500 px-10 py-2 font-bold text-white transition-all hover:bg-green-400 active:scale-95"
        @click="login(author)"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
const qs = require('qs')

export default {
  name: 'LoginForm',
  props: {
    author: {
      default: false,
    },
  },
  data() {
    return {
      // username: 'IS3C-00EYAQO',
      // password: '9M5KZPS4',
      username: '',
      password: '',
      usernameErr: false,
      passwordErr: false,
    }
  },
  mounted() {
    if (!this.author) {
      this.username = 'is3c_guest'
    }
  },
  methods: {
    login(author) {
      this.usernameErr = !this.username
      this.passwordErr = !this.password

      if (this.usernameErr || this.passwordErr) {
        return
      }
      const fd = new FormData()
      fd.append('username', this.username)
      fd.append('password', this.password)
      fd.append('author', author)

      const url = `${this.$apiBase}/loginAuth.php`

      this.$axios
        .post(url, fd, {
          withCredentials: true,
        })
        .then((e) => {
          if (e.data.status) {
            this.$emit('login', true)

            if (author) {
              this.$emit('isAuthor', true)
            }
          } else {
            console.log(e.data.error_msg)
          }
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style></style>
