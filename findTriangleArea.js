/*
Write a function that takes the base and height of a triangle and return its area.

triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
*/

function triArea(x, y){
    let area = x * y / 2;
    return area;
}

console.log(triArea(10,10));
