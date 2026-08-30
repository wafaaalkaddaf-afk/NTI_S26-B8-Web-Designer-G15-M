/*var degree=prompt("enter your degree");
if(degree==null || degree==""){
    alert("enter your degree");
}
else if(degree>100){
    alert("invalid degree")
}
else if(degree>=90){
    alert("exelent")
}
else if(degree>=80){
    alert("very good")
}else if(degree>=70){
    alert(" good")
}
else {
    alert("failed")
}
function ss (start,endNum,breakNum,countNum){
    if(start!==undefined&&endNum !==undefined &&breakNum !==undefined&&countNum !==undefined){
        for(var i=start; i<=endNum; i++){
            if(i==breakNum){
                break;
        }if(i==countNum){
            continue;}
            console.log(i);
        }
    } else{
        console.log("entr 4 parameter")
    }}

ss(1,10,5,8)
ss(1,10,4,9)
ss(1,10,5)*/

 var courses =["HTML","CSS","JS"];
    var user =prompt("enter nameOfCourse" );
    if(user===null||user.trim()===""){
        alert("please enter nameOfCourse")
    }else{
        var input=user.trim().toUpperCase();
        var isFound=false;
for (var i=0;i<courses.length;i++){
    if(courses[i].toUpperCase()==input){
        isFound=true;
        break;
    }
}
if(isFound){
    alert("course is available")
}else {
    courses[courses.length]=input;
    alert("course has been added: "+ " "+courses)
    console.log("array of course after update ",courses)
 
}
    }

