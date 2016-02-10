<template>
  <!-- Possibly turn list view into its own flexbox container with the previews being its items -->
  <div class="list-view">
    <div class="container">
      <div class="row">
        <div class="eight offset-by-two columns">
          
          <preview v-for="note in notes":text="note.text">
          </preview>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// also will need to handle localStorage logic here in a store file
import Preview from './Preview.vue'

// dummy notes
const para1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac nisi efficitur dui maximus rutrum. Duis venenatis condimentum augue eu tristique. Sed sagittis bibendum consectetur. Aenean sit amet sem non leo tincidunt egestas. Vestibulum tincidunt elit sit amet orci pulvinar, in pellentesque sem pellentesque.'
const para2 = 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lacinia dolor tristique volutpat consequat. Integer placerat diam id nisi mollis pharetra. '
const para3 = 'Proin sit amet nibh imperdiet, eleifend libero feugiat, vulputate massa. Quisque est mi, consectetur non rutrum ut, commodo vitae lectus. Mauris commodo ligula est, eu mattis turpis lacinia ac.'
const para4 = 'This is the shortest note.'

export default {

  name: 'ListView',

  components: {
    Preview
  },

  data () {
    return {
      notes: [
        { text: para1},
        { text: para2},
        { text: para3},
        { text: para4}
      ]
    }
  }
}
</script>

<style>
  .list-view {
    padding-top: 25px;
  }
</style>