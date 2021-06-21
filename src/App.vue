<template>
  <app-header />
  <main class="app-views">
    <router-view />
  </main>
  <app-footer />
</template>

<script lang="ts">
import { mapActions } from "vuex";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components: { AppHeader, AppFooter },
  methods: { ...mapActions(["initApp"]) },
})
export default class App extends Vue {
  private initApp!: { (): void };

  mounted(): void {
    // this.initApp();
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.app-views {
  // @include debug;
}
</style>
