//fetch owner info by id
let params = new URLSearchParams(window.location.search);
let ownerId = params.get('Id'); // dont forget to change to this from hard coded value

console.log(ownerId);

getOwener();

function getOwener() {
    fetch('http://localhost:9966/petclinic/api/owners/' + ownerId)
        .then(res => res.json())
        .then(json => handleData(json))
        .catch(err => console.error(err));
}

function handleData(data) {
    console.log(data);
    let fullname = data.firstName + " " + data.lastName;

    setData('ownerName', fullname);
    setData('addressLine', "Address: " + data.address);
    setData('cityLine', "City: " + data.city);
    setData('telephoneLine', "Phone Number: " + data.telephone);
    getPets(data.pets);
}

function getPets(petsData) {

    petsData.forEach(element => {
        console.log(element.id);
        constructElement(element.id, 'li', "Name: " + element.name + " | Type: " + element.type.name);
    });
}

function setData(elId, textData) {
    document.getElementById(elId).innerText = textData;
}

function constructElement(petId, elementName, content) {
    let myElement = document.createElement(elementName);
    myElement.addEventListener('click', () => window.location.href = './petInfo.html?petId=' + petId);
    myElement.className = 'list-group-item';
    myElement.innerText = content;
    document.getElementById('petList').appendChild(myElement);
}