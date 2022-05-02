// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",myfunction)


var arrayobj=JSON.parse(localStorage.getItem("schedule"))||[];;

function myfunction()
{
  event.preventDefault();
 
  

  data={
    name:masaiForm.matchNum.value,
    team1:masaiForm.teamA.value,
    team2:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
   }
 arrayobj.push(data);
 localStorage.setItem("schedule",JSON.stringify(arrayobj))


}

