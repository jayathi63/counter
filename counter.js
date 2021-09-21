var incr=document.getElementById("incr");
var reset=document.getElementById("reset");
var decr=document.getElementById("decr");
var counter=document.getElementById("count");
var color=document.querySelectorAll("button");
var count=0;
incr.addEventListener("click",function()
{
    counter.textContent=(++count);
    setColor();
})
decr.addEventListener("click",function()
{
    counter.textContent=(--count);
    setColor();
   
})
reset.addEventListener("click",function()
{
    counter.textContent=0;
    count=0;
    setColor();
})
function setColor()
{
 if(count<0)
    counter.style.color="red";
 else if(count>0)
    counter.style.color="blue";
 else
    counter.style.color="black";

}
