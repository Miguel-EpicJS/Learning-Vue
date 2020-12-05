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

const buttonApp = Vue.createApp({})

buttonApp.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>`
})
buttonApp.mount('#app2')

const App3 = {
    data(){
        return {
            posts: [
                {id: 1, title: "Give me one star"},
                {id: 2, title: "Give me a cup of Coffee"},
                {id: 3, title: "Give me your mone... your code"},
            ],
        }
    }
}
const app3 = Vue.createApp(App3)

app3.component('blog-post', {
    props: ['title'],
    template: `<h4> {{ title }} </h4>`
})

app3.mount('#app3')

const App4 = {
    data(){
        return {
            posts: [
                {id: 1, title: "Give me one star"},
                {id: 2, title: "Give me a cup of Coffee"},
                {id: 3, title: "Give me your mone... your code"},
            ],
            postFontSize: 1
        }
    }
}

const app4 = Vue.createApp(App4)

app4.component('blog-post', {
    props: ['title'],
    template: `
        <div class="blog-post">
            <h4> {{ title }} </h4>
            <button @click="$emit('enlarge-text', 0.1)">Enlarge Text</button>
            <button @click="$emit('reduce-text', -0.1)">Reduce text</button>
        </div>
    `
})
app4.mount('#app4')