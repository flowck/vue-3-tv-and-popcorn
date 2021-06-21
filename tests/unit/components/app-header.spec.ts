import { shallowMount } from "@vue/test-utils";
import AppHeader from "../../src/components/app-header.vue";

describe("app-header.vue", () => {
  it("At least render the header component", () => {
    const appHeader = shallowMount(AppHeader, {});

    expect(appHeader).toBeTruthy();
  });
});
