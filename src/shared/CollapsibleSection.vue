<template>
  <div class="header">
    <span v-if="open" @click="open = !open">&#x25b2; Collapse</span>
    <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
  </div>
  <slot v-if="open">
    <div>DefaultContent</div>
  </slot>
  <!--Toggleable-->
</template>

<script>
export default ({
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
});
</script>

<style scoped>

</style>
