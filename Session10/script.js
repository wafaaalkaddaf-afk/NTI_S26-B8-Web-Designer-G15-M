var degree=prompt("enter your degree");
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
