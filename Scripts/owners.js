let ownersList = document.getElementById("ownersList");
let fName;
let lName;
let iD;

printStuff();
function printStuff() {
    
    fetch('http://localhost:9966/petclinic/api/owners', {
    method: 'GET',
    headers: { "Accept": "application/json;charset=UTF-8" }
    
    }).then(res => res.json())
    .then(json => displayOwners(json));
    }
function displayOwners(data){

  
    for(let owner of data){
        
        fName =owner.firstName;
        lName = owner.lastName;
        iD = owner.id;
        let ownerBox = document.createElement('div');
        
        let line = document.createElement('h2');
        ownerBox.addEventListener('click', () =>  window.location.href= './ownerInfo.html?Id='+owner.id);
        line.innerText =iD+" "+fName+" "+lName+"\n";
        

        ownerBox.appendChild(line);
        ownersList.appendChild(ownerBox);
    }
}
function registerOwner(){
    window.location.href='./ownerInfo.html';
}