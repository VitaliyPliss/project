let flag1 = false;
  $('.expcheckbox-buttons').click(function () {
    $('.expcheckbox-buttons').toggleClass('rotate180');
    
    if(!flag1){
     $('.expcheckbox-buttons-wrapper').slideDown();

    }else{
     $('.expcheckbox-buttons-wrapper').slideUp();
    }
    flag1 = !flag1;
  });
