<template>
  <div class="flex w-full flex-col items-center space-y-3">
    <div
      v-if="program === 'selectFile'"
      class="relative flex h-screen max-h-60 w-full max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed p-10 transition-all"
      :class="[isDragEnter && 'border-green-400 bg-green-50']"
      @drop.prevent="drop($event)"
      @dragenter.prevent="isDragEnter = true"
      @dragover.prevent="() => {}"
      @dragleave.prevent="isDragEnter = false"
    >
      <label
        class="inline-block rounded bg-green-500 px-8 py-4 font-bold text-white transition-all hover:bg-green-400 active:scale-95"
      >
        <input
          id="fileUploadBtn"
          type="file"
          accept=".mp4"
          class="sr-only"
          @change="fileOnChanged($event)"
        />
        <span>Select Video File</span>
      </label>
      <div class="mt-3 text-gray-300">or, drag video file to here</div>

      <div
        class="absolute top-5 text-red-500 transition-all"
        :class="[isMP4 && 'opacity-0']"
      >
        {{ errorMsg }}
      </div>
    </div>

    <div
      v-if="program === 'uploading' || program === 'uploaded'"
      class="flex w-full max-w-md items-center space-x-3 overflow-hidden rounded-md border"
    >
      <div
        class="relative aspect-video w-full flex-none items-center justify-center overflow-hidden bg-black"
      >
        <video
          class="absolute z-0 h-full w-full bg-black transition-all"
          :class="[program === 'uploaded' && '!opacity-100 duration-1000']"
          :style="{ opacity: ((uploadPercentage / 100) * 70) / 100 }"
          :src="videoSrc"
          :controls="program === 'uploaded'"
        ></video>
        <!-- <div
          class="absolute z-10 h-full bg-green-400/40 transition-all"
          :class="[
            program === 'uploaded' &&
              'pointer-events-none !opacity-0 duration-1000',
          ]"
          :style="{ width: uploadPercentage + '65%' }"
        ></div> -->
        <div
          class="absolute z-10 flex h-full w-full"
          :class="[
            program === 'uploaded' &&
              'pointer-events-none !opacity-0 duration-1000',
          ]"
        >
          <div
            class="h-full flex-none bg-green-400/40 transition-all"
            :style="{ width: uploadPercentage + '%' }"
          ></div>
          <div
            class="h-full w-full flex-1 backdrop-blur-sm transition-all"
          ></div>
        </div>
        <div
          class="absolute z-10 flex h-full w-full items-center justify-center text-4xl font-bold text-white transition-all"
          :class="[
            program === 'uploaded' &&
              'pointer-events-none !opacity-0 duration-1000',
          ]"
        >
          {{ Math.round(uploadPercentage) }} %
        </div>
      </div>
    </div>

    <div
      v-if="
        (program === 'uploading' || program === 'uploaded') && !waitForRegist
      "
      class="w-full max-w-md overflow-hidden rounded-md border"
    >
      <div class="p-5 text-center font-bold text-gray-500">Video Info</div>
      <div class="flex flex-col items-center space-y-6 p-5 px-10">
        <FormInput
          placeholder="Video Name"
          v-model="videoInfo.video_name"
          :err="videoInfoErr.video_name"
          name="videoName"
        />
        <FormInput
          placeholder="Paper ID"
          v-model="videoInfo.paperID"
          :err="videoInfoErr.paperID"
          name="paperID"
        />
        <FormInput
          placeholder="Author"
          v-model="videoInfo.author"
          :err="videoInfoErr.author"
          name="author"
        />
        <select
          class="w-full rounded-md border p-3"
          v-model="videoInfo.field"
          :class="[videoInfoErr.field && 'border-red-400']"
          name="field"
        >
          <option value="">Field</option>
          <option v-for="(field, index) in fields" :value="index" :key="index">
            {{ field }}
          </option>
        </select>
        <FormInput
          placeholder="Email"
          v-model="videoInfo.email"
          :err="videoInfoErr.email"
          name="email"
        />

        <button
          class="relative mt-8 flex justify-between rounded bg-green-500 px-10 py-2 pr-7 font-bold text-white transition-all hover:bg-green-400 active:scale-95"
          @click="stepContinue"
        >
          <div>Continue</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-3 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="program === 'uploading' && waitForRegist"
      class="w-full max-w-md overflow-hidden rounded-md border border-yellow-200 bg-yellow-50 p-5 text-center text-sm text-yellow-600"
    >
      Do not close the page until the video upload is complete
    </div>

    <div
      v-if="program === 'regist' || program === 'done'"
      class="relative flex w-full max-w-md flex-col items-center justify-center transition-all"
      :class="[isDragEnter && 'border-green-400 bg-green-50']"
    >
      <div class="flex flex-col space-y-3 p-6 pt-0">
        <div class="text-center font-bold text-green-600">
          The video has been uploaded
        </div>
        <div class="text-sm">
          You can login to the remote presentation system with the username and
          password.
        </div>
      </div>

      <div
        class="mt-3 flex w-full flex-col items-center overflow-hidden rounded-lg border"
      >
        <div class="w-full max-w-xs px-6 py-6">
          <div
            class="flex w-full items-center justify-center rounded-md bg-gray-100 px-3"
          >
            <div
              class="pointer-events-none flex-none select-none text-sm text-gray-500"
            >
              username
            </div>
            <div class="flex-1 py-3 px-7 text-lg font-bold">
              {{ owner.username }}
            </div>
          </div>
          <div
            class="mt-3 flex w-full items-center justify-center rounded-md bg-gray-100 px-3"
          >
            <div
              class="pointer-events-none flex-none select-none text-sm text-gray-500"
            >
              passowrd
            </div>
            <div class="flex-1 py-3 px-7 text-lg font-bold">
              {{ owner.password }}
            </div>
          </div>
        </div>
        <div class="flex w-full border-t bg-gray-50">
          <div
            class="flex w-full flex-1 items-center justify-center border-r text-xs text-gray-500"
          >
            Please keep your username and password
          </div>
          <textarea
            id="copyMsg"
            class="sr-only"
            v-model="msgForCopy"
            readonly
          ></textarea>
          <button
            ref="copyBtn"
            class="aspect-square h-8 w-16 flex-none p-1.5 text-gray-500 transition-all hover:bg-white/75 active:p-2 active:text-gray-300"
            @click="copyLoginInfo"
            data-clipboard-action="copy"
            data-clipboard-target="#copyMsg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-full w-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from './FormInput.vue'
