<template>
  <div>
    <VMFrame />
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <b-card
            title="Quick Setup"
          >
            <b-card-text>
              Your VM will be ready in a second! We have a variety of templates to choose from, and sure, it won't cost a fortune to get one.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Rich Addons"
          >
            <b-card-text>
              Want more storage? Try our block storage addon. Want to own a dedicated disk for your VM? Sure thing! Oh don't forget the <strong>FREE</strong> BGP services comes with all of our VMs!
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Multiple Locations"
          >
            <b-card-text>
              We have multiple locations located in US West, Central and East respectively. Find the right one suit your needs.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'VMPage'
}
</script>
