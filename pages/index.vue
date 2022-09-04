<template>
  <div>
    <IndexFrame />
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <b-card
            title="BGP Services"
          >
            <b-card-text>
              We provide BGP services to our customers. Highly customizable, we can provide you with a /24 or a /48, or even a /32 if you need it.
            </b-card-text>
            <b-button href="/services/bgp" variant="primary">
              Learn more
            </b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Colocation"
          >
            <b-card-text>
              Affordable colocation with flexible configuration and addons. You can also rent our servers with various custom configurations as well!
            </b-card-text>
            <b-button href="/services/colocation" variant="primary">
              Learn more
            </b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Remote Hands"
          >
            <b-card-text>
              We provide remote hands services to our customers. We have a variety of options to fit your needs.
            </b-card-text>
            <b-button href="/services/remotehands" variant="primary">
              Learn more
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
