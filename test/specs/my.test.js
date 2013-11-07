define(function (require) {

    var MyApplication = require('my'),
        Price = require('helpers/price');

    describe("My Application", function () {
        var sut;

        beforeEach(function () {
            sut = new MyApplication();
        });

        it("should say 'hello racingpost'", function () {
            var consoleLog = sinonSandbox.stub(console, 'log');
            sut.start();
            consoleLog.should.have.been.calledWith('hello racingpost');
        });

        it("should test anything", function () {
          true.should.equal(true);
        });
      
        it("should add price to document", function () {
            var render = sinonSandbox.stub(Price.prototype, 'render').returns('result'),
                appendChild = sinonSandbox.stub(window.document.body, 'appendChild');
            sut.start();
            appendChild.should.have.been.calledWith('result');
        });
    });
});
