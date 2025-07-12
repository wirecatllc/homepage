<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <template #header>
      <p>
        Network & AV Solutions
      </p>
    </template>

    <template #lead>
      <p>
        Professional network and audio-visual design with custom fiber connectivity.<br>
      </p>
    </template>

    <hr class="my-4">

    <p>
      <b-button variant="primary" href="mailto:sales@wirecat.net">
        Get Quote Today
      </b-button>
    </p>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'NetworkAVFrame'
}
</script>

<style scoped>
.extend {
    background-image: url('~/assets/network-av-background.jpg');
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
