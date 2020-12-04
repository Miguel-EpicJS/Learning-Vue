const app1 = {
    data() {
        return {
            message: "Hello Vue 3"
        }
    }
};
Vue.createApp(app1).mount('#app1')

const app2 = {
    data() {
        return {
            message: "Voiala, the time now is: " + new Date().toLocaleString()
        }
    }
}
Vue.createApp(app2).mount('#app2')

const app3 = {
    data() {
        return {
            message: "You can see me",
            seen: true
        }
    }
}
Vue.createApp(app3).mount('#app3')

const app4 = {
    data() {
        return {
            todos: [{ text: "Become Rich" }, { text: "See Harry Potter" }, { text: "Sleep" }, { text: "Repeat" }]
        }
    }
}
Vue.createApp(app4).mount('#app4');

const app5 = {
    data() {
        return {
            message: "Click Me !",
        }
    },
    methods: {

        reverse() {
            this.message = this.message.split("").reverse().join("");
        }

    }
}
Vue.createApp(app5).mount('#app5');

const app6 = {
    data() {
        return {
            message: 'Nothing...'
        }
    }
}
Vue.createApp(app6).mount('#app6');
