<template>
  <div>
    <RemoteHandsFrame />
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <b-card
            title="Location"
          >
            <b-card-text>
              Currently we can reach out any location in Bay area, such as Santa Clara, Fremont. File a ticket to your DC and we will handle the rest.
            </b-card-text>

            <b-list-group flush>
              <b-list-group-item><b-link href="https://he.net/tour/fremont2.html">he.net FMT2</b-link></b-list-group-item>
              <b-list-group-item><b-link href="https://opencolo.com/">OpenColo</b-link></b-list-group-item>
              <b-list-group-item><b-link href="https://www.equinix.com/data-centers/americas-colocation/united-states-colocation/silicon-valley-data-centers/sv10">Equinix SV(8, 10, etc.)</b-link></b-list-group-item>
              <b-list-group-item><b-link href="https://www.coresite.com/data-center-locations/silicon-valley">CoreSite Silicon Valley (SV1, 3, 4, 7, 8)</b-link></b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Versatile Options"
          >
            <b-card-text>
              Drop ship parts from eBay? Needs Door to Door pickup? We can do it all! You can even buy parts from us directly and we will replace it for you.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Careful and Professional"
          >
            <b-card-text>
              We are very careful and professional when handling your equipment. We will make sure your equipment is safe and secure.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'RemoteHandsPage'
}
</script>
