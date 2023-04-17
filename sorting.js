let compare = (a,b)=>{
	return a - b//descending: b-a
}
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort();
console.log("Alphabetically: "+num);
num.sort(compare);
console.log("Ascending order: "+num);
