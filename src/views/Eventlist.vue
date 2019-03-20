<template>
  <div class="about">
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventServices.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There is an error man. here' + error.response)
      })
  },
  props: ['id']
}
</script>
