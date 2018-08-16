Vue.component('show-modal', {
    template: `
    <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Qoutsic</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" v-bind:src="itemContentModal.urlImage" alt="Card image cap" data-toggle="modal" data-target="#exampleModal">
                        <div class="card-body">
                            <p class="card-text">{{itemContentModal.quote}}</p>
                            <p class="card-text" style="text-align:right">- {{itemContentModal.creator}}</p>
                            <audio controls>
                                    <source src="#" type="audio/mpeg">
                                    <iframe src="itemContentModal.urlSound"></iframe>
                            </audio>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                                </div>
                                <small class="text-muted" style="text-align:right">9 views</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    `,
    props: ['itemContentModal'],
    methods: {
        openModal(data) {
          console.log(data)
        },
        playsong() {

        }
    }
})