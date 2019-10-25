//fetch owner info by id
let params = new URLSearchParams(window.location.search);
let ownerId = params.get('id'); // dont forget to change to this from hard coded value

getOwener();

function getOwener() {
    fetch('http://localhost:9966/petclinic/api/owners/' + 1)
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
        constructElement(element.id, 'li', "Name: " + element.name + " | Type: " + element.type.name);
    });
}

function setData(elId, textData) {
    document.getElementById(elId).innerText = textData;
}

function constructElement(petId, elementName, content) {
    let myElement = document.createElement(elementName);
    myElement.addEventListener('click', () => window.location.href = './petInfo.html?' + petId);
    myElement.className = 'list-group-item';
    myElement.innerText = content;
    document.getElementById('petList').appendChild(myElement);
}