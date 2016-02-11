<template>
  <!-- Possibly turn list view into its own flexbox container with the previews being its items -->
  <div class="list-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          
          <preview v-for="note in notes":text="note.text":index="$index">
          </preview>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js'
import Preview from './Preview.vue'

export default {

  name: 'ListView',

  components: {
    Preview
  },

  data () {
    return {
      notes: store.fetch()
    }
  }
}
</script>

<style>
  .list-view {
    padding-top: 25px;
  }
</style>