function validateForm() {
    if (document.myForm.navn.value == "")
    { 
        document.getElementById('error').innerHTML = "UPS! Du mangler at udfylde noget.";
        return false;
    }
     else if (document.myForm.email.value=="") 
    {
        document.getElementById('error2').innerHTML="UPS! Du mangler at udfylde noget.";
        return false;
    } 

    else if(!document.myForm.checkbox.checked)
    {
        document.getElementById('error3').innerHTML="Du skal give tilladelse";
        return false;
    }
    else 
    return true;
}
     
    
