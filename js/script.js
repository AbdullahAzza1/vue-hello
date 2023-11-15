const { createApp } = vue;

createApp({
    data() {
        return {
            message: 'ciao user',
            numeretto: 100
        }
    }
}).mount('#app')