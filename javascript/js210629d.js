function validateform(){
    var fname=document.myform.fname.value;
    var lname=document.myform.lname.value;
    var phone=document.myform.phone.value;
    var email=document.myform.email.value;
    var cemai=document.myform.cemai.value;
    
    if (fname==null || fname==""){
      alert("First name can't be blank");
      return false;}
    
    if (lname==null || lname==""){
        alert("Last name can't be blank");
        return false;}
    
    if (phone==null || phone==""){
        alert("Phone can't be blank");
        return false;}
    
    if (email==null || email==""){
        alert("Email can't be blank");
        return false;}
    
    if (cemai==null || cemai==""){
        alert("Confirm email can't be blank");
        return false;}
    
    }