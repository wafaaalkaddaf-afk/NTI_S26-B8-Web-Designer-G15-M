courses['HTML','css','js'];
var user=prompt("enter nameOfcourse");
var index=courses.findIndex(cours=>cours===user);
if(index==-1){
    alert("course not found")
}
else{
    alert("product ia available")
}