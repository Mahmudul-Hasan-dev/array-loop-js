//normal break example
for (var i = 0; i < 10; i++) {
    if (i == 7) {
        // console.log('its 7');
        break;
    }
    console.log(i);
}

console.log('break example in array');

//break example in array
var items = ['bottle', 'glass', 'mirror', 'makeup', 'phone'];

for (i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'glass') {
        break;
    }
    //items[i] give the value of i index
    console.log(item);
}

console.log('break example in number array');

//break example in number array

var numbers = [10, 22, 13, 14, 15, 16, 57, 58, 46];

//loop 
for (var i = 0; i < numbers.length; i++) {

    var element = numbers[i];
    if (element > 15) {
        break;
    }
    console.log(element);
}