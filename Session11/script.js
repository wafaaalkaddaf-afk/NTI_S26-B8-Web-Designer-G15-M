/*courses['HTML','css','js'];
var user=prompt("enter nameOfcourse");
var index=courses.findIndex(cours=>cours===user);
if(index==-1){
    alert("course not found")
}
else{
    alert("product ia available")
}*/
var users=[]
function addUser(name,id,balance){
    var name = prompt("enter,your name")
    var id = prompt("enter yourid")
    var balance = Number(prompt("enter balance"))
    var newuser={
        name:name,
        id:id,
        balance:balance
    } 
    users.push (newuser)
     console.log("user added success")
} 
function edit(id,newBalance){
    var id = prompt("enter id edit")
    var addbalance=Number(prompt("enter new balance"))
var user =users.find((item)=>item.id==id)
if (user){
    user.balance=newBalance
    console.log("balance updated")
}else {
    console.log("user not found")
}
}
function transfer(fromID,toID,amount){
    var fromID =prompt("enter remitter id ")
    var toID=prompt("enter receiverid ")
    var amount =Number(prompt("rnter amount "))
    var remitter=users.find((item)=>item.id==fromID)
    var receiver =users.find((item)=>item.id==toID)
    if(remitter&&receiver){
        if(remitter.balance>=amount){
            remitter.balance=remitter.balance-amount
        receiver.balance=receiver.balance+amount
        console.log("transfer succcess")
        }else{
            console.log("failed ")
        }
    }
}
function deleteuser(id) {
    var id =prompt("enter id to deleets")
var user= users.find((item) => item.id == id)
if(user){
    users=users.filter((item)=>item.id!=id)
    console.log("user delete success")
}
else{
    console.log("not found")
}
}

addUser()
addUser()
transfer()
deleteuser()
console.table(users)