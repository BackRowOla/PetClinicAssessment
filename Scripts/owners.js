
function printStuff() {
    debugger;
    fetch('http://localhost:9966/petclinic/api/owners', {
        method: 'GET',
        headers: { "Accept": "application/json;charset=UTF-8" }

    }).then(res => res.json())
    .then(json => console.log(json));
}
