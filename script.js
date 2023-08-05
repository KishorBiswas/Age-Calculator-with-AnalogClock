let hour = document.getElementById("Hour");
let minuts = document.getElementById("minuts");
let second = document.getElementById("Second");

function displayTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minuts.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;


}


setInterval(displayTime, 1000);




// change color mode
let icon = document.querySelector(".icon");

icon.addEventListener("click", () =>{
    document.body.classList.toggle("active");

    if(document.body.classList.contains("active")){
        icon.src = "image/Sun.png";
    }else{
        icon.src = "image/Moon.png";
    }


    console.log(document.body.classList);
});





// Age Calculator here
let ageInpute = document.getElementById("date_input");
let submiteBtn = document.querySelector("button");
let dayName= document.querySelector("#dayName");
let totalResult1 = document.getElementById("totalResult1");
let monthResult2 = document.getElementById("monthResult2");
let weeksResult3 = document.getElementById("weeksResult3");
let dayResult4 = document.getElementById("dayResult4");
let hourResult5 = document.getElementById("hourResult5");
let minutsResult6 = document.getElementById("minutsResult6");
let secondResult7 = document.getElementById("secondResult7");
let mileSecondResult8 = document.getElementById("mileSecondResult8");


// Disable after the Today date 
ageInpute.max = new Date().toISOString().split("T")[0];

submiteBtn.addEventListener("click", function(event){
    event.preventDefault();
    ageCalculator();
    numberOfDay();
    nameOfBirthDay();
});



function ageCalculator(){
    let birthDate = new Date(ageInpute.value);

    let bDate = birthDate.getDate();
    let bMonth = birthDate.getMonth() + 1;
    let bYear =birthDate.getFullYear();


    let toDay = new Date();
    
    let tDate = toDay.getDate();
    let tMonth = toDay.getMonth() + 1;
    let tYear = toDay.getFullYear();

    let defYear, defMonth, defDate;
    
    defYear = tYear - bYear;

    if(tMonth >= bMonth){
        defMonth = tMonth - bMonth;
    }else{
        defYear--;
        tMonth = tMonth + 12;
        defMonth = tMonth - bMonth;
    }

    if(tDate >= bDate){
        defDate = tDate - bDate;
    }else{
        defMonth--;
        tDate = getNumberOfDate(tYear, tMonth - 1) + tDate;
        defDate = tDate - bDate;
    }

    if(defMonth < 0){
        defMonth = 11;
        defYear--;
    }

    totalResult1.innerHTML = "<li>" +`Your age is ${defYear} Years ${defMonth} Months ${defDate} Days.` +"</li>";
    

    let totalMonth = defYear * 12 + defMonth;
    monthResult2.innerHTML = "<li>" +`Your age is ${totalMonth} Months ${defDate} Days.` +"</li>"
   
    
}


// return the last number of date as (31 or 30 or 28) according the passing year and month, day is 0 for rule
function getNumberOfDate(year, month){
    let noDate = new Date(year, month, 0).getDate();
    return noDate;

}



// calculate the number of day, week, houre, second milisecond
function numberOfDay(){
    let startDate = new Date(ageInpute.value);
    let endDate = new Date();

    // Defferance time in Millesecande from january 1 1970;
    let defDateInMs = endDate - startDate;
    let dayTotalMillesecond = 1000 * 60 * 60 * 24;

    let totalDayesDeff = Math.floor(defDateInMs / dayTotalMillesecond);
    dayResult4.innerHTML = "<li>" + `Your age is ${totalDayesDeff} days now.` + "</li>";



    let totalWeeks = Math.floor(totalDayesDeff / 7);
    let leftDaysAfterWeek = totalDayesDeff % 7;

    weeksResult3.innerHTML = "<li>" + `Your age is ${totalWeeks} Weeks ${leftDaysAfterWeek} day.` + "</li>";

    let totalHourDef = totalDayesDeff * 24;
    hourResult5.innerHTML = "<li>" +`Your age is ${totalHourDef} Hours.`+ "</li>";

    minutsResult6.innerHTML = "<li>" +`Your age is ${totalHourDef * 60} Minutes.`+ "</li>";
    secondResult7.innerHTML = "<li>" +`Your age is ${totalHourDef * 60 * 60} Second.`+ "</li>";
    mileSecondResult8.innerHTML = "<li>" +`Your age is ${totalHourDef * 60 * 60 * 1000} Millesecond.`+ "</li>";
   

}



// return the Birth day of passing the date
function nameOfBirthDay(){
    let birthDate = new Date(ageInpute.value);
    let birthDay = birthDate.getDay();
    let birthDayName = "";

    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", " Saturday"];

    
    for(let i = 0; i < dayList.length; i++){
        if(birthDay == i){
            birthDayName = dayList[i];
            console.log(birthDay + " " + dayList[i]);
        }
       
    }


    dayName.innerHTML = birthDayName + ".";


}






