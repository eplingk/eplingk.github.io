function showInput(){	
    var form = document.forms[0].elements;
    var message_entered = "";
    
    for(var i = 0, j = form.length;i < j;i++){
        
        if(form[i].type == "text") {message_entered += (form[i].value + " - ");}
        
    }

    document.getElementById('input').innerHTML = message_entered;
    
}

