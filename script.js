let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
alert("Welcome User's in Liaquat National Hospital Website");
    function checkusername(){
        var username=document.getElementById("txtusername").value;
        var length=document.getElementById("txtusername").value.length;
    if (username=="") {
    document.getElementById("1B1").innerHTML="*Required field validation:";    
    document.getElementById("1B1").style.color="red";
    }
    else if(length>20){
    document.getElementById("1B1").innerHTML="Length of your name cannot be greater than 20";
    document.getElementById("1B1").style.color="red";
    }
    else if(length<5){
    document.getElementById("1B1").innerHTML="Length of your name cannot be less than 5";
    document.getElementById("1B1").style.color="red";
    }
    else{
    document.getElementById("1B1").innerHTML="*correct";
    document.getElementById("1B1").style.color="green";
    }
    }
    function checkpassword(){
        var password2=document.getElementById("txtretypepassword").value;
        var password1=document.getElementById("txtpassword").value;
        var length=document.getElementById("txtpassword").value.length;
    if (password1=="") {
    document.getElementById("1B2").innerHTML="*Required field validation";    
    document.getElementById("1B2").style.color="red";
    }
    else if(length>12){
    document.getElementById("1B2").innerHTML="Length of number cannot be greater than 12";
    document.getElementById("1B2").style.color="red";
    }
    else if(length<10){
    document.getElementById("1B2").innerHTML="Length of number cannot be less than 10";
    document.getElementById("1B2").style.color="red";
    }
    else if(password1!=password2){
    document.getElementById("1B2").innerHTML="*Number not Match";
    document.getElementById("1B2").style.color="red";
    }
    else{
    document.getElementById("1B2").innerHTML="*correct";
    document.getElementById("1B2").style.color="green";
    }
    }
    function checkretypepassword(){
        var password1=document.getElementById("txtpassword").value;
        var password2=document.getElementById("txtretypepassword").value;
        var length=document.getElementById("txtretypepassword").value.length;
    if (password2=="") {
    document.getElementById("1B3").innerHTML="*Required field validation";    
    document.getElementById("1B3").style.color="red";
    }
    else if(length>12){
    document.getElementById("1B3").innerHTML="Length of number cannot be greater than 12";
    document.getElementById("1B3").style.color="red";
    }
    else if(length<10){
    document.getElementById("1B3").innerHTML="Length of number cannot be less than 10";
    document.getElementById("1B3").style.color="red";
    }
    else if(password1!=password2){
    document.getElementById("1B3").innerHTML="*Number not Match";
    document.getElementById("1B3").style.color="red";
    }
    else{
    document.getElementById("1B3").innerHTML="*correct";
    document.getElementById("1B3").style.color="green";
    }
    }
    function checkemail(){
        var mail=document.getElementById("txtemail").value;
        var length=document.getElementById("txtemail").value.length;
    if (mail=="") {
    document.getElementById("1B4").innerHTML="*Required field validation:";    
    document.getElementById("1B4").style.color="red";
    }
    else if(length>30){
    document.getElementById("1B4").innerHTML="Length of email cannot be greater than 30";
    document.getElementById("1B4").style.color="red";
    }
    else if(length<10){
    document.getElementById("1B4").innerHTML="Length of email cannot be less than 10";
    document.getElementById("1B4").style.color="red";
    }
    else{
    document.getElementById("1B4").innerHTML="*correct";
    document.getElementById("1B4").style.color="green";
    }
    }
    function checkdate(){
        var Date=document.getElementById("txtdate").value;
    if (Date=="") {
    document.getElementById("1B5").innerHTML="*Required field validation:";    
    document.getElementById("1B5").style.color="red";
    }
    else{
        document.getElementById("1B5").innerHTML="*correct";
        document.getElementById("1B5").style.color="green";
    }
    }
function checkprocess(){
    var username=document.getElementById("txtusername").value;
    var password2=document.getElementById("txtretypepassword").value;
    var password1=document.getElementById("txtpassword").value;
    var password1=document.getElementById("txtpassword").value;
    var password2=document.getElementById("txtretypepassword").value;
    var mail=document.getElementById("txtemail").value;
    var Date=document.getElementById("txtdate").value;
    if (username=="",password1=="",password2=="",mail=="",Date=="")
    {
        alert("Booking Required Validation Plz fill form Properly");
    }
    else{
        alert("Your Booking is accepted. Thanks for visit here and book your appointment");
        alert("Further information check your mail");
    }
    }

