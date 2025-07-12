<template>
  <div class="footer">
    <nuxt-img src="/logo.png" sizes="100vw sm:50vw md:400px"/>
    <p>All Rights Reserved, 2021-2025</p>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  components: {}
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
  margin-top: 5rem;
}
</style>
