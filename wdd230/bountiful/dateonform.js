function generateDate(){
    var currentTime = new Date();                
    var curdate = currentTime.getDate();
    document.getElementbyId("dateHidden").value = curdate;
    return true;
}