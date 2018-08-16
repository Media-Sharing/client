Vue.component('main-content', {
    template : `
    <div>
    <upload-content></upload-content>
        
         <show-content v-bind:itemsContent="data"></show-content>
         
    </div>
    `,
    mehtods : {
        
    },
    data(){
        return {
            data: []
        }
    },
    mounted()  {
        $.get('http://localhost:3000/allData')
        .done(data => {
            console.log(data)
            this.data = data
            console.log(this.data)
        })
        .fail(err => {
            console.log(err)
        })     
    }
  })