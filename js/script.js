const { createApp } = Vue;

const opzioni = {
    data() {
        return {
            message: ' user',
            color: 'red',
            pics: 'https://picsum.photos/200/300'
        }
    }
}
createApp(opzioni).mount('#app')