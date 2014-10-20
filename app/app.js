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

  $('.login-button').click(function(e){
    // e.preventDefault();
    $('#dialog-overlay').show();
    $('body').addClass('opened-dialog');
  });

  $('.cancel-button').click(function(e){
    // e.preventDefault();
    $('#dialog-overlay').hide();
    $('body').removeClass('opened-dialog');
  });
});
