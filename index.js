const track = document.getElementById("image-track")
console.log(track)
window.onmousedown = (event) => { //We could also use event listener but our track should be able to move irrespective of postition of mouse
  track.dataset.mouseDownAt = event.clientX;//this is part of domStringMap, JS intelligently converts '-' into camel case
}
window.onmouseup = (e)=>{
  track.dataset.mouseDownAt = 0;
}
window.onmousemove = (e)=>{
  //mouse is at zero then return
  if (track.dataset.mouseDownAt === "0") return;
  //code that tells the  track to move
  const delMouse = ((track.dataset.mouseDownAt) - (e.clientX));
  let sliderBrim = window.innerWidth / 2;
  const sliderPercentage = (delMouse/sliderBrim) * 100;
  track.animate({
    transform:`translate(${sliderPercentage}%,-50%)`
  },{duration: 1200, fill: "forwards"});
  for(const image of track.getElementsByClassName("images")){//querySelector is not iterable
    image.animate({objectPosition: `${sliderPercentage+10}% 50%`},{duration: 5000, fill: "backwards"})
  }
}
