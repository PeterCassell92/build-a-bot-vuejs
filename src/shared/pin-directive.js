// custom directives can have bindings e.g. 'v-pin:arg.modifier.modifier'
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["element"] }] */

function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  beforeMount(element, binding) {
    // Object.keys(binding.value).forEach((position) => {
    //   element.style[position] = binding.value[position];
    // });
    // element.style.position = 'absolute';
    applyStyle(element, binding);
  },
  // Necessary to have updated hook to manage changes to bindings. This is not automatic.
  updated: (element, binding) => {
    applyStyle(element, binding);
  },
  // unmounted -- also possible
  // beforeUnmount -- also possible
};
