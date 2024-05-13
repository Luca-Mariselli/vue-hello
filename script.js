const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Hello VueJS',
            picsum: `https://picsum.photos/200/300`
        }
    },
    
    methods: {

    },

    mounted(){
        console.log(`Benvenuto`)
    }

}).mount('#app')