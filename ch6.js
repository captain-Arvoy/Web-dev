let age = Number.parseInt(prompt("Enter the age from the user: "));
let color;
if (age >= 18){
    alert("You can drive!");
} else if(age < 0){
    color = prompt("Enter the color"); 
    document.body.style.background= color;
    location.href = "https://www.google.com";
} else {
    alert("Ede pehli fursat mein nikal!");
}