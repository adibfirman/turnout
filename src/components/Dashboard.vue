<template>
    <div class="col-md-12">
        <h3>Events Dashboard</h3>
        <hr>
        <AddEvent />
        <button class="btn btn-danger signout-btn btn-sm" @click="signOut">Sign Out</button>
        <div class="col-md-2">
            <h3>
                Sort By:
            </h3>
            <input type="checkbox" v-model="shortLike"> Like {{ shortLike }}
            <input type="checkbox"> Dislike
        </div>
        <div class="col-md-2 col-md-offset-8">
            <h3>Total Event: {{ this.totalEvent }}</h3>
        </div>
        <div class="col-md-12">
            <EventItem 
                v-for="(item, index) in $store.state.events"
                :key="index"
                :event="item.data"
                :id="item.id"
            />
        </div>
    </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import  AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
    data() {
        return {
            totalEvent: this.$store.state.events.length,
            shortLike: false
        }
    },
    methods: {
        signOut () {
            this.$store.commit('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        AddEvent, EventItem
    },
    mounted() {
        eventsRef.on('value', (snap) => {
            let events = []
            snap.forEach((event) => {
                var newData = {
                    'id': event.key,
                    'data': event.val()
                };
                events.push(newData)
            })
            console.log(events)
            this.$store.dispatch('setEvents', events)
        })
  }
}
</script>
