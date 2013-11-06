define (require) ->

  Backbone = require 'backbone'
  templates = require 'templates'
  myApp = require 'my'

  class ApplicationView extends Backbone.View
    template: templates.application
    render: ->
      @.$el.html @template()
      my = new myApp
      my.start()
