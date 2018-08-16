Vue.component('upload-content', {
    template :
    `
    <div>
    <div class="container" style="background-color:#F8F9FA; margin-top: 20px; padding: 10px">
    <div class="row">

        <div class="col-4">
            <div class="form-group">
                <label for="exampleInputEmail1">Qoutes</label><br>
                <textarea rows="3" cols="41">
                </textarea>
            </div>
        </div>
        <div class="col-4">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Picture file input</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-4">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Audio file input</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
            </form>
            <div class="submit" style="text-align:right">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</div>
</div>
                    `,
    props :  ['contentsData'],
    methods : {
        createdBy (userName){
            return `by : ${userName}`
        }
    }
  })