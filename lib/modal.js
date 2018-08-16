Vue.component('show-modal', {
    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{itemContentModal.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body col-md-12">
          
            <div class="form-group">
              <img v-bind:src="itemContentModal.image" class="col-md-12"></img>
            </div>
            <audio controls>
                <source src="https://soundcloud.com/uiceheidd/lucid-dreams-forget-me" type="audio/ogg">
                
                Your browser does not support the audio element.
            </audio>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal"><i></i></button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
    
  </div>`,
    props: ['itemContentModal'],
    methods: {
        openModal(data) {

        },
        playsong() {

        }
    }
})