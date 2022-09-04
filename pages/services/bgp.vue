<template>
  <div>
    <BGPFrame />
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <b-card
            title="BYOIP or Rent"
          >
            <b-card-text>
              We can lease IP and have your ASN ready for you, or you can bring your own.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Flexible Configuration"
          >
            <b-card-text>
              Want a different setting? No problem! We can work with you to get the everything you need.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Multiple Locations"
          >
            <b-card-text>
              BGP Player? We have you covered. We have multiple locations to choose from.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'BGPPage'
}
</script>
