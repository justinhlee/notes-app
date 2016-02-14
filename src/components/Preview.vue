<template>
    <div class="preview">
      <div class="inner-preview">
        <a class="preview-title" v-link="{ path: '/note/' + index }">
          <h4>{{ truncated }}</h4>
          {{ date }}  
        </a>
        <a class="delete nav-button" v-show="deleting" v-on:click="remove" transition="fade">DELETE</a>
      </div>
    </div>
</template>

<script>

export default {

  name: 'Preview',

  data () {
    return {
      deleting: false
    }
  },

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
      const max = 40
      return len > max ? txt.substring(0, max) + '...' : txt
    },

    date () {
      return this.note.date
    }
  },

  events: {
    toggle (isDeletable) {
      this.deleting = isDeletable
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
    width: 100%;
    margin-bottom: 10px;
  }

  .preview h4 {
    margin: 0;
  }

  .preview-title {
    color: rgb(51, 51, 51);
  }

  .preview-title:hover {
    color: rgb(84, 84, 84);
  }

  .inner-preview {
    padding: 20px;
  }

  .delete {
    margin-left: 10px;
    color: #f44336;
    cursor: pointer;
  }

  .delete:hover {
    color: #f44336;
    cursor: pointer;
  }

  .fade-transition {
    transition: all .3s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }



</style>
