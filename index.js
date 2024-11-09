document.getElementById("but").onclick=function()
{
let user_name=document.getElementById("user").value;
let pass_=document.getElementById("pass").value;
alert(`Welcome ${user_name}`)
window.open('home.html');
}