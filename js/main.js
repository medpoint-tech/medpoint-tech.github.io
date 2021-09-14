jQuery(document).ready(function($){

  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();

     if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop){
            // downscroll code
            if(st > 150){
              $(".header").css({top:'-130px'})
            }else {
              $(".header").css({top:'0px'})
            }
        } else {
           // upscroll code
           $(".header").css({top:'0px'});
        }
     lastScrollTop = st;
  });

  $('.section2List li').on('click',function(){
    console.log($(this).attr('class'));
      console.log($(this).find('img:last-child').attr('src'));
    $('.rightSide .forHover img:first-child').attr('src',$(this).find('img:first-child').attr('src'));
      $('.rightSide .forHover img:last-child').attr('src',$(this).find('img:last-child').attr('src'));
  });

  $(".hamburgerMewnu").click(function(){
    if($("body").hasClass("visibleMenu")){
      $("body").removeClass("visibleMenu")
    }else{
      $("body").addClass("visibleMenu")
    }
  });

  $('.clearButton').click(function(){

						/*Clear all input type="text" box*/
						$('.leftSide [type="text"]' ).val('');
            $('.leftSide #textarea').val('');
						/*Clear textarea using id */

					}

			);



});
