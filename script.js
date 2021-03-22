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

       nextImg = $('.first')
       activeImg.removeClass('active')
       nextImg.addClass('active')


    }else{
       var nextImg = activeImg.next('img');

       activeImg.removeClass('active')
       nextImg.addClass('active')
    }
 }

 
 function nextInd(){ 
      
     $(".next").click(function(){
         var indicatore = $('.indicators ul .blue')
         if(indicatore.hasClass('last')){
          nextIndic=$(indicatore).next('li')

          nextIndic = $('li.first')
          indicatore.removeClass('blue')
          nextIndic.addClass('blue')
         }else{
            var nextIndic=$(indicatore).next('li')
            indicatore.removeClass('blue')
            nextIndic.addClass('blue')
   
         }
})
 }

function prevInd(){ 
      
 
   $(".prev").click(function(){
       var indicatore = $('.indicators ul .blue')
       if(indicatore.hasClass('first')){
        prevIndic=$(indicatore).prev('li')

        prevIndic = $('li.last')
        indicatore.removeClass('blue')
        prevIndic.addClass('blue')
       }else{
          var prevIndic=$(indicatore).prev('li')
          indicatore.removeClass('blue')
          prevIndic.addClass('blue')
 
       }
})

}

function init(){
  $('.prev').click(prev)
  $('.next').click(next)
  nextInd()
  prevInd()
 }
$(document).ready(init); 