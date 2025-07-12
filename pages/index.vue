<template>
  <div>
    <IndexFrame />
    <b-container>
      <!-- Featured Services Row -->
      <b-row cols="1" cols-sm="1" cols-md="2" class="mb-4">
        <b-col v-for="service in featuredServices" :key="service.title">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
      <!-- Core Services Row -->
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col v-for="service in coreServices" :key="service.title">
          <ServiceCard :service="service" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      featuredServices: [
        {
          title: 'Network & AV Solutions',
          description: 'Complete network and audio-visual design solutions with custom fiber connectivity options.',
          link: '/services/network-av',
          buttonText: 'Learn More',
          featured: true
        },
        {
          title: 'Remote Hands',
          description: 'On-site technical support and hardware management by certified technicians.',
          link: '/services/remotehands',
          buttonText: 'Learn More'
        }
      ],
      coreServices: [
        {
          title: 'Cloud VM',
          description: 'Enterprise-grade virtual machines deployed instantly with complimentary BGP services.',
          link: '/services/vm',
          buttonText: 'Learn More'
        },
        {
          title: 'Colocation',
          description: 'Reliable hosting with flexible configurations and premium dedicated server options.',
          link: '/services/colocation',
          buttonText: 'Learn More'
        },
        {
          title: 'SD-WAN Solutions',
          description: 'Intelligent network connectivity with BGP routing and traffic optimization for multi-site deployments.',
          link: '/services/bgp',
          buttonText: 'Learn More'
        }
      ]
    }
  }
}
</script>
