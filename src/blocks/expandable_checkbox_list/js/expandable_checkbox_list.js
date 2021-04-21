let flag1 = false;
  $('.expcheckbox-buttons').click(function () {
    if(!flag1){
     $('.expcheckbox-buttons-wrapper').slideDown();
    }else{
     $('.expcheckbox-buttons-wrapper').slideUp();
    }
    flag1 = !flag1;
  });

