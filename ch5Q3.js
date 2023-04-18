let arr = [10,15,20,25,30]
const isDiv = (element)=>{
	return element%10 == 0;
}
let fltr = arr.filter(isDiv);
console.log(fltr);
