const { createApp } = Vue

createApp({
  data() {
    return {
      arrayMail: []
    }
  },

  created(){
    for(let i = 0; i < 10; i++){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
        this.arrayMail.push(res.data.response);
      })
    }
  },

  methods:{
    copyText(position) {
      document.getElementById(`mail${position}`).select()
      document.execCommand("copy");
      document.getElementById(`group${position}`).innerHTML = `
          <span class="badge text-bg-success">Copied to clipboard</span>
        `
    }
  }

}).mount('#app')