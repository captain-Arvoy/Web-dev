var userString;
const button = document.addEventListener("click",()=>{
  const userText = document.querySelector("#userInput");
  console.log(userText.value);
  userString = userText.value.split(' ');
  userString.forEach((element) => {
    console.log(element+"\n"+element.length);
    strArray = element.split('');
    let sum = 0;
    for (let i=element.length - 1;i >= 0; i--){
      console.log("i = "+i)
      sum += parseInt(strArray[i])*Math.pow(2,i)*Math.pow(10,i);
    console.log("element decimal = "+sum)
    }
  });
})
