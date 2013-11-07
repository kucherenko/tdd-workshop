define(function (require) {

    var MyApplication = require('my');

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
    });
});
