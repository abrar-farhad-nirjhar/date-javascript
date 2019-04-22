document.getElementsByClassName('clock')[0].hidden=true


let hour = null
let minute = null
let second = null


let o_hour = null
let o_minute = null
let o_seconds = null


let run = true
time = new Date()

function checkEndCondition(){
    if(time.getHours()==0 && time.getMinutes()==0 && time.getSeconds()==0 ){
        run = false
        let audio = new Audio('alarm.mp3')
        audio.play()
        
        
        alert("Time Up!!!!!")
        audio.pause()
        document.getElementById('clk').hidden = true
        document.getElementById('tmr').hidden = false
    }
}

function checkTime(s){
    if(s!="00")
    {
        if(s<10){
        s = "0"+s
        }
    }
    return s
}
function Timer(){
    if(run==true){

        
        time.setSeconds(time.getSeconds()-1)
        document.getElementById('hour').innerHTML = checkTime(time.getHours())
        document.getElementById('minute').innerHTML = checkTime(time.getMinutes())
        document.getElementById('second').innerHTML = checkTime(time.getSeconds())
        checkEndCondition()
        setTimeout(Timer, 1000)
        
    }
    
}

document.getElementById('start').addEventListener('click', ()=>{
    hour = document.getElementById('input-hour').value
    minute = document.getElementById('input-minute').value
    second = document.getElementById('input-second').value


    o_hour = document.getElementById('input-hour').value
    o_minute = document.getElementById('input-minute').value
    o_second = document.getElementById('input-second').value

    document.getElementById('tmr').hidden = true
    document.getElementById('clk').hidden = false
    
    time.setHours(hour)
    time.setMinutes(minute)
    time.setSeconds(second)

    document.getElementById('hour').innerHTML = checkTime(hour)
    document.getElementById('minute').innerHTML = checkTime(minute)
    document.getElementById('second').innerHTML = checkTime(second)
    run = true

    Timer()
    
})


document.getElementById('reset').addEventListener('click', ()=>{
    document.getElementById('tmr').hidden = true
    document.getElementById('clk').hidden = false
    
    time.setHours(hour)
    time.setMinutes(minute)
    time.setSeconds(second)

    document.getElementById('hour').innerHTML = checkTime(o_hour)
    document.getElementById('minute').innerHTML = checkTime(o_minute)
    document.getElementById('second').innerHTML = checkTime(o_second)

    // Timer()
    run = false
})

document.getElementById('pause').addEventListener('click', ()=>{

    run = false
    
})

document.getElementById('restart').addEventListener('click',()=>{
    run = true
    Timer()
} )

