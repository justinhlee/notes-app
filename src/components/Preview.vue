<template>
  <a v-link="{ path: '/note/' + index }">
    <div class="preview">
      {{ truncated }}
    </div>
  </a>
</template>

<script>
export default {

  name: 'Preview',

  props: {
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
  }

}
</script>


<style>
  .preview {
    font-family: 'Inconsolata', sans-serif;
    font-size: 14px;
    padding: 10px;
    border:1px solid #eee;
    margin-bottom: 10px;
  }
</style>
