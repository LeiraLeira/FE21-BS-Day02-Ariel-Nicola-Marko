var fruits = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
var placeholder = new Array();
//browser output = instead of \n we need a <br>
placeholder = fruits.split('/').join("\n \n");
console.log(placeholder);
document.write(placeholder);



var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
 var paper = new Array();
 paper = text.split('$').join("\t" );
 console.log(paper);
 document.write(paper);