let app1 = new Vue({ 
    el: '#app1',
    data: {
        message: 'Hello Word!'
    }
});

let app2 = new Vue({
    el: '#app2',
    data: {
        message: "Voiala, the time now is: " + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        message: "You can see me",
        seen: true,
    }
})

let app4 = new Vue({
    el: '#app4',
    data:{
        todos: [{text: "Become Rich"}, {text: "See Harry Potter"}, {text: "Sleep"}, {text: "Repeat"}]
    }
})

let app5 = new Vue({
    el: '#app5',
    data: {
        message: "Click Me !",
    },
    methods: {
        reverse: function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
})

let app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Nothing...'
    }
})