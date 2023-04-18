let arr = [1,2,3,4,5,6,7,8,9,10];
const fact = (e1,e2)=>{
	return e1*e2;
}
let factorial = arr.reduce(fact);
console.log(factorial);

