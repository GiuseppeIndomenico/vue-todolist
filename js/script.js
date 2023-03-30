const { createApp } = Vue

createApp({
    data() {
        return {
           listToDo: [
            {
                text:"Finire L'esercizio",
                done: false
            },
            {
                text:"Comprendere la lezione",
                done: false
            }
            
           ]
        }
    },
    methods(){
        
    }
}).mount('#app')
