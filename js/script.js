var slideshow = document.getElementById('container');

// var index = 1;
var arr =["imagea.jpg","imageb.jpg","imagec.jpg","image4.jpg","image5.jpg"];
var currentSlideIndex = 0;

// var currentindex= arr;


function changephoto(){
    // slideshow.style.backgroundImage = "url('assets/image"+ index +".jpg')";
    var image = arr[currentSlideIndex];
    slideshow.style.backgroundImage = "url('assets/"+image+"')";
}

function check(){
    // if (index<=1){
    //     index=4;
    // }
    // else if (index>=5){
    //          index=0
    // }

     if (currentSlideIndex < 0 ){
        currentSlideIndex = 4;
    }
   else if (currentSlideIndex > arr.length - 1 ){
        currentSlideIndex = 0;
    }
}

function next(){
    
    currentSlideIndex++;
    check();
    changephoto();


   
}
function prev(){
    // --index;
    currentSlideIndex--;
    check();
    changephoto();
}


