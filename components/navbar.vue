<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
    <b-navbar-brand href="/">
      WireCat LLC
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/services/vm">
          Cloud VM
        </b-nav-item>
        <b-nav-item href="/services/colocation">
          Colocation
        </b-nav-item>
        <b-nav-item href="/services/bgp">
          BGP
        </b-nav-item>

        <b-nav-item href="/services/remotehands">
          Remote hands
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/about">
          About
        </b-nav-item>
        <b-nav-item-dropdown text="Community" right>
          <b-dropdown-item href="https://t.me/WirecatNews">
            Telegram Channel/Discussion
          </b-dropdown-item>
          <b-dropdown-item href="https://discord.gg/ATApJFeGGs">
            Discord
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="https://billing.wirecat.net">
          Billing Portal
        </b-nav-item>
        <b-nav-item-dropdown text="Network" right>
          <b-dropdown-item href="https://bgp.tools/lg/399888">
            Looking Glass
          </b-dropdown-item>
          <b-dropdown-item href="https://www.peeringdb.com/net/29705">
            PeeringDB
          </b-dropdown-item>
          <b-dropdown-item href="https://bgp.he.net/AS399888">
            BGP Info
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
