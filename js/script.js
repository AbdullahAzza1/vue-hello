const { createApp } = Vue;

createApp({
    data() {
        return {
            message: ' user',
            color: 'red',
            pics: 'jumbo.png'
        }
    }
}).mount('#app')