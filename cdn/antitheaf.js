document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=e=>{
if(e.keyCode==123||e.ctrlKey&&e.shiftKey&&(e.keyCode==73||e.keyCode==74)||e.ctrlKey&&e.keyCode==85)e.preventDefault();
};
(function(){
var c=false;
setInterval(function(){
if((window.outerWidth-window.innerWidth>150)||(window.outerHeight-window.innerHeight>150)){
if(!c){
c=true;
document.body.innerHTML="";
var s=document.createElement("style");
s.innerHTML="html,body{display:none!important}";
document.head.appendChild(s);
try{
console.clear();
console.log("");
}catch(e){}
window.location.href="https://www.dktechnozone.in/";
}
}
},200);
})();
