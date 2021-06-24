<template>
  <article class="app-show">
    <picture class="app-show__thumbnail">
      <source :srcset="image.medium" />
      <source :srcset="image.original" />
      <img :src="image.medium" :alt="name" />
    </picture>
    <h1 class="app-show__title">{{ name }}</h1>
  </article>
</template>

<script lang="typescript">
import { defineComponent } from "vue";
// import { Show } from "@/store/show/interface";
export default defineComponent({
  props: {
    name: { type: String, required: true },
    image: { type: Object, required: true }
  }
});
</script>

<style lang="scss" scoped>
.app-show {
  &__thumbnail {
  }
}
</style>
