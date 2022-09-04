<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <template #header>
      <p>
        Colocation Services
      </p>
    </template>

    <template #lead>
      <p>
        Bring your own server, or let us provide one suit you.<br>
      </p>
    </template>

    <hr class="my-4">

    <p>
      <b-button variant="primary" href="mailto:sales@wirecat.net">
        Apply Today
      </b-button>
    </p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'ColoFrame'
}
</script>

<style scoped>
.extend {
    background-image: url('~/assets/colo-background.webp');
    min-height: 40rem;
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
