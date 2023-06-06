window.setInterval(()=>{
  let win= document.querySelector("#main");
  win.textContent = "H";
  window.setTimeout(() => {
    win.textContent = "A";
  },3000);
  window.setTimeout(() => {
    win.textContent = "R";
  },5000);
  window.setTimeout(() => {
    win.textContent = "I";
  },6000);
},1000);
