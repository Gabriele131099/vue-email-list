Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails :[],
        },
        indice:0,
        methods: {
            pushElement: function () {
                
                let tmp = parseInt(prompt('quante mail vuoi stampare?'))
            
                    for (let i = 0; i <tmp ; i++) {
                        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            this.emails.push(response.data.response)
                        });
                        this.indice++
                    }
                console.log(parseInt(tmp))
            },
            createEmailRandom : function () {
            }
        }
    }
);
