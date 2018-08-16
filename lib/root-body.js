Vue.component('main-content', {
    template : `
    <div>
        <h1>Main Content</h1>
         <show-content v-bind:contentsData="Quotesics"></show-content>
    </div>
    `,
    mehtods : {

    },
    data(){
        return {
            Quotesics: []
        }
    },
    mounted(){
        axios.get(`http://127.0.0.1:5500/lib/dummy.json`)
        .then((result) => {
            this.Quotesics = result.data
            console.log(this.Quotesics); 
        }).catch((err) => {
            
        });
    } 
  })