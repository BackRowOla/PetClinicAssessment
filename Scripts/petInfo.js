const petId = new URLSearchParams(window.location.search).get('petId');

let data;

fetch("http://localhost:9966/petclinic/api/pets/" + petId)
    .then(res => res.json())
    .then(json => infolog(json))
    .catch(err => console.error(err));

function infolog(data) {

    let petName = data.name;
    let petDOB = data.birthDate;

    document.getElementById('petName').innerText = "Pet Name: " + petName;
    document.getElementById('petDOB').innerText = "Pet DOB: " + petDOB;
    let button = document.createElement("button");

    function deleteVisit() {
        fetch("https://localhost:9966/petclinic/api/visits/" + petId, {
            headers: { "Accept": "application/json;charset=UTF-8" }
        }
        )
    }
    data.visits.forEach(p => {
        let visit = document.createElement('li');
        visit.className = "list-group-item";
        let date = document.createElement('p');
        date.innerText = "Visit date: " + p.date;
        let description = document.createElement('p');
        description.innerText = "Description: " + p.description;
        visit.appendChild(date);
        visit.appendChild(description);
        let button = document.createElement("button");
        // button.id = 'deleteid=' + p.id;
        button.className = "btn btn-primary align-centre";
        button.innerText = "Cancel Visit";
        visit.appendChild(button);
        button.addEventListener('click', () => deleteVisit());
        document.getElementById("visits-list").appendChild(visit);
    });

}
