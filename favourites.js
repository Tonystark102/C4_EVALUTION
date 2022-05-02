// write js code here corresponding to favourites.html
var data2=JSON.parse(localStorage.getItem("favourites"))

data2.forEach(function(el){
  var tr=document.createElement("tr");
  var td=document.createElement("td");
  td.innerText=el.name;
  var td1=document.createElement("td");
  td1.innerText=el.team1;
  var td2=document.createElement("td");
  td2.innerText=el.team2;
  var td3=document.createElement("td");
  td3.innerText=el.date;
  var td4=document.createElement("td");
  td4.innerText=el.venue;
  var td5=document.createElement("td");
  td5.innerText="Delete";
  td5.style.color="blue";
  td5.style.cursor="pointer";
  td5.addEventListener("click",rfunction)
  tr.append(td,td1,td2,td3,td4,td5);
  document.querySelector("tbody").append(tr)
  
})
function rfunction()
{
    event.target.parentNode.remove();
  
   
}