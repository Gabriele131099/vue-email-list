Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails :'',
        },
        created(){
            this.createEmailRandom()
        },
        methods: {
            createEmailRandom: function () {
                for (let i = 0; i < 5; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                        this.emails.push(response.data.response)
    
                    })
                }
            }
        }
    }
);
