const clock = document.querySelector(".clock");
console.log();
setInterval(()=>{
        const date = new Date();
        let hr = ''+ date.getHours();
        let min = ''+ date.getMinutes();
        let sec = ''+ date.getSeconds();
        if (hr/10 < 1){
            hr = '0'+hr;
        }
        if (hr > 12){
            clock.querySelector(".component4").textContent = 'PM';
            if (hr > 18){
                document.body.className = "night";
                document.querySelector(".clock").className = "clock nightClock";
            }
        } else {
            document.body.className = "Morning";
            document.querySelector(".clock").className = "clock morningClock";
            clock.querySelector(".component4").textContent = 'AM';

        }
        if (min/10 < 1){
            min = '0'+min;
        }
        if (sec/10 < 1){
            sec = '0'+sec;
        }
        clock.querySelector(".component1").textContent = hr;
        clock.querySelector(".component2").textContent = min;
        clock.querySelector(".component3").textContent = sec;
    }, 1000);
