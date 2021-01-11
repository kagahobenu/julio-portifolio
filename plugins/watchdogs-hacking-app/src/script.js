$(document).ready(function(){
  $bootText = $('.bottom .boot-text');
  $bootLoader = $('.bottom .loader');
  $hack = $('.hacks .hack');
  
  setTimeout(function(){
    $bootText.hide();
    $bootLoader.hide();
    $('.hacks .hack').each(function(i) {
      var that = $(this);
      setTimeout(function() {
         that.addClass('load-in');
      }, 100 * i);
    });
  }, 3000);
  
});