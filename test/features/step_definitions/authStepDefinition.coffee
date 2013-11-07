chai = require("chai")
expect = chai.expect
module.exports = ->
  @World = require("../support/world").World # overwrite default World constructor

  @Given /^I am on the first page$/, (next) ->
    @visit "http://localhost:8888/", next

  @Then /^I should see Application title$/, (next) ->
    expect(@browser.text("body")).to.contain "Borsch"
    next()

