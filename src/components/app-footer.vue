<template>
  <footer class="app-footer">
    <div class="app-footer__copyright">&copy; {{ year }} TV &amp; Popcorn</div>
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class AppFooter extends Vue {
  get year(): number {
    return new Date().getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  // @include debug;
  @include app-grid;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
