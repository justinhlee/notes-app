<template>
  <!-- header -->
  <div class="header">
    <div class="container">
      <div class="row">
      <center><span class="header-icon">¶</span></center>
      </div>
      
    </div>
  </div>
 
  <!-- main view -->
  <router-view :notes="notes":count="count"></router-view>
</template>

<script>
import store from '../store.js'

export default {

  name: 'App',

  data () {
    return {
      notes: store.fetch(),
      count: store.fetch().length
    }
  },

  watch: {
    // watch this.notes for removals
    notes: {
      handler: function (notes) {
        store.save(notes);
        this.count = store.fetch().length
      },
      deep: true
    }
  },

  events: {
    update (note) {
      this.notes[note.index] = {text: note.text}
      store.save(this.notes)
      this.count = store.fetch().length
    },

    remove (note) {
      this.notes.$remove(note)
    }
  },
}
</script>

<style>

  .header {
    border-bottom: 2px solid #fea;
    background-color: #fffbec;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .header-icon {
    font-family: 'Inconsolata', sans-serif;
    letter-spacing: 1px;
    color: #fc0;
  }
</style>