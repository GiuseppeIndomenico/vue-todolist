const { createApp } = Vue

createApp({
    data() {
        return {
            listToDo: [
                {
                    text: "Finire L'esercizio",
                    done: false
                },
                {
                    text: "Comprendere la lezione",
                    done: false
                }

            ],

            newItemText:'',
        }
    },
    methods: {
        addItem() {
            const newItemText = this.newItemText.trim()
            if (newItemText !== '') {
                this.listToDo.push({
                    text: newItemText,
                    done: false
                })
               this.newItemText = ''
            }
        }
    }
}).mount('#app')
