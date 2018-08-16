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
                      <a class="text-light mr-5 ml-5" href="homeuser.html">Most View</a>
                      <a class="text-light" href="index.html">Home</a>
                  </a>
                  <div>
                  
                    </div>
                    <div>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader"
  
                      aria-expanded="false" aria-label="Toggle navigation">
  
                      <span class="navbar-toggler-icon"></span>
    
                  </button>
                  <a href="#" style="color: white" @click="logout">Logout</a>
                  </div>
              </div>
       
  
          </div>
  
      </div>
  
      `,
      methods :{
          logout(){
              localStorage.clear()
              window.location="http://localhost:8080/signin.html"
          }
      }
  
  });

  