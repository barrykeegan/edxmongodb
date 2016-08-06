/*var _ = require('underscore');
_.each([1, 2, 3], function(v) {
  console.log(v);
});*/

//Variation on the code above, merely for the practice of my js-fu
var _ = require('underscore');
var testArray=[1,2,3];
function logInput(input)
{
    console.log(input);
}

_.each(testArray,logInput);

