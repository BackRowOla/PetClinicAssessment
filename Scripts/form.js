let inputfirstname = document.getElementById("firstname");
let inputlastname = document.getElementById("lastname");
let inputaddress = document.getElementById("address");
let inputcity = document.getElementById("city");
let inputtelephone = document.getElementById("telephone");

function addOwner() {
    debugger;
    fetch('http://localhost:9966/petclinic/api/owners', {
        method: 'POST',
        body: JSON.stringify({
            "address": inputaddress.value,
            "city": inputcity.value,
            "firstName": inputfirstname.value,
            "id": 0,
            "lastName": inputlastname.value,
            "pets": [],
            "telephone": inputtelephone.value

        }),


        headers: { "Content-Type": "application/json" }
    }).then(window.location.href = './owners.html' )
}

