import './assets/page.css';
import { createApp, ref } from 'vue';
import Page from './Page.vue';

export class Builder {
    /**
     * @param {String} selector CSS selector where to mount the page.
     * @param {Object} customConfig Custom configuration object.
     */
    constructor(selector, customConfig = {}) {
        if (!selector) {
            return;
        }

        this.config = ref(customConfig);

        createApp(Page)
            .provide('config', this.config)
            .mount(selector);
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
