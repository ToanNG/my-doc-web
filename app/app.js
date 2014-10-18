$(function(){
  var $mbMenuButton = $('#mb-menu-button');
  $('.main').click(function(){
    $mbMenuButton.removeClass('clicked');
  });

  $mbMenuButton.click(function(){
    $(this).toggleClass('clicked');
  });

  $mbMenuButton.find('.menu').click(function(e){
    e.stopPropagation();
  });
});
