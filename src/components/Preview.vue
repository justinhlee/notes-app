<template>
  
    <div class="preview">
    
      <div v-link="{ path: '/note/' + index }" class="inner-preview">
        {{ truncated }}
      </div>

      <!-- on delete remove from store -->
      <a style="cursor:pointer;" v-on:click="remove">delete</a>
    </div>

</template>

<script>

export default {

  name: 'Preview',

  props: {
    note: {
      Object,
      required: true
    },
    text: String,
    index: Number
  },

  computed: {
    truncated () {
      let txt = this.text
      let len = txt.length
      const max = 50
      return len > max ? txt.substring(0, max) + '...' : txt
    }
  },

  methods: {
    // tells parent app to remove the note
    remove () {
      this.$dispatch('remove', this.note)
    }
  }

}
</script>


<style>
  .preview {
    margin-bottom: 25px;
  }

  .inner-preview {
    font-family: 'Inconsolata', sans-serif;
    font-size: 14px;
    border:1px solid #eee;
    padding: 10px;
    cursor: pointer;
  }
</style>
