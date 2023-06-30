var userString;
let str = '';
const button = document.addEventListener("click",()=>{
  const userText = document.querySelector("#userInput");
  console.log(userText.value);
  userString = userText.value.split(' ');
  userString.forEach((element) => {
    strArray = element.split('');
    let sum = 0;
    for (let i=element.length - 1;i >= 0; i--){
      sum += parseInt(strArray[i])*Math.pow(2,element.length-1-i);
    }
    // console.log("sum = "+sum+"\nchar = "+String.fromCharCode(sum));
    str = str + String.fromCharCode(sum);
  });
  console.log(str)
})
