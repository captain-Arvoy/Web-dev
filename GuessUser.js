/*generates a random number 1 - 100
 * ask the user to guess the number
 * tell the user if the guess is correct, greater or lesser
 * score = 100-<no. of guesses>*/
let guess = 0;//to count number of guesses
let bzrResponse = 0;//to tell the user if guess is correct, greater or lesser
let score = 100;
let wantToPlay = 1;
while (wantToPlay){
	rndm = Math.random()*100;
	while( guess < 100 && !bzrResponse){
		//usr = Number.parseInt(prompt("Enter the number: "));
		let ele = 0;
		const mS = (mEle)=>{
			while (ele == mEle){
				return ele;
			}
			ele++;
		}
		usr = mS(rndm);
		if ( usr == rndm){
			score = score - guess;
			bzrResponse = 1;
		} else {
			guess++;
		}
	}
}
console.log("score = "+score);

