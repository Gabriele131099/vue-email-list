Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            emails : ''
        },
        created(){
this.createEmailRandom()
        },
        methods: {
            createEmailRandom: function () {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response)

                })
            }
        }
    }
);
