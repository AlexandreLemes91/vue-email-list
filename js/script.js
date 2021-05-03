const app = new Vue(
    {
        el: "#app",

        data: {
            eMails: [],

            emailCapacity: 10,
        },

        created() {
            for( let i=0 ; i < this.emailCapacity ; i++ ){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail? ")
                    .then( resp => {
                        console.log(resp.data);
                        this.eMails.push(resp.data.response)
                        console.log(this.eMails);
                    })
            }
        }
        
    }
)