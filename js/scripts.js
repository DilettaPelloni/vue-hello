const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello World!',
            imgSrc: 'https://unsplash.it/640/425'
        }
    }
}).mount('#app');