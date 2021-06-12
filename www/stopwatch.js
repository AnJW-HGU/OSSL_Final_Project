var time = 0;
var t_h = 0;
var t_m = 0;
var t_s = 0;
var starFlag = true;
$(document).ready(function(){
  buttonEvt();
});

function init(){
  document.getElementById("time").innerHTML = "00:00:00";
}

function buttonEvt(){
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // start btn
  $("#startbtn").click(function(){

    if(starFlag){
      $(".fa").css("color","#f8ca00")
      this.style.color = "#FAED7D";
      starFlag = false;

      if(time == 0){
        init();
      }

      timer = setInterval(function(){
        time++;

        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time%60;
        min = min%60;

        var th = hour;
        var tm = min;
        var ts = sec;
        
        t_s++;
        if(t_s >= 60){
            t_m++;
            t_s %= 60;
        }
        if(t_m >= 60){
            t_h++;
            t_m &= 60;
        }
        
        if(th<10){
        th = "0" + hour;
        }
        if(tm < 10){
        tm = "0" + min;
        }
        if(ts < 10){
        ts = "0" + sec;
        }
        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
        document.getElementById("total").innerHTML = t_h + ":" + t_m + ":" + t_s;
      }, 1000);
    }
  });

  // pause btn
  $("#pausebtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#f8ca00")
      this.style.color = "#FAED7D";
      clearInterval(timer);
      starFlag = true;
    }
  });

  // stop btn
  $("#stopbtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#f8ca00")
      this.style.color = "#FAED7D";
      clearInterval(timer);
      starFlag = true;
      document.getElementById("total").innerHTML = t_h + ":" + t_m + ":" + t_s;
      time = 0;
      init();
    }
  });
}

