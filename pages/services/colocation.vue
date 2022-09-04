<template>
  <div>
    <ColoFrame />
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <b-card
            title="BYOD or Lease"
          >
            <b-card-text>
              Ship your device and we will handle the rest.
              Or, we can provide you with a pre-build server to use.<br>
              Even more, we could build you a custom server to your specifications. Ask and profit!
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Rich Features"
          >
            <b-card-text>
              Don't want your IPMI on the Internet? No problem! We can provide you with a VPN to access your server. We also have a variety of other features to choose from.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Worry Free Setup"
          >
            <b-card-text>
              Trouble setting up your server? We can help! Enjoy our complimentary remote hand services and even help you with your software.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ColocationPage'
}
</script>
