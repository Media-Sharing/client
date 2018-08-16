Vue.component('show-content', {
    template :
    `
    <div>
    <div class="album py-5" style="padding:30px">
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://goo.gl/J54s6o" alt="Card image cap" width="10%" data-toggle="modal" data-target="#exampleModal">
                <div class="card-body">
                    <p class="card-text">"Faith is not belief without proof, but trust without reservation."</p>
                    <p class="card-text" style="text-align:right">- Elton Trueblood</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                        </div>
                        <small class="text-muted">9 views</small>
                    </div>
                </div>
            </div>
        </div>             

    </div>
</div>
<show-modal></show-modal>
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