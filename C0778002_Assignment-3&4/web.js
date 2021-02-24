function myfun()
{
var c = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.value.match(c))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}


    function myfun()
           {
            
              var a = document.getElementById("mobile").value;
               
               
             if(a=="") {
	         alert("Invalid, Please enter Contact Number");
             return false;
             }
             if(isNaN(a)){
             alert("Invalid, Please enter only numers");
             return false;
             }
             if(a.length<10){
             alert("Invalid, Please enter 10 digits");
             return false;
             } 
             if(a.length>10){
             alert("Invalid, Please enter 10 digits");
             return false;
             } 
           }
         
