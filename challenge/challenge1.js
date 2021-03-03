// Challenge 1 | Multidimensional array
// Create a multidimensional array that will output the values "Vienna is a nice city". The values should be outputted from the array diagonally (order: top-left -> bottom-right).

// Vienna

//                is

//                      a

//                           nice

//                                    city

let city = [["Vienna", 3, 4, 19, 23],
[8, "is", 8, 3, 2],
[2, 4, "a", 21, 1],
[2, 3, 6, "nice", 1],
[2, 1, 2, 5, "city"]];

console.log(city[0][0], city[1][1], city[2][2], city[3][3], city[4][4]);

