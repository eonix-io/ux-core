
<template>
   <div
        class="modal-wrapper shadow fade"
        :class="{'show': show }"
        @click.self="shadowClick">
      <div class="modal-content-x container-fluid p-4 center-xy shadow bg-beige border rounded position-absolute col-sm-10 col-lg-8">
         <slot></slot>
      </div>
   </div>
</template>

<script lang="ts">
   import { defineComponent, nextTick, onUnmounted, ref } from 'vue';

   export default defineComponent({
      emits: {
         'close': () => true
      },
      setup(_, { emit }) {
         const shadowClick = (): void => {
            emit('close');
         };

         const keyPress = (evt: KeyboardEvent) => {
            if (evt.key !== 'Escape') { return; }
            emit('close');
         };

         window.addEventListener('keyup', keyPress);

         onUnmounted(() => {
            window.removeEventListener('keyup', keyPress);
         });

         const show = ref(false);
         nextTick(() => show.value = true);

         return { shadowClick, show };
      }
   });

</script>

<style lang="postcss" scoped>
   .modal-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 2000;
      backdrop-filter: blur(5px);
      max-width: 100vw; /*Because of the task modal. Whithout this, when we scale to xs and 100% is set, it extends off the screen because there's horizont scrolling from the columns */
   }

   .modal-content-x {
      overflow: auto;
      max-height: 90vh;
   }
</style>
