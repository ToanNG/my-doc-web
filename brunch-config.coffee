exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor\/(?!node)/
    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'

  # modules:
  #   definition: false
  #   wrapper: false
