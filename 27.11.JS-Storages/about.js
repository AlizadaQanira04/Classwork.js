let userData=JSON.parse(localStorage.getItem("personObj"));
renderTable(userData);
function renderTable(userData){
    let table=document.querySelector("table");
    let tBody=document.querySelector("tBody");
    userData.forEach((data) => {
        let tr =document.createElement("tr");
        tr.innerHTML=`
    <td>${data.id}</td>
    <td>${data.firstName}</td>
    <td>${data.lastName}</td>
    <td>${data.address}</td>
        `
        tBody.append(tr);
    });
}