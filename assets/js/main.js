const { createApp } = Vue

  createApp({
    data() {
      return {
        arrayMail: []
      }
    },

    mounted(){
    for(let i = 0; i < 10; i++){
      this.generateMailRandom()
    }
       
    },

    methods: {
      generateMailRandom(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          this.arrayMail.push(res.data.response);
        })
      }
    }

  }).mount('#app')