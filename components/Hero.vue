<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
async function goToContact() {
  const numberPages = data.length;
  // simulate a click on the element with the class "page" and the key 1
  for (let i = 1; i < numberPages;) {
    console.log('i', i);
    document.querySelector('.page:nth-child(' + i + ')').click();
    await new Promise(resolve => setTimeout(resolve, 500));
    i += 2;
    if (i > 20) {
      console.log('break');
      break;
    }
  }
}

</script>

<template>
  <div>
    <h1 class="antonio font-medium text-4xl text-color-text text-[#163600]">
      <span class="">Bibin Photography Magazine</span>
    </h1>
    <p class="anton text-sm mt-10 text-color-text">
      Bibin photography magazine is a digital platform dedicated to curating the finest works from photographers of Afghanistan, showcasing their unique artistry to the world. We aim to highlight the unseen and undiscovered talents of Afghanistan photographers, giving them a global platform to share their art and earn through their photography.
    </p>
    <p class="anton text-sm mt-4">Photo Credit: Zabiullah Habibi</p>
    <Social />
    <NuxtLink
        @click="goToContact()"
        class="hidden lg:block cursor-pointer flex items-center hover:text-color-primary/50"
    >
      <span class="anton sr-only">Go to the contact page</span>
      <Icon name="i-lucide-external-link" class="size-4 text-color-primary/90 text-center mr-2" />
      <span class="font-medium text-sm text-color-primary " >Contact us</span>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>