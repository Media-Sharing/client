Vue.component('show-content', {
    template :
    `<div class="row">
                        <figure class="catalog col-md-3" v-for="(contentData,index) in contentsData">
                            <img v-bind:src="contentData.image" alt="sample57" class="col-md-12" v-on:click="openModal(contentData)"data-toggle="modal" data-target="#exampleModal" />
                            <figcaption>
                                <h3>{{contentData.name}}</h3>
                                <p>{{contentData.description}}</p>
                                <div class="price">
                                    {{contentData.price}}
                                </div>
                                <span>{{contentData.userName}}</span>
                            </figcaption>
                            
                                <button type="submit" class="col-md-6" v-on:click="playsong(contentData.music)">
                                        playsong<i> <img class="col-md-6" src="./aset/play-button.png"></i>
                                </button>                                                                                                             
                        </figure>
                    </div>`,
    props :  ['contentsData'],
    methods : {
        openModal(){

        },
        playsong(){
            
        }
    }
  })