Vue.component('main-content-home', {
    template : `
    <div>
    
        
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
        $.get('http://localhost:3000/mostViewed')
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