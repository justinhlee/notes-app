<template>
  <!-- header -->
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          <a class="back nav-button" v-show="viewing" v-link="{ path: '/' }">BACK</a>
          <div v-else>
            <div v-if="!blank">
            <a class="nav-button" v-show="deleting" v-on:click="toggle">CANCEL</a>
            <a class="nav-button" v-else v-on:click="toggle">EDIT</a>
            </div>
            <span v-else><br></span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- intro blurb -->
  <div v-show="blank" style="padding-top:25px;" class="container">
    <div class="row">
      <div class="eight offset-by-two columns">
        <p>You can use this site to write down notes. <br>They'll be saved on this browser.</p> 
        <p>Enjoy. 🤓 <br>
        —<a class="nav-button" href="https://justinlee.io/">JL</a>
        </p>

      </div>
    </div>
  </div>

  <!-- main view -->
  <router-view :notes="notes":count="count":deleting="deleting"></router-view>
</template>

<script>
import store from '../store.js'

export default {

  name: 'App',

  data () {
    return {
      notes: store.fetch(),
      count: store.fetch().length,
      deleting: false,
      viewing: false,
      blank: true
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

  methods: {
    toggle () {
      this.deleting = !this.deleting
      this.$broadcast('toggle', this.deleting)
    }
  },

  events: {
    update (note) {
      let d = new Date().toLocaleString()
      this.notes[note.index] = {text: note.text, date: d}
      store.save(this.notes)
      this.count = store.fetch().length
    },

    viewing () {
      this.viewing = true,
      this.blank = false
    },

    refresh () {
      this.blank = !(this.count > 0)
      this.deleting = false,
      this.viewing = false
    },

    remove (note) {
      this.notes.$remove(note)
    }
  },
}
</script>

<style>
  .header {
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .about {
    float:right;
  }

</style>