<template>
  <b-container>
    <b-row class="mt-5">
      <b-card title="About us" sub-title="and How to contact us">
        <b-card-text>
          1. We are a small company that provides BGP services, colocation, and remote hands services. Currently we are located in the Bay Area, and we are looking to expand our services to other areas.
        </b-card-text>

        <b-card-text>
          2. Currently our infrastucture is using <a href="https://nixos.org">Nix</a>, and we are developing our own NixOS modules to make our infrastructure more manageable. We believe that NixOS is the future of Linux, and we are excited to see where it goes.
        </b-card-text>

        <b-card-text>
          3. Aside from technical parts, we also providing afforable services for small/medium businesses from all over the world. Shot us an email if you are interested and hope we could talk to you soon! :)
        </b-card-text>

        <b-link href="https://wirecat.net/legal/tos" class="card-link">
          Terms of Service
        </b-link>
      </b-card>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-card title="Network Operation Center and Abuse Contacts" sub-title="🚨🚨🚨">
          <b-card-text>
            If you have network operation concerns, please reach out via Email or Phone. We are happy to help you with any questions you may have.
          </b-card-text>
          <b-link href="mailto:noc@wirecat.net" class="card-link">
            Email: noc@wirecat.net
          </b-link>
          <b-link href="tel:1-8582429877" class="card-link">
            Phone: 1-8582429877
          </b-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="Badges" sub-title="🏆🏆🏆">
          <b-card-text>
            <a href="https://www.abuseipdb.com/user/150844" title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks">
              <img src="https://www.abuseipdb.com/contributor/150844.svg" alt="AbuseIPDB Contributor Badge">
            </a>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
