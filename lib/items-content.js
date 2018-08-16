Vue.component('show-content', {
    template :
    `
    <div>
    <div class="show-content">
    <div class="content">
        <div class="container">
    <div class="row">
                        <figure class="catalog col-md-4" v-for="(item) in itemsContent">                            
                        <img v-bind:src="item.image" alt="sample57" class="col-md-12"  v-on:click="viewCount(item)"data-toggle="modal" data-target="#exampleModal" />
                            <figcaption>                               
                                <span>{{createdBy(item.userName)}}</span><br>
                                <span>views :{{(item.countView)}}</span>
                                
                            </figcaption>                                                             
                                <show-modal id="exampleModal" v-bind:itemContentModal="item"></show-modal>                                                                                                        
                        </figure>                        
                    </div>
                    </div>
                    </div>
                </div>
                            
                    </div>
                    `,
    props :  ['itemsContent'],
    methods : {
        createdBy (userName){
            return `by : ${userName}`
        },
        viewCount(item){
            item.countView +=1
            
        }
    }
  })