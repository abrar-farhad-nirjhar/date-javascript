



time = new Date()

time.setHours(0)
time.setMinutes(0) 
time.setSeconds(0) 


document.getElementById('hour').innerHTML = "00"
document.getElementById('minute').innerHTML = "00"
document.getElementById('second').innerHTML = "00"


let run = false




function checkTime(s){
    if(s<10){
        s = "0"+s
    }
    return s
}


function StopWatch(){

    console.log(run)
    if(run==true){
        time.setSeconds(time.getSeconds()+1)



        document.getElementById('hour').innerHTML = checkTime(time.getHours())
        document.getElementById('minute').innerHTML = checkTime(time.getMinutes())
        document.getElementById('second').innerHTML = checkTime(time.getSeconds())
        
        setTimeout(StopWatch, 1000) 
    }

    
}



document.getElementById('start').addEventListener('click', ()=>{
    console.log("Starting...")
    run = true
    StopWatch()
    
})

document.getElementById('pause').addEventListener('click', ()=>{
    console.log("Pausing...")
    run = false
})

document.getElementById('reset').addEventListener('click', ()=>{
    run = false
    time.setHours(0)
    time.setMinutes(0) 
    time.setSeconds(0) 


    document.getElementById('hour').innerHTML = "00"
    document.getElementById('minute').innerHTML = "00"
    document.getElementById('second').innerHTML = "00"

})


