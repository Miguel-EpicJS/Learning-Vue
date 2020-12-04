Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

let app = new Vue({
    el: "#app",
    data:{
        todos: [{id: 0, text: "Sleep"}, {id: 1, text: "Eat"}, {id: 2, text: "Play"}]
    }
})