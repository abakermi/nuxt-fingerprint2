<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {


mounted(){
  console.log("mounted",this.$nuxt.$fingerprint.userAgent)
}
}
</script>
