

const {createApp} = Vue;

createApp(
    {
        data() {
            return{
                activeIndex: 0,
                todos: [
                    {
                        text:'fare i compiti',
                        done: false,
                    }, 
                    {
                        text:'fare le valigie',
                        done: false,
                    },
                    {
                        text:'fare la pace',
                        done: false,
                    },
                    {
                        text:'fare schifo',
                        done: false,
                    },
                    ],
            }
        },
        methods: {
            
        }

    }
).mount('#app')

