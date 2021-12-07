function getAndUpdate(){
    console.log("Update on process..")
    titl = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArr = [];
        itemJsonArr.push([titl, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr))
    }
    else{
        itemJsonArrStr = localStorage.getItem('itemsJson');
        itemJsonArr = JSON.parse(itemJsonArrStr);
        itemJsonArr.push([titl, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }
    update();

}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArr = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr))
    }
    else{
        itemJsonArrStr = localStorage.getItem('itemsJson');
        itemJsonArr = JSON.parse(itemJsonArrStr);
    }

    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemJsonArr.forEach((element, index)=> {
        str +=`
        <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class= "btn btn-sm btn-primary " onclick= "deleted(${index})">Remove</button></td>
            
          </tr>`;
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    console.log('delete', itemIndex);
    itemJsonArrStr = localStorage.getItem('itemsJson');
    itemJsonArr = JSON.parse(itemJsonArrStr);
    //deleting the element
    itemJsonArr.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    update();
}
function clearStore(){
    console.log("clearing the local storage");
    localStorage.clear();
    update();
}
