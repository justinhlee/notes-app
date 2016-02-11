<template>
  <div class="note-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          <a v-link="{ path: '/' }">< BACK</a>
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

  data () {
    return {
      text: '',
      index: -1
    }
  },

  route: {
    data ({ to }) {
      let ind = to.params.index
      return {
        text: store.fetch()[ind].text,
        index: ind
      }
    }
  },

  methods: {
    // good place to figure out lazier solution, cache then update on close/back ?
    update () {
      let notes = store.fetch()
      notes[this.index] = {text: this.text}
      store.save(notes)
    }
  },
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
