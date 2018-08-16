Vue.component('main-content', {
    template : `
    <div>
    <upload-content></upload-content>
        <h1>Main Content</h1>
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
        $.get('http://127.0.0.1:8080/lib/dummy.json')
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