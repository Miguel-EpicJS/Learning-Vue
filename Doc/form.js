const app = Vue.createApp({
    data(){
        return {
            message: 'Edit me'
        }
    }
})
app.mount('#app')

const app2 = Vue.createApp({
    data(){
        return {
            message: 'Edit me'
        }
    }
})
app2.mount('#app2')

const app3 = Vue.createApp({
    data(){
        return{
            checked: false
        }
    }
})

app3.mount('#app3')

const app4 = Vue.createApp({
    data(){
        return {
            names: []
        }
    }
})

app4.mount('#app4')