<template>
  <b-card
    :title="service.featured ? null : service.title"
    :border-variant="service.featured ? 'primary' : null"
    :class="cardClasses"
  >
    <template v-if="service.featured" #header>
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0">{{ service.title }}</h5>
        <span class="badge bg-primary text-white px-2 py-1">
          <i class="fas fa-star me-1"></i>New
        </span>
      </div>
    </template>
    <b-card-text>
      {{ service.description }}
    </b-card-text>
    <template #footer>
      <div class="text-center">
        <b-button :href="service.link" variant="primary">
          {{ service.buttonText }}
        </b-button>
      </div>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
      validator(value) {
        return value.title && value.description && value.link && value.buttonText
      }
    }
  },
  computed: {
    cardClasses() {
      const baseClasses = ['h-100']
      if (this.service.featured) {
        baseClasses.push('shadow-sm')
      }
      return baseClasses
    }
  }
}
</script>
