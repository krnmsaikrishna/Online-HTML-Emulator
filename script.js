function emulator()
{
var code1=document.getElementById("js").value;
var code2=document.getElementById("css").value;
var code3=document.getElementById("body").value;
var code4=document.getElementById("head").value;
var body="<"+"body"+">"+"\n"+code3+"\n"+"<"+"/body"+">";
var css="<"+"style"+">"+"\n"+code2+"\n"+"<"+"/style"+">";
var js="<"+"script"+">"+"\n"+code1+"\n"+"<"+"/script"+">";
var head="<"+"head"+">"+"\n"+code4+"\n"+js+"\n"+css+"\n"+"<"+"/head"+">";
var html="<html>"+"\n"+head+"\n"+body+"\n"+"</html>";
document.getElementById("livedemo").srcdoc=html; document.getElementById("livedemo").innerHTML=html;
};
function demulator()
{
document.getElementById("js").value="";
document.getElementById("css").value="";
document.getElementById("body").value="";
document.getElementById("head").value="";
document.getElementById("livedemo").srcdoc="";
document.getElementById("livedemo").innerHTML="";
};
