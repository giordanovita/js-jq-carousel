

function prev(){
    var activeImg = $('.active');

    if(activeImg.hasClass('first')){

        prevImg = $('img.last')
        activeImg.removeClass('active')
        prevImg.addClass('active')
 
    
     }else{
        var prevImg = activeImg.prev('img');


        activeImg.removeClass('active')
        prevImg.addClass('active')
         }







}


function next(){
    
    var activeImg = $('.active');
     if(activeImg.hasClass('last')){

        nextImg = $('img.first')
        activeImg.removeClass('active')
        nextImg.addClass('active')
 
    
     }else{
        var nextImg = activeImg.next('img');

        activeImg.removeClass('active')
        nextImg.addClass('active')
     }




}







function init(){
   $('.prev').click(prev)
   $('.next').click(next)

}
$(document).ready(init);