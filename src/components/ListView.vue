<template>
  <div class="list-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          <preview v-for="note in notes"
            :note="note"
            :text="note.text"
            :index="$index"
             track-by="$index">
          </preview>
          <a class="add nav-button" v-link="{ name: 'note', params: { index: count }}">+ ADD NOTE</a>
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
  },

  route: {
    activate () {
      this.$dispatch('refresh');
    }
  }
}
</script>

<style>
  .list-view {
    padding-top: 25px;
  }
</style>