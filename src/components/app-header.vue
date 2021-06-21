<template>
  <header class="app-header">
    <div class="app-flex app-flex--space-between">
      <!-- LOGO -->
      <div class="app-header__logo">
        <h1>TV &amp; Popcorn</h1>
      </div>

      <!-- MENU -->
      <nav class="app-header__menu">
        <ul>
          <li>
            <router-link to="#">Home</router-link>
          </li>
          <li>
            <router-link to="#">TV Shows</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- PROFILE -->
    <div class="app-flex">
      <div class="app-header__search"></div>
      <div class="app-header__profile"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  display: flex;
  @include app-grid;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: space-between;
  background-color: $app-color-dark;

  &__logo {
    font-weight: bold;
    color: $app-color-red;
    text-transform: uppercase;
  }

  &,
  &__menu a {
    color: $app-color-white;
  }

  &__menu {
    margin-left: 20px;

    ul {
      display: flex;

      li {
        margin-left: 30px;
      }
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
