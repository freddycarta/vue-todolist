const todos = [
    {
        text:'fare i compiti',
        done: false
    },
    {
        text:'fare la spesa',
        done: false
    },
    {
        text:'fare schifo',
        done: false
    },
    {
        text:'rifarlo il giorno dopo',
        done: false
    },
    
]

const app = new Vue({
    el: '#app',
    data: {
        todos:todos,
    },
})