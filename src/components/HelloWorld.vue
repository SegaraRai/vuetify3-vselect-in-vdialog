<script setup lang="ts">
import { ref } from 'vue';

const options = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'barbar',
  },
  {
    title: 'Baz',
    value: 'buzz',
  },
];

const selected = ref('foo');

const dialog = ref(false);
</script>

<template>
  <VContainer>
    <div>This works. (though there is warning in console)</div>
    <VSelect
      v-model="selected"
      label="Select one"
      :items="options"
      hint="Some nice hint"
    />

    <VBtn @click="dialog = true">Open dialog</VBtn>
    <VDialog v-model="dialog">
      <VCard style="width: 20rem; max-width: 100%; height: 20rem">
        <VCardHeader>
          <VCardHeaderText>
            <VCardTitle>Dialog title</VCardTitle>
          </VCardHeaderText>
        </VCardHeader>
        <VCardText>
          <div>This doesn't.</div>
          <VSelect
            v-model="selected"
            label="Select one"
            :items="options"
            hint="Some nice hint"
          />
        </VCardText>
      </VCard>
    </VDialog>
  </VContainer>
</template>
