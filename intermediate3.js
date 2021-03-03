var fruits = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
var placeholder = new Array();
//browser output = instead of \n we need a <br>
placeholder = fruits.split('/').join("\n \n");
console.log(placeholder);
document.write(placeholder);