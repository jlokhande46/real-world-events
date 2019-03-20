<template>
  <div class="about">
    <h1>Event Listing</h1>
    <EventCard></EventCard>
    <BaseIcon />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  },
  props: ['id']
}
</script>
