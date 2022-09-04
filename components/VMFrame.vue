<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <template #header>
      <p>
        Virtual Private Server
      </p>
    </template>

    <template #lead>
      <p>
        Start small, grow big.
      </p>
    </template>

    <hr class="my-4">

    <p>
      <b-button variant="primary" href="mailto:sales@wirecat.net">
        Get Yours Today
      </b-button>
    </p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'VMFrame'
}
</script>

  <style scoped>
  .extend {
      background-image: url('~/assets/vm-background.jpg');
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
