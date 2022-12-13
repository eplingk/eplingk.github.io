var count = 0;
        var btn = document.getElementById("button");
        var disp = document.getElementById("display");
  
        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }