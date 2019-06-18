let max_max;
let max_min;

function twoOldestAges(arr){
let new_arr = [];
max_max = (Math.max.apply(null, arr));
arr.splice(arr.indexOf(max_max),1);
new_arr.push(max_max);
max_min = (Math.max.apply(null, arr));
arr.splice(arr.indexOf(max_max),1);
new_arr.push(max_min)
return new_arr.sort();
}
