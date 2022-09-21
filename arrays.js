var friends = ["sarah", "steff", "rachael", "james", "andy" ];

var boxes = [ 29, 42, 78, 60, 104 ];

var bools = [0, 1, 2, 3, 4, 5];
// ive set 2 and 4 values to true. 0,3,5 have been set to false
bools[0] = false;
bools[1] = false;
bools[2] = true;
bools[3] = false;
bools[4] = true;
bools[5] = false;
// when called the true/false value should be printed
console.log(bools);

//this will remove the last number from the array "boxes"
//when it prints, 104 will be gone
boxes.pop();
//prints new array for boxes
console.log(boxes);

//this will remove the first two strings in my array.
friends2 = friends.slice(2);
//prints my updated array.
console.log(friends2);
