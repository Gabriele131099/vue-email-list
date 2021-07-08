Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails :[],
            visible:false,
        },
        indice:0,
        methods: {
            pushElement: function () 
            {
                
                this.indice = parseInt(prompt('quante mail vuoi stampare?'))
                for (let i = 0; i < this.indice ; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response)
                    });
                    if (i===this.indice ) {
                        this.visible = true
                    }
                }
            },
        }
    }
);  
