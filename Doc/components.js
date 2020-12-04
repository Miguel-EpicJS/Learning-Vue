const appData = {
    data() {
        return {
            todos: [{ id: 0, text: "Sleep" }, { id: 1, text: "Eat" }, { id: 2, text: "Play" }]
        }
    }
}
const app = Vue.createApp(appData)
app.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
app.mount('#app')