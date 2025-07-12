<template>
  <div>
    <NetworkAVFrame />
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12" md="6">
          <b-card class="h-100 shadow">
            <template #header>
              <h4 class="mb-0">
                <i class="fas fa-network-wired me-2 text-info"></i>
                Network Design
              </h4>
            </template>
            <b-card-text>
              <ul class="list-unstyled">
                <li class="mb-2">✓ Wired and wireless network architecture</li>
                <li class="mb-2">✓ Enterprise-grade security implementation</li>
                <li class="mb-2">✓ Scalable infrastructure planning</li>
                <li class="mb-2">✓ Performance optimization</li>
                <li class="mb-2">✓ Redundancy and failover design</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-col>
        
        <b-col cols="12" md="6">
          <b-card class="h-100 shadow">
            <template #header>
              <h4 class="mb-0">
                <i class="fas fa-tv me-2 text-success"></i>
                Pro AV Systems
              </h4>
            </template>
            <b-card-text>
              <ul class="list-unstyled">
                <li class="mb-2">✓ Audio-visual system design and installation</li>
                <li class="mb-2">✓ Conference room and presentation systems</li>
                <li class="mb-2">✓ Digital signage solutions</li>
                <li class="mb-2">✓ Sound system integration</li>
                <li class="mb-2">✓ Control system programming</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mb-5">
        <b-col cols="12">
          <b-card class="shadow-sm border-primary">
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">
                  <i class="fas fa-star me-2"></i>
                  Custom Fiber Connectivity
                </h4>
                <span class="badge bg-warning text-dark px-3 py-2">
                  Special Offering
                </span>
              </div>
            </template>
            <b-card-text>
              <p class="lead mb-3">
                Boost your site connectivity with our customized fiber build design solutions.
              </p>
              <b-row>
                <b-col cols="12" md="4">
                  <i class="fas fa-bolt fa-2x text-warning mb-2"></i>
                  <h6>High-Speed Options</h6>
                  <p class="small">Ultra-fast fiber connections tailored to your bandwidth needs</p>
                </b-col>
                <b-col cols="12" md="4">
                  <i class="fas fa-route fa-2x text-info mb-2"></i>
                  <h6>Diverse Routing</h6>
                  <p class="small">Multiple path options for maximum reliability and redundancy</p>
                </b-col>
                <b-col cols="12" md="4">
                  <i class="fas fa-handshake fa-2x text-success mb-2"></i>
                  <h6>Bay Area Partners</h6>
                  <p class="small">Strategic partnerships for comprehensive coverage and options</p>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="text-center mb-5">
        <b-col cols="12">
          <h3 class="mb-4">Ready to Transform Your Space?</h3>
          <p class="lead mb-4">
            Contact our team for a comprehensive consultation and custom quote tailored to your specific needs.
          </p>
          <b-button size="lg" variant="primary" href="mailto:sales@wirecat.net">
            <i class="fas fa-envelope me-2"></i>
            Get Your Custom Quote
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NetworkAVPage'
}
</script>
