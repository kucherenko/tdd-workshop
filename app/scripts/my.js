define(function (require) {
    var Price = require('helpers/price');
    return function() {
        this.start = function() {
            var price = new Price();
            console.log('hello racingpost');
        };
    }
});