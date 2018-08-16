Vue.component('show-content', {
    template :
    `
    <div>
    <div class="album py-5" style="padding:30px">
    <div class="row">
        <div class="col-md-4"  v-for="itemContent in itemsContent">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" v-bind:src="itemContent.urlImage" alt="Card image cap" width="10%" data-toggle="modal" data-target="#exampleModal" v-on:click="openModal(itemContent)" >
                <div class="card-body">
                    <p class="card-text">{{itemContent.quote}}</p>
                    <p class="card-text" style="text-align:right">{{createdBy(itemContent.creator)}}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group row">                            
                    <a href="#"> <img class="col-md-12" src="../aset/facebook.png"></a>
                    <a href="#"> <img class="col-md-12" src="../aset/twitter.png"></a>
                </div>
                        <small class="text-muted">{{itemContent.view}} views</small>
                    </div>
                </div>
            </div>
            
        </div>             

    </div>
</div>
<show-modal v-bind:itemContentModal="dataModal"></show-modal>

</div>
                    `,
    props :  ['itemsContent'],
    data(){
        return {
            dataModal: []
        }
    },
    methods : {
        createdBy (userName){
            return `- ${userName}`
        },
        openModal(item){
            this.dataModal = item        
            item.view +=1
             axios.post( "http://localhost:3000/view", item)
                .then(function(item) {
                    console.log(item);
                })
                .catch(function() {
                  console.log( "error" );
                })
        }
    }
  })