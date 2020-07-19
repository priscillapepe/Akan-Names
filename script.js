var daysOfTheWeek=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function myFunction(){
    event.preventDefault();
    var gender = document.getElementById('genders').value;
    var date = document.getElementById('date').value;
    date = new Date(date);

    if(gender === 'male'){
        alert(" Since you were born on " + daysOfTheWeek[date.getDay()] + ',' + " your name is " + maleNames[date.getDay()]);
    }
   else if(gender === 'female'){
        alert(" Since you were born on " + daysOfTheWeek[date.getDay()] + ',' + " your name is " + femaleNames[date.getDay()]);
    }
    else{
        alert("Fill in the date and gender");
    }

}
// function myFunction(){
//     var year=parseInt(document.getElementById("year").value);
//     var gender=getGender();
//     var date=newDate(year + "/" + month + "/" + day);
//     var dayBorn=date.getDay();
//     var akanName;
//     var validate=(year > 0 &&(month > 0 && month <= 12)&& (day > 0 && day <= 31));
//     var validateGender =(gender !=="male" && gender !=="female");
//     if (year = 0) {
//         alert("Invalid input!");
//     }
// else if(month <= 0 || month > 12){
//     alert("Invalid Input!");
// }
// else if(day <= 0 || day > 31){
//     alert("Invalid Input!");
// }
// else if(validate== false){
//     alert("Invalid Input!");
// }
// else if(gender==="male" && year > 0 && month < 13 && day > 0 && day > 0 && day < 32){
//     akanName = maleNames[dayBorn];
//     alert("You were born on "+ daysOfTheWeek[dayBorn]+ " and your Akan name is " + akanName);
// }
// else if(gender==="female" && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
//         akanName= femaleNames[dayBorn];
//         alert("you were born on "+ daysOfTheWeek[dayBorn]+ "and your Akan Name is" + akanName);
//     }
// }
// function myFunction(){
//     var gender =document.getElementsByName("gender");
//     for(i = 0; i < gender.length;i++){
//         if(gender[i].checked){
//             return(gender[i].value)
//         }
//     }
// }
