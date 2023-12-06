var hr=0;
var min=0;
var sec=0;

var stoptime = false;

function startTimer(){
    stoptime = true;
    timeCycle()
}

function stopTimer(){
    stoptime = false;
}

function resetTimer(){
    stoptime = false;
    hr = 0;
    min = 0; 
    sec = 0;

    document.getElementById("sec").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";

}

function timeCycle(){
    if(stoptime == true){
        sec = sec + 1;


        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min  = 0;
            sec = 0;
        }

       
        var secString = sec;
        var hrString = hr;
        var minString = min;

        
        

        if(sec < 10){
            secString = "0" + secString;
        }

        if(min < 10){
            minString = "0" + minString;
        }

        if(hr < 10){
            hrString = "0" + hrString;
        }

        
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;

        setTimeout("timeCycle()", 1000);
    }
}