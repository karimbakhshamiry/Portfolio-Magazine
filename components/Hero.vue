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
    <div class="antonio font-medium text-4xl text-color-text text-[#163600]">
      <p class="mb-2">Bibin</p>
      <p class="mb-2">Photography</p>
      <p class="mb-2">Magazine</p>
    </div>
    <p class="anton text-sm mt-10 text-color-text">
      We encourage you to explore the world through fresh perspectives.
    </p>
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