import Clipboard from 'clipboard'

var pz = {
  maxSize: 1024 * 1024 * 1024 * 3, //文件大小限制 3G
  bufferSize: 1024 * 1024 * 10, //单个分片大小
  blocks: [], //分片数据集合
  blockName: 'file', //表单 file 的名字
  filename: '', //上传的本地文件真实文件名
  threadNum: 2, //上传线程数量
  reset: function (fname) {
    this.blocks = []
    this.filename = fname
  },
}
//只要是操作主线程中的变量或其他，就一定会自动同步到主线程来。相当于自动lock()
var __index = 0
var __activeThreadCount = 0 //当前活跃线程数量
var __sendedBlockCount = 0 //已上传的block数量
var __sendedBlockCountDetail = 0 //已上传的精細数量

var resetSignal = false

export default {
  components: { FormInput },
  name: 'VideoUploadForm',
  data() {
    return {
      vid: '',
      isDragEnter: false,
      isMP4: true,
      program: 'selectFile',
      errorMsg: '',
      uploadProgressList: {},
      uploadPercentage: 0,
      fileUploadUrl: `${this.$apiBase}/filing`,
      fields: [
        'TRACK 1 - COMPUTER',
        'TRACK 2 - MULTIMEDIA & INTELLIGENT COMPUTING',
        'TRACK 3 - AIoT, ICT & SENSOR APPLICATIONS',
        'TRACK 4 - SEMICONDUCTOR DEVICES & INTEGRATED CIRCUITS',
        'TRACK 5 - CONSUMER ELECTRONICS',
        'TRACK 6 - RENEWABLE ENERGY',
        'TRACK 7 - SYSTEMS AND CONTROL',
        'TRACK 8 - DIGITAL SIGNAL PROCESSING',
        'TRACK 9 - ARTIFICIAL INTELLIGENCE AND COMPUTER ENGINEERING',
        'IS01 - Measured Signal Collection, Processing and Applications',
        'IS02 - Robust Control and Signal Processing',
        'IS03 - Advanced Computer Vision Technologies',
        'IS04 - Soft Computing and its Applications',
        'IS05 - Network Security Is Applied in the IoT System',
        'IS06 - Engineering Applications of Deep Learning and Artificial Intelligence (EADLAI)',
        'IS07 - Power Quality and Energy System',
        'IS08 - Computer Graphics Workshop 2023',
        'IS09 - Intelligent Computation and AIoT Applications',
      ],
      videoSrc: '',
      videoInfo: {
        file_vid: '',
        video_name: '',
        paperID: '',
        author: '',
        field: '',
        email: '',
      },
      videoInfoErr: {
        video_name: false,
        paperID: false,
        author: false,
        field: false,
        email: false,
      },
      waitForRegist: false,
      owner: {
        paperID: '',
        username: '',
        password: '',
        name: '',
        email: '',
        vid: '',
      },
      msgForCopy: '',
      copyBtn: null,
      clipboard: null,
    }
  },
  mounted() {
    this.$emit('program', this.program)
  },
  methods: {
    generator(bit) {
      const keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let output = ''

      for (let i = 0; i < bit; i++) {
        output += keys.charAt(Math.floor(Math.random() * 36))
      }
      return output
    },
    drop(e) {
      const dt = e.dataTransfer
      const files = dt.files

      if (files.length === 1) {
        this.errorMsg = 'The file format should be .mp4'
        this.isMP4 = files[0].type === 'video/mp4'
      } else {
        this.errorMsg = 'Muilt-file is not supported'
        this.isMP4 = false
      }
      this.isDragEnter = false

      if (this.isMP4) {
        this.videoUpload(files[0])
      }
    },
    fileOnChanged(e) {
      const files = e.target.files

      if (files.length === 1) {
        this.errorMsg = 'The file format should be .mp4'
        this.isMP4 = files[0].type === 'video/mp4'
      } else {
        this.errorMsg = 'Muilt-file is not supported'
        this.isMP4 = false
      }

      if (this.isMP4) {
        this.videoUpload(files[0])
      }
    },
    videoUpload(file) {
      this.program = 'uploading'

      this.vid = this.generator(16)
      this.videoInfo.file_vid = this.vid

      console.log(file)
      this.videoSrc = URL.createObjectURL(file)

      if (file.size > pz.maxSize) {
        console.log(
          '文件大小限制：' + pz.maxSize + '，实际文件大小：' + file.size
        )
        alert('Error: Max upload size is 3GB')
        return
      }

      pz.reset(file.name)
      //pz.threadNum = parseInt($("#threadCount").val());//设定线程数量
      pz.threadNum = 3

      __index = __activeThreadCount = __sendedBlockCount = 0
      var endByte = 0,
        startByte = 0

      // formState('prepare')

      while (true) {
        if (resetSignal) {
          break
        }

        startByte = endByte
        if (endByte + pz.bufferSize >= file.size) {
          endByte = file.size
        } else {
          endByte = endByte + pz.bufferSize
        }
        var block = this.sliceFile(file, startByte, endByte)
        if (!block) {
          console.log('分片失败')
          return
        }
        pz.blocks.push(block)
        if (endByte >= file.size) {
          break
        }
      }
      console.log('文件名：' + file.name)
      console.log('文件大小：' + file.size)
      console.log('总分片数量：' + pz.blocks.length)

      // pz.threadNum = Math.round(pz.blocks.length / 3)

      const _this = this

      var dis = Math.min(pz.threadNum, pz.blocks.length)
      for (var i = 0; i < dis; i++) {
        if (resetSignal) {
          break
        }
        ;(function (i) {
          setTimeout(function () {
            __activeThreadCount++
            _this.fenpei(i)
          }, 500)
        })(i)
      }
      console.log('启动线程：' + dis + ' 个')
      console.log('------------------------')
    },
    fenpei(i) {
      //参数:线程名
      if (__index >= pz.blocks.length) {
        console.log('线程' + i + ' 结束')
        __activeThreadCount--
        if (__activeThreadCount == 0) {
          console.log('------------------------')
          console.log('多线程分片上传完毕，正在处理分片数据...')
          this.combineFile()
        }
        return
      }
      this.uploadBlock(i, __index)
      __index++
    },
    //发送拼接分块命令
    combineFile() {
      if (!resetSignal) {
        const fd = new FormData()
        fd.append('act', 'combine')
        fd.append('chunks', pz.blocks.length)
        fd.append('filename', pz.filename)
        fd.append('vid', this.vid)

        this.$axios
          .post(this.fileUploadUrl, fd)
          .then((e) => {
            if (e.data.flag) {
              console.log('分片数据处理完成，任务结束，URl：' + e.data.url)

              this.program = this.waitForRegist ? 'regist' : 'uploaded'
              // this.videoSrc = e.data.url
            } else {
              console.log(e.data.info)
              alert(e.data.info + ': ' + e.data.error)
            }
          })
          .catch((error) => console.log(error))
      }
    },
    uploadBlock(i, index) {
      var chunk = index
      console.log('线程' + i + ' 分片' + chunk + ' start')
      var fd = new FormData()
      fd.append('file', pz.blocks[chunk]) //文件
      fd.append('filename', pz.filename) //文件名
      fd.append('chunk', chunk) //分片索引
      fd.append('chunks', pz.blocks.length) //分片总数
      fd.append('vid', this.vid)

      if (!resetSignal) {
        this.$axios
          .post(this.fileUploadUrl, fd, {
            progress: false,
            onUploadProgress: (progressEvent) => {
              this.uploadProgressList[chunk] = parseInt(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              )

              const upl = Object.values(this.uploadProgressList)

              this.uploadPercentage =
                upl.reduce((a, b) => a + b, 0) / pz.blocks.length
            },
          })
          .then((e) => {
            //timer线程中的异步，此时同步了
            console.log('线程' + i + ' 分片' + chunk + ' end')
            __sendedBlockCount++
            //showPercent();
            this.fenpei(i)
          })
          .catch((error) => console.log(error))
      }
    },
    //分割file成分片
    sliceFile(file, startByte, endByte) {
      if (file.slice) {
        return file.slice(startByte, endByte)
      }
      if (file.webkitSlice) {
        return file.webkitSlice(startByte, endByte)
      }
      if (file.mozSlice) {
        return file.mozSlice(startByte, endByte)
      }
      return null
    },
    inputChecker(name) {
      let infoChecked = true
      if (this.videoInfo[name] === '') {
        infoChecked = false
        this.videoInfoErr[name] = true
      } else {
        this.videoInfoErr[name] = false
      }
      return infoChecked
    },
    emailChecker(email) {
      const regex =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

      // console.log(email)

      if (!regex.test(email)) {
        this.videoInfoErr['email'] = true
        return false
      } else {
        this.videoInfoErr['email'] = false
        return true
      }
    },
    stepContinue() {
      let infoChecked = true

      infoChecked &= this.inputChecker('video_name')
      infoChecked &= this.inputChecker('paperID')
      infoChecked &= this.inputChecker('author')
      infoChecked &= this.inputChecker('field')
      infoChecked &= this.inputChecker('email')
      infoChecked &= this.emailChecker(this.videoInfo.email)

      if (infoChecked) {
        const fd = new FormData()
        fd.append('vid', this.videoInfo.file_vid)
        fd.append('name', this.videoInfo.video_name)
        fd.append('paperID', this.videoInfo.paperID)
        fd.append('author', this.videoInfo.author)
        fd.append('field', this.videoInfo.field)

        const url = `${this.$apiBase}/video_adder.php`

        this.$axios
          .post(url, fd)
          .then((e) => {
            if (e.data.status) {
              if (this.program === 'uploaded') {
                this.program = 'regist'
              } else {
                this.waitForRegist = true
              }
            } else {
              console.log(e.data.error_msg)
            }
          })
          .catch((error) => console.log(error))
      }
    },
    copyLoginInfo() {
      const content =
        `username: ${this.owner.username}   \r\n` +
        `passowrd: ${this.owner.password}   \r\n\r\n` +
        `You can login to the remote presentation system with the username and password.`

      this.msgForCopy = content

      // navigator.clipboard.writeText(content).then(
      //   () => {
      //     /* clipboard successfully set */
      //     alert('copied!')
      //   },
      //   () => {
      //     /* clipboard write failed */
      //   }
      // )

      if (this.copyBtn) {
        this.clipboard = this.copyBtn //单页面引用
      } else {
        this.copyBtn = new Clipboard(this.$refs.copyBtn)
        this.clipboard = this.copyBtn
      }
      this.clipboard.on('success', (e) => {
        // 释放内存
        this.clipboard.destroy()
        alert('copied!')
      })

      this.clipboard.on('error', (e) => {
        // 不支持复制
        this.clipboard.destroy()
        console.log('message:push', '複製失敗', e)
      })
    },
  },
  watch: {
    program(newVal) {
      if (newVal === 'regist') {
        const preUserName = 'IS3C-' + this.videoInfo.field
        const username = preUserName + this.generator(12 - preUserName.length)
        const pass = this.generator(8)

        this.owner = {
          paperID: this.videoInfo.paperID,
          username: username,
          password: pass,
          name: this.videoInfo.author,
          email: this.videoInfo.email,
          vid: this.vid,
        }

        const fd = new FormData()
        fd.append('paperID', this.videoInfo.paperID)
        fd.append('username', username)
        fd.append('password', pass)
        fd.append('name', this.videoInfo.author)
        fd.append('email', this.videoInfo.email)
        fd.append('vid', this.vid)

        const url = `${this.$apiBase}/videoOwner_adder.php`

        this.$axios
          .post(url, fd)
          .then((e) => {
            if (e.data.status) {
              this.program = 'done'
              console.log(this.$refs.copyBtn)
              this.copyBtn = new Clipboard(this.$refs.copyBtn)
            } else {
              console.log(e.data.error_msg)
            }
          })
          .catch((error) => console.log(error))
      }

      this.$emit('program', newVal)
    },
    uploadPercentage(newVal) {
      this.$emit('uploadPercentage', newVal)
    },
  },
}
</script>

<style></style>
