/**
 * Created by Spencer on 1/10/2017.
 */
var fs = require('fs');

console.log('FOOD');

fs.readFile('food.txt', 'utf8', function(error, data){
    if(error){
        console.log(error)
        return;
    }

    console.log(data)
});

console.log('DRINKS');

fs.readFile('drinks.txt', 'utf8', function(error, data){
    if(error){
        console.log(error);
        return;
    }

    console.log(data);

})