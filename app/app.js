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



  var $dialogOverlay = $('.dialog-overlay');

  $('.cancel-button, .close-button').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('body').removeClass('opened-dialog');
  });

  $('.patients-login-link, .login-button').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('#patients-login-form').show();
    $('body').addClass('opened-dialog');
  });

  $('.patients-signup-link').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('#patients-signup-form').show();
    $('body').addClass('opened-dialog');
  });

  $('.doctors-login-link').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('#doctors-login-form').show();
    $('body').addClass('opened-dialog');
  });

  $('.doctors-signup-link').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('#doctors-signup-form').show();
    $('body').addClass('opened-dialog');
  });

  $('.forgot-password-link').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('#forgot-password-form').show();
    $('body').addClass('opened-dialog');
  });
});
