function owarinoaisatu(){
var str="最後までご覧いただき、ありがとうございました";
var cnt=document.owari.saigo.value.length;
if(cnt<22){
document.owari.saigo.value=str.substr(0,cnt+1);}
else{
document.owari.saigo.value="最後までご覧いただき、ありがとうございました";
}
}

function finish(){
setInterval("owarinoaisatu()",500);
}
