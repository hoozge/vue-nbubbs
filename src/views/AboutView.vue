<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>ceshi</el-button>
  </div>
</template>
<script>
  import axios from "axios"
  import { onMounted } from "vue"
  export default {
    setup(){
      onMounted(()=>{
        axios({
          url:'http://jsonplaceholder.typicode.com/posts'
        }).then(res => {
          console.log(res.data);
        })
      })
    }
  }

</script>