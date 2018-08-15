Vue.component('footer-content', {
    template: `
    <div>
    <div class="container-fluid pt-5 pb-5 bg-dark text-light">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="row">
                    <h5>Meta</h5>
                </div>
                <div class="row mb-4">
                    <div class="underline bg-light" style="width: 50px;"></div>
                </div>
                <p>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> Register</p>
                <p>
                    <i class="fa fa-chevron-right" aria-hidden="true"></i> Log In</p>

            </div>
            <div class="col-md-3">
                <div class="row">
                    <h5>Recent Posts</h5>
                </div>
                <div class="row mb-4">
                    <div class="underline bg-light" style="width: 50px;"></div>
                </div>
                <div class="row">
                    <div class="media">
                        <img src="./aset/aset-3.jpg" class="img-fluid col-md-6" alt="media-image">
                        <div class="media-body ml-2">
                            <h6>Jackets For The Soul. What Color Is Yours?</h6>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="media">
                        <img src="./aset/aset-2.jpg" class="img-fluid col-md-6" alt="media-image">
                        <div class="media-body ml-2">
                            <h6>Best Fabrics For Your Dream Dress!</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 pl-4">
                <div class="row">
                    <h5>About</h5>
                </div>
                <div class="row mb-4">
                    <div class="underline bg-light" style="width: 50px;"></div>
                </div>
                <div class="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel inventore quis harum mollitia ex
                        esse obcaecati deserunt alias fuga quia.
                        <br>Vel inventore quis harum mollitia.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="row">
                    <h5>Tags</h5>
                </div>
                <div class="row mb-4">
                    <div class="underline bg-light" style="width: 50px;"></div>
                </div>
                <button class="btn btn-outline-light">Nike</button>
                <button class="btn btn-outline-light">Hypebeast</button>
                <button class="btn btn-outline-light">Sneakers</button>
                <button class="btn btn-outline-light">Skate Board</button>

            </div>
        </div>
    </div>
</div> 
</div>
    `
})