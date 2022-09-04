<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <template #header>
      <p>
        Remote Hands
      </p>
    </template>

    <template #lead>
      <p>
        Reach what you can't reach. <br> Bring your needs and we fulfill them.
      </p>
    </template>

    <hr class="my-4">

    <p>
      <b-button variant="primary" href="mailto:sales@wirecat.net">
        Ask Today
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
    background-image: url('~/assets/remote-hand-background.jpeg');
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
