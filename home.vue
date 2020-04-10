<template>
  <div class="hello">
    <input type="file" name="file" multiple>
    <input type="submit" @click="submitHandle" value="">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      AllDate: []
    }
  },
  methods: {
    submitHandle () {
      var formDate = new FormData()
      var imgSrc = document.querySelector('input[type=file]').files
      Array.from(imgSrc).forEach((item, index) => {
        formDate.append(`img-${index}`, item)
      })
      formDate.append('text', '我是内容我是内容我是内容我是内容')
      var options = {
        url: 'http://localhost:8080/upload',
        method: 'post',
        data: formDate,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
     axios(options).then(res => {
       console.log(res)
     })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
