Vue.component('upload-content', {
    template :
    `
    <div>
    <div class="upload-content">
    <div class="container bg-dark">
        <div class="row" style="margin-top:10px" >
            <div class="form col-md-4 offset-md-2" style="margin-top:10px">
                <div class="form-group">
                    <textarea class="form-control-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div class="upload col-md-3"  style="margin-top:10px">
                <div class="upload-btn-wrapper">
                    <button class="btn">Upload a file</button>
                    <input type="file" name="myfile" />
                </div>
                <br>
                <button type="submit" class="btn btn-primary" id="submit">Submit</button>
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