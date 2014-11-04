(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("app", function(exports, require, module) {
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

  $('.cancel-button, .close-button, .dialog-overlay').click(function(e){
    e.preventDefault();
    $dialogOverlay.hide();
    $('body').removeClass('opened-dialog');
  });

  $('.dialog').click(function(e){
    e.stopPropagation();
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

});

;
//# sourceMappingURL=app.js.map