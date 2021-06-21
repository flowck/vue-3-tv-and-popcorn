<template>
  <tv-header></tv-header>
  <router-view />
  <tv-footer></tv-footer>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import TvHeader from "./components/tv-header.vue";
import TvFooter from "./components/tv-footer.vue";
import { Vue, Options } from "vue-class-component";

@Options({
  components: { "tv-header": TvHeader, TvFooter },
  methods: { ...mapActions(["initApp"]) },
})
export default class App extends Vue {
  private initApp!: { (): void };

  mounted(): void {
    this.initApp();
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

body {
  font-family: $font-body;
}
</style>
