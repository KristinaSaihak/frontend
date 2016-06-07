var app = require('../js/pow.js');

describe("pow", function() {
  it("проверка возведения в степень", function() {
  	//prepare (приготовления)
  		var result;
  	//act (вызов)
  		result = app.intPow(2,2);
  	//assert (проверка)
    expect(result).toBe(4);
    });

	   

  });