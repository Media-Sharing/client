Vue.component("upload-content", {
  template: `
    <div>
    <div class="upload-content">
    <div class="container bg-dark">
        <div class="row" style="margin-top:10px; color: #ffffff">
            <div class="col-4" style="margin-top:10px">
                <div class="form-group">
                   
                    Qoutes : <input type="text" name="fname" v-model="quotes"><br><br>
                    Creator : <input type="text" name="lname"><br>
                </div>
            </div>
            <div class="col-md-4"  style="margin-top:10px">
                <div class="upload-btn-wrapper">
                    Upload image :
                    <input type="file" name="myfile" v-on:change="getImage($event)"/>
                </div>
            </div>
            <div class="col-md-4"  style="margin-top:10px">
                <div class="upload-btn-wrapper">
                </div>
                <button type="submit" class="btn btn-primary" id="submit" v-on:click="upload">Submit</button>
            </div>
        </div>
    </div>
    </div>
</div>
                    `,
  props: ["contentsData"],
  methods: {
    createdBy(userName) {
      return `by : ${userName}`;
    },
    getImage(link) {
      this.urlImge = link.target.files[0]
      console.log("ini image",this.urlImge);
      
    },
    getAudio(link) {
        this.urlAudio = link.target.files[0]
    },
    getFile(link, type){
        if (type === 'image') {
            this.urlImge = link.target.files[0]
        } else {
            this.urlAudio = link.target.files[0] 
        }
        console.log("ini data =====>", link.target.files[0]);
    },
    upload(){
        let formData = new FormData()
        formData.append("image", this.urlImge)
        console.log(formData, '<-- form data')
        axios.post('http://localhost:3000/upload', formData)
        .then((image) => {
            let dataImg = image.data.link
            // console.log(dataImg);
            axios.post('http://localhost:3000/insert',{
                quote : this.quotes,
                urlImage : dataImg
            })
            .then(dataUpload=>{
                console.log('========',dataUpload)
            })
            
            
            
              
        })
        .catch((err) => {
            console.log(err);
            
        });
    }
  },
  data() {
      return {

          urlImge: ``,
          urlAudio: ``,
          qoutes: ``
      }
  }
});
