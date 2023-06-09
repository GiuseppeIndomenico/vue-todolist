const { createApp } = Vue

createApp({
    data() {
        return {
            listToDo: [
                {
                    text: "Finire L'esercizio",
                    done: true
                },
                {
                    text: "Comprendere la lezione",
                    done: false
                }
            ],
            newItemText: '',
        }
    },
    methods: {
        addItem() {
            newItemText = this.newItemText.trim()
            if (newItemText !== '') {
                this.listToDo.push({
                    text: newItemText,
                    done: false
                })
                this.newItemText = ''
            }
        },

        deleteItem(index) {
            this.listToDo.splice(index, 1);
        },
        doneItem(index) {
            this.listToDo[index].done = true;
        }


    }
}).mount('#app')
