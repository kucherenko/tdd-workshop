define(function (require) {

    var Price = require('helpers/price'),
        templates = require('templates');

    describe("Price", function () {
        var sut, price;

        beforeEach(function () {
            sut = new Price();
            price = {
                decimal: 1.5,
                fractional: "1/2"
            };
        });

        it("should initialize price value", function () {
            sut.setPrice(price);
            sut.price.should.equal(price);
        });

        it("should render decimal", function () {
            var priceTemplates = sinonSandbox.stub(templates, 'price');
            sut.setPrice(price);
            sut.render('decimal');
            priceTemplates.should.have.been.calledWith({price: price.decimal});
        });

        it("should render fractional", function () {
            var priceTemplates = sinonSandbox.stub(templates, 'price');
            sut.setPrice(price);
            sut.render('fractional');
            priceTemplates.should.have.been.calledWith({price: price.fractional});
        });

        it('should render "-" by defoult', function () {
            var priceTemplates = sinonSandbox.stub(templates, 'price');
            sut.render();
            priceTemplates.should.have.been.calledWith({price: "-"});
        });

        it("should use price template and return result of templating", function () {
            sinonSandbox.stub(templates, 'price').returns('template result');
            sut.render('decimal').should.equal('template result');
        });

    });
});
