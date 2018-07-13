/Variables Id & Class/ 
var slides = document.querySelectorAll('#slides .slide');
var dots = document.querySelectorAll('.dot');
var next = document.getElementById('arrow-right');
var previous = document.getElementById('arrow-left');
/Function Variables/
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

/Next Slide Function/ 
function nextSlide(){
    goToSlide(currentSlide+1);
}

/Previous Slide Function/ 
function previousSlide(){
    goToSlide(currentSlide-1);
}

/Slide and Dot Function/ 
function goToSlide(n){
    slides[currentSlide].className = 'slide';
    dots[currentSlide].className = 'dot';
    currentSlide = (n+slides.length)%slides.length;
	currentSlide = (n+dots.length)%dots.length;
    slides[currentSlide].className = 'slide showing';
	dots[currentSlide].className = 'dot dot-Higlight';
}

/Dot Selection Function/ 
function slideSelected(n){
    currentSlide = n;
    var i;
    for ( i=0 ; i < slides.length && 
    			i <dots.length; i++ ) {
        if( i == n) {
            slides[i].className = 'slide showing';
            dots[i].className = 'dot dot-Higlight';

        } else {
            slides[i].className = 'slide';
            dots[i].className = 'dot';
        }
    }
}


/Onclick Function Caller for Arrows(left/right)/ 
next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};

