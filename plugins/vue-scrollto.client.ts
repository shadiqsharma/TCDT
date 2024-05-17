import { defineNuxtPlugin } from '#app'
import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        duration: 500, // Duration of the scroll (in milliseconds)
        easing: 'ease-out', // Easing function for the scroll
        offset: -50, // Offset (in pixels) for the scroll
        force: true, // Force the scroll to happen
        cancelable: true, // Allow the scroll to be canceled
        x: false, // Disable horizontal scrolling
        y: true // Enable vertical scrolling
    })
})
