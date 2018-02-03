<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h4>
                Add an Event
                <input type="checkbox" v-model="showForm">
            </h4>
            <transition name="slide-fade">
                <div class="form-vertical" v-show="showForm">
                    <form @submit.prevent="addEvent">
                        <div class="form-group" align="left">
                            <label>Title</label>
                            <input type="text" class="form-control" placeholder="Title" required autofocus v-model="event.title">
                        </div>
                        <div class="form-group" align="left">
                            <label>Description</label>
                            <input type="text" class="form-control" placeholder="Description" required v-model="event.description">
                        </div>
                        <div class="form-group" align="left">
                            <label>Date</label>
                            <input type="date" class="form-control" placeholder="Date" required v-model="event.date">
                        </div>
                        <div class="form-group" align="left">
                            <label>Location</label>
                            <input type="text" class="form-control" placeholder="Location" required v-model="event.location">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Submit Event</button>
                    </form>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { eventsRef } from '../firebaseApp'

export default {
    data() {
        return {
            event: {
                title: '',
                description: '',
                date: '',
                location: '',
                email: '',
                like: 0,
                dislike: 0
            },
            showForm: false
        }
    },
    methods: {
        addEvent() {
            // store data in realtime db
            this.event.email = this.$store.state.user.email
            eventsRef.push(this.event)

            //clearing form
            Object.keys(this.event).forEach((key, value) => {
                if (key == 'like' || key == 'dislike') {
                    this.event[key] = 0
                } else {
                    this.event[key] = ''
                }
            })
        }
    }
}
</script>
