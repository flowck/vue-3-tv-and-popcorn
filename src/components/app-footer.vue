<template>
  <footer class="app-footer">
    <div class="app-footer__copyright">&copy; {{ year }} TV &amp; Popcorn</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    year(): number {
      return new Date().getFullYear();
    },
  },
  setup: (props) => {
    console.log(props);
  },
});
</script>

<style lang="scss" scoped>
.app-footer {
  // @include debug;
  @include app-grid;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
