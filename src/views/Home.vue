<template>
  <div class="view-home">
    <section class="view-home__shows">
      <app-show
        :key="show.id"
        :name="show.name"
        :image="show.image"
        v-for="show in shows"
        class="view-home__shows__show"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { MODULES } from "@/store";
import { defineComponent } from "vue";
import AppShow from "../components/app-show.vue";

export default defineComponent({
  components: {
    AppShow,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(MODULES.SHOW_MODULE, ["shows"]),
  },
});
</script>

<style lang="scss" scoped>
.view-home {
  &__shows {
    $show-width: 14%;

    // gap: 15px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    // grid-template-columns: repeat(auto-fill, $show-width);

    &__show {
      width: $show-width;
      @include debug;
    }
  }
}
</style>
