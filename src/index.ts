
import type { App } from '@vue/runtime-core';
import Modal from './components/Modal.vue';

export default function install(app: App) {
   app.component('ex-modal', Modal);
}

export { default as Modal } from './components/Modal.vue';