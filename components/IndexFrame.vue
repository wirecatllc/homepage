<template>
  <b-jumbotron fluid class="extend text-center" text-variant="light">
    <div class="color-overlay" />
    <div class="video-container">
      <video class="background-video" autoplay muted loop>
        <source src="~/assets/index-background.mp4" type="video/mp4">
      </video>
    </div>

    <template #header>
      <p>
        Connecting Possibilities
      </p>
    </template>

    <template #lead>
      <p>
        We provide <u>Cost-Effective</u> IP/BGP services, colocation, and remote hands.
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
  name: 'FirstFrame'
}
</script>

<style scoped>
.extend {
  position: relative;
  overflow: hidden;
  z-index: -99;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: absolute;
  z-index: -103;
  left: 50%; /* % of surrounding element */
  top: 50%;
  transform: translate(-50%, -50%); /* % of current element */
}

.video-container {
  z-index: -102;
  position: relative;
}

.color-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -101;
  background-color: rgba(50, 50, 50, 0.3);
}
</style>
