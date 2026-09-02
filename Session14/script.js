let courses=[{name:"javascript", code : "cs101"},
    {name:"html", code : "cs202"},
    {name:"css", code : "cs303"}
]
localStorage.setItem("courses", JSON.stringify(courses));
let course=JSON.parse(localStorage.getItem("courses"));
course.push({name:"python", code : "cs404"});
localStorage.setItem("courses", JSON.stringify(course));
let contanier=document.getElementById("contanier");
course.forEach((course)=>{let div=document.createElement("div");
    let h3=document.createElement("h3");
    let h4=document.createElement("h4");
    h3.innerText='sub'+course.name;
    h4.innerText="code"+course.code;
    div.appendChild(h3);
    div.appendChild(h4);
    contanier.appendChild(div);
})