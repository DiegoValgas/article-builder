import './assets/canva.css';
import { createApp, ref } from 'vue';
import Canva from './Canva.vue';
import PhosphorIcons from '@phosphor-icons/vue';

export class PagB {
    /**
     * @param {String} selector CSS selector where to mount the canva.
     * @param {Object} customConfig Custom configuration object.
     */
    constructor(selector, customConfig = {}) {
        if (!selector) {
            return;
        }

        this.config = ref(customConfig);

        createApp(Canva)
            .provide('config', this.config)
            .use(PhosphorIcons)
            .mount(selector);
    }

    /**
     * Set the function to call on save action.
     * @param {Function} action The function to call on save action.
     * @return {void}
     */
    saveAction(action) {
        if (typeof action !== 'function') {
            return;
        }

        this.config.value.saveAction = action;
    }

    /**
     * Set the content that build the page.
     * @param {String} content The page content.
     * @return {void}
     */
    setContent(content) {
        if (typeof content !== 'string') {
            return;
        }

        this.config.value.content = JSON.parse(content);
    }
}
