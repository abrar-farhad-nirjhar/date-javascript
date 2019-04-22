

function checkTime(s){
    if(s<10){
        s = "0"+s
    }
    return s
}

function clock(){

    date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hour = checkTime(hour)
    minute = checkTime(minute)
    second = checkTime(second)
    


    let display = hour+":"+minute+":"+second
    
    // document.getElementById('main').innerHTML = display
    document.getElementById('hour').innerHTML = hour
    document.getElementById('minute').innerHTML = minute
    document.getElementById('second').innerHTML = second
    

    setTimeout(clock, 1000)


    
}



clock()