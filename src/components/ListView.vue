<template>
  <!-- Possibly turn list view into its own flexbox container with the previews being its items -->
  <div class="list-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">

          <center>
            <!-- adds a new note, +1 to length of notes array -->
            <button v-link="{ name: 'note', params: { index: count }}" >+</button>
          </center>

          <preview v-for="note in notes":note="note":text="note.text":index="$index"track-by="$index">
          </preview>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preview from './Preview.vue'

export default {

  name: 'ListView',

  components: {
    Preview
  },

  props: {
    notes: {
      Object,
      required: true
    },
    count: Number
  }
}
</script>

<style>
  .list-view {
    padding-top: 25px;
  }
</style>