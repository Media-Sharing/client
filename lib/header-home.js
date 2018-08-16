Vue.component("header-content", {

    template: `
  
    <div>
  
      <div class="collapse bg-dark" id="navbarHeader">
  
              <div class="container">
  
                  <div class="row">
  
                      <div class="col-sm-8 col-md-7 py-4">
  
                          <h4 class="text-white">About</h4>
  
                          <p class="text-muted">Qoutsic presents most inspirational and motivating qoutes, arts, news and tips
  
                              on the Internet.</p>
  
                      </div>
  
                  </div>
  
              </div>
  
          </div>
  
          <div class="navbar navbar-dark bg-dark box-shadow">
  
              <div class="container d-flex justify-content-between">
  
                  <a href="#" class="navbar-brand d-flex align-items-center">
  
                      <img src="./images/logo.png" alt="logo" width="45px">
  
                      <strong>Qoutsic</strong>
  
                  </a>
  
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
  
                      aria-expanded="false" aria-label="Toggle navigation">
  
                      <span class="navbar-toggler-icon"></span>
  
                  </button>
  
              </div>
  
              <a href="#" style="color: white; margin-right: 150px">Logout</a>
  
          </div>
  
      </div>
  
      `
  
  });