// Note: We'll be using the Fahrenheit scale for this assignment!

// This code sets a random starting current temperature between 0 and 100 degrees
let currentTemp = Math.round(Math.random() * 100)

// Give the user of the thermostat a status message
console.log(`The current temperature is ${currentTemp}°F`)

//What can a thermostat do?

//set a temp -> changes tempature
//somehow get this from the user?
let userSetTemp = Number(window.prompt("What temp do you want it to be?"))
console.log("userSetTemp", userSetTemp)

if (!isNaN(userSetTemp)){
    changeTemp(userSetTemp)
}
else {
    userSetTemp = Number(window.prompt("What temp do you want it to be?"))
    changeTemp(userSetTemp)
}

function changeTemp(userTemp){
    //change the currentTemp to userSetTemp
    // while the currentTemp != userSetTemp do (repeat my code)
    while( currentTemp != userTemp){
        //if the currentTemp is greater than userSetTemp
        if(currentTemp > userTemp){
            //decrease my current temp by 1 degree
            console.log("cooling the house by 1 degree")
            currentTemp -= 1
        }
        //if the currentTemp is lower than userSetTemp
        else if(currentTemp < userTemp){
            console.log("heating the house by 1 degree")
            //increase my current temp by 1 degree
            currentTemp += 1
        }
            
        
            
    }
    console.log("your house is now", currentTemp)
}
        

//Some test cases
//currentTemp 17 userSetTemp 40 (see it increase from 17 to 40)
//currentTemp 40 userSetTemp 17 (see it decrease from 40 to 17)
//currentTemp 40 userSetTemp 40 (thermostat does nothing)
        
//schedules when to change temp (do later)
// Every Monday at 7pm make the house 71F

//every minute check if it is time to run a schedule
let schedules = {
    // Every Monday at 7pm make the house 71F
    "Monday": {
        "frequency": "weekly",
        "timeToRun": "19:00",
        "desiredTempF": "71"
    }
}

function isTimeToRun(now) {
    let day = now.getDay()
    //get minutes and hours
    let timeArray = schedules[day].timeToRun.split(":")
    let desriedHours = timeArray[0]
    let desiredMinutes = timeArray[1]
    return (now.getMinutes() == desiredMinutes && now.getHours() == desriedHours)
}

setInterval(() => {
    //is it time to run one of our scheudles?
    let now = new Date()
    let day = now.getDay()
    if (isTimeToRun(schedules, now)){
        changeTemp(schedules[day].desiredTempF)
    }
}, 6000)