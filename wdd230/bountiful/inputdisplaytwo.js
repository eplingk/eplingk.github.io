function showDropInfo() {
    var sT = dropForm.dropSelect;
    var selection = document.getElementById('selection');
    
    selection.innerHTML = ('Selected fruit: ' + sT[sT.selectedIndex].text);
  
 }