const myIntervel=setInterval(myTimer,1000);

function myTimer(){
  const date=new Date();
  document.getElementById("demo").innerHTML=date.toLocaleTimeString();
}

function stopFunction(){
  clearInterval(myIntervel);
}