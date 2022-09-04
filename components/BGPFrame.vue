<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <template #header>
      <p>
        BGP Services
      </p>
    </template>

    <template #lead>
      <p>
        Flexible, Affordable, and Reliable.<br>
        <strong>Comes with <u>ALL</u> our VM/Colo services.</strong>
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
  name: 'BGPFrame'
}
</script>

<style scoped>
.extend {
    background-image: url('~/assets/bgp-background.jpg');
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
