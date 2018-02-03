<template>
    <div class="col-md-4">
        <div class="card-event">
            <div class="card">
                <i class="text-success input-sm">{{ id }}</i>
                <h4 class="card-title">
                    {{ event.title }}
                </h4>
                <p class="card-text">
                    {{ event.description }}
                </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <label>Date:</label> {{ event.date }}
                    </li>
                    <li class="list-group-item">
                        <label>Loca:</label> {{ event.location }}
                    </li>
                    <li class="list-group-item">
                        <label>Host:</label> {{ event.email }}
                    </li>
                    <li class="list-group-item">
                        <span class="text-primary">
                            <label>Like:</label> {{ like }}
                        </span>
                        <span class="text-danger">
                            <label>Dislike:</label> {{ event.dislike }}
                        </span>
                    </li>
                </ul>
                <p class="card-footer">
                    <button class="btn btn-primary" @click="liked(id)">Like</button> <button class="btn btn-danger" disabled>Dislike</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
    props: [
        'event', 'id'
    ],
    data() {
        return {
            like: this.event.like
        }
    },
    methods: {
        liked(id) {
            var db = firebaseApp.database();
            var newLike = this.like++
            db.ref(`events/${id}`).update({
                like: newLike
            })
        },
        findEvent(id) {
            var events = this.$store.state.events
            var event = events.find((event) => {
                        return event.id == id
                    })
            console.log(event.data)
        }
    }
}
</script>
