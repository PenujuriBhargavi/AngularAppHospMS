function changestatus()
{
    var status=document.getElementById("vstatus");
    if(status.value=="2")
        {
         document.getElementById("radio").style.visibility="hidden"; 
             document.getElementById("radio1").style.visibility="hidden"; 
        }
    else{
         document.getElementById("radio").style.visibility="visible";
         document.getElementById("radio1").style.visibility="visible"; 
    }
}