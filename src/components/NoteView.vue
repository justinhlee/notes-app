<template>
  <div class="note-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          <a v-link="{ path: '/' }">BACK</a>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="eight offset-by-two columns">
          <textarea v-model="text" v-on:keyup="update"></textarea> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js'

export default {

  name: 'NoteView',

  props: {
    notes: {
      Object,
      required: true
    }
  },

  data () {
    return {
      text: '',
      index: -1
    }
  },

  route: {
    canActivate ({ to, abort, next }) {
      let ind = +to.params.index
      if (ind < 0) abort()
      let n = store.fetch().length
      // prevents people from entering inaccessible notes via url
      n - ind >= 0 ? next() : abort()
    },

    data ({ to }) {
      let ind = to.params.index
      let note = this.notes[ind]
      let body = ''
      note ? body = note.text : body = this.text
      return {
        text: body,
        index: ind
      }
    }
  },

  methods: {
    update () {
      // checks for edge case where someone refreshes NoteView on nonexisting index
      // ... admittedly hacky and probably smarter to just rethink the routing
      if (this.notes.length - this.index >= 0 && this.index > -1) {
        this.$dispatch('update', { text: this.text, index: this.index})
      }
    }
  }
}
</script>

<style>
  .note-view {
    padding-top: 25px;
  }

  textarea {
    font-family: 'Inconsolata', sans-serif;
    font-size: 14px;
    width: 100%;
    height: 500px;
  }
</style>
