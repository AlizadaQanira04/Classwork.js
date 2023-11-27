let fullName ="Alizade Qanira";
let age ="19";
let skills=["sleeping","eating","walking","reading","listening","speaking","writing"];
localStorage.setItem("fullName","Alizade Qanira");
localStorage.setItem("age","19");
localStorage.setItem("skills",JSON.stringify(skills));
console.log((localStorage.getItem("fullName")));
console.log(localStorage.getItem("age"));
console.log(JSON.parse(localStorage.getItem("skills")));