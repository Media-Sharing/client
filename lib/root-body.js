Vue.component('main-content', {
    template : `
    <div>
        <center>
        <h1>Main Content</h1>
        <center>
         <show-content v-bind:contentsData="Quotesics"></show-content>
    </div>
    `,
    mehtods : {

    },
    data(){
        return {
            Quotesics: [{
                id: 1,
                name: 'we accept the love we think we deserve',
                music : '',                 
                image: "http://static-32.sinclairstoryline.com/resources/media/64981bf7-b0ec-48f0-b27b-e5ab30530b6d-large16x9_steve_04.jpg",
                userName : 'khodhi'
                
            }, {
                id: 1,
                name: 'we accept the love we think we deserve',
                music : '',                  
                image: "https://www.tripsavvy.com/thmb/Pla-EPiPKm0KSM5H7_pHFE8mWNQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-498928946-59cd1dd3af5d3a0011d3a87e.jpg",
                userName : 'alex'
            }, {
                id: 1,
                name: 'we accept the love we think we deserve',
                music : '',                  
                image: "https://2.bp.blogspot.com/-rRNJBAQ6my8/V_OcwYGPOJI/AAAAAAAAQmQ/6o0z9BsPi3YJxerpB-qbSorwwx4DlvuQACLcB/s1600/IMG_20161004_190858.jpg",
                userName : 'kua'
            }, {
                id: 1,
                name: 'we accept the love we think we deserve',
                music : '',                  
                image: "https://www.thoughtco.com/thmb/9Piu9DVaiJLLVZ1gJKT8Fwdljks=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/166370483-56cb36da5f9b5879cc54103c.jpg",
                userName : 'coy'
            }]
        }
    }  
  })