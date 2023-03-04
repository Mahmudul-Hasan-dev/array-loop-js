//continue example in number array
console.log('continue example in number array');
var numbers = [10, 22, 13, 14, 15, 16, 57, 58, 46];

//loop 
for (var i = 0; i < numbers.length; i++) {

    var element = numbers[i];
    if (element > 15) {
        continue;
    }
    console.log(element);
}

console.log('continue example in list array');

//continue example in array
var items = ['bottle', 'glass', 'mirror', 'makeup', 'phone'];

for (i = 0; i < items.length; i++) {
    var item = items[i];
    //items[i] give the value of i index

    if (item == 'glass') {
        continue;
    }
    console.log(item);
}

