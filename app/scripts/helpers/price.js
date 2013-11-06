define(function (require) {
    var templates = require('templates'),
        Price = function () {

            this.price = {};

            this.setPrice = function (price) {
                this.price = price;
            };
        };


    Price.prototype.render = function (type) {
        var price = this.price[type] || "-";
        return templates.price({price: price})
    };

    return Price;
